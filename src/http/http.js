import axios from 'axios';
import { TOOKENkEY, clearLocal, getToken } from '../utils';
import { showMessage } from './status';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token && config && config.headers) {
      config.headers[TOOKENkEY] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    const { data } = res;
    const { code, message } = data.status;
    switch (code) {
      case 0:
        return data;
      default:
        showMessage(message);
        return Promise.reject(data);
    }
  },
  (error) => {
    const { response } = error;
    if (response) {
      const status = response.status;
      if (status === 401) {
        clearLocal();
        window.location.href = '/login';
      } else {
        showMessage(status);
      }

      return Promise.reject(response.data);
    }
  }
);

export const request = (url, options) => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      url,
      ...options,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

export function get(url, params) {
  return request(url, {
    params,
    method: 'GET',
  });
}

export function post(url, data) {
  return request(url, {
    data,
    method: 'POST',
  });
}

export function patch(url, data) {
  return request(url, {
    data,
    method: 'patch',
  });
}

export function $delete(url) {
  return request(url, {
    method: 'DELETE',
  });
}
