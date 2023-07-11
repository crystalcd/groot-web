import Cookies from 'js-cookie';

export const TOOKENkEY = 'X-TOKEN';

export function getToken() {
  return Cookies.get(TOOKENkEY) || '';
}

export function setToken(token) {
  Cookies.set(TOOKENkEY, token);
}

export function removeToken() {
  Cookies.remove(TOOKENkEY);
}

export function clearLocal() {
  localStorage.clear();
  sessionStorage.clear();
  removeToken();
}
