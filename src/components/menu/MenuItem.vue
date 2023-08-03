<!-- MenuItem.vue -->

<template>
  <el-menu-item :index="item.path" :key="item.name">
    <i :class="`el-icon-${item.icon}`"></i>
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
const props = defineProps(['item'])

console.log('menu item', props.item)
</script>
