<!-- MenuItem.vue -->

<template>
  <el-menu-item :index="item.path" :key="item.name" @click="handleMenuItemClick(item)">
    <el-icon>
      <DynamicIcon :icon="item.icon"></DynamicIcon>
    </el-icon>
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps(['item'])

const handleMenuItemClick = (item: any) => {
  router.push(item.path)
}

console.log('menu item', props.item)
</script>
