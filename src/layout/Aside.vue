<template>
  <Menu class="h-100 overflow-auto" :menus="menuData"></Menu>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const menus = [
  {
    path: '/home',
    name: '首页',
    icon: 'House'
  },
  {
    path: '/about',
    name: '关于我们',
    icon: 'Avatar'
  },
  {
    name: 'Demo',
    icon: 'House',
    children: [
      {
        path: 'demo/usebreakpoint',
        name: 'UseBreakPoint'
      },
      {
        path: '/product/detail',
        name: '产品详情',
        icon: 'Delete'
      }
    ]
  },
  {
    name: '用户管理',
    icon: 'user',
    children: [
      {
        path: '/user/list',
        name: '用户列表'
      },
      {
        path: '/user/profile',
        name: '用户详情'
      }
    ]
  }
]

const menuData = ref(menus)
</script>

<style lang="scss">
@media (min-width: 768px) {
  .el-menu {
    height: calc(100%) !important;
  }
}
</style>
