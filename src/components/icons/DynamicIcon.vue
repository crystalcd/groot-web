<template>
  <component :is="getIcon(icon)" />
</template>
<script lang="ts" setup>
import {
  Delete,
  Edit,
  Female,
  EditPen,
  House,
  Odometer,
  PieChart,
  Avatar
} from '@element-plus/icons-vue'

const icons: Array<any> = [Delete, Edit, Female, EditPen, House, Odometer, PieChart, Avatar]

defineProps(['icon'])

const getIcon = (icon: any) => {
  return icons.find((i) => i.name === icon)
}
</script>
<style lang=""></style>
