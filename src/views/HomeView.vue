<template>
  <div>
    <el-row class="mb-4">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button icon="search">搜索</el-button>
      <el-button type="primary" :icon="Edit">编辑</el-button>
      <el-button type="danger" :icon="Delete">删除</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button circle icon="search" />
      <el-button type="warning" circle icon="star-off" />
      <el-button type="danger" circle :icon="Delete" />
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref, reactive, toRefs } from 'vue'
</script>

<style>
/* ... */
</style>
