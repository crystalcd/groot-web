<!-- SubMenu.vue -->

<template>
  <el-sub-menu :index="item.path" :key="item.name">
    <template #title>
      <el-icon>
        <DynamicIcon :icon="item.icon"></DynamicIcon>
      </el-icon>
      <span>{{ item.name }}</span>
    </template>
    <component
      v-for="child in item.children"
      :is="getComponentType(child)"
      :item="child"
      :key="child.name"
    />
  </el-sub-menu>
</template>

<script lang="ts" setup>
import SubMenu from './SubMenu.vue'
import MenuItem from './MenuItem.vue'

const props = defineProps(['item'])

const getComponentType = (item: { children: any }) => {
  return item.children ? SubMenu : MenuItem
}

console.log('submenu', props.item)
</script>
