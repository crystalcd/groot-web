<template>
  <el-header class="d-flex align-items-center">
    <el-image class="me-3" :src="logoUrl" />

    <el-input placeholder="搜索" class="search flex-grow-2" />

    <el-tooltip content="创建" placement="bottom">
      <el-button circle :icon="Plus" />
    </el-tooltip>

    <el-avatar :src="avatarUrl" :size="40" class="ms-3" />
  </el-header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

// 数据
const logoUrl = ref('')
const avatarUrl = ref('')

// 方法
function handleCreate() {
  //...
}

// 暴露属性和方法
defineExpose({
  logoUrl,
  avatarUrl,
  handleCreate
})
</script>

<style lang="scss">
.el-header {
  padding: 10px 20px;
}
.search {
  flex: 0 0 30%;
  margin: 0 auto;
}
</style>
