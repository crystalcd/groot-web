<!-- Menu.vue -->

<template>
  <div class="menu">
    <el-menu :default-active="activePath" mode="vertical">
      <component v-for="item in menus" :is="getComponentType(item)" :item="item" :key="item.name" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'

const activePath = '默认激活的菜单项的path，可根据需要设置'
const props = defineProps(['menus'])

const getComponentType = (item: { children: any }) => {
  return item.children ? SubMenu : MenuItem
}
console.log('menu', props.menus)
</script>
<style lang="scss">
@media (max-width: 767px) {
  .menu {
    display: flex;
    flex-direction: row;
  }
  .el-menu {
    border: none;
    width: 100%;
  }
}
</style>
