<template>
  <h1>About</h1>

  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <el-button type="primary" icon="i-ep-add-location" circle />
            <el-button type="primary" icon="i-ep-search">搜索</el-button>
            <i class="i-ep-edit"></i>

            <el-row>
              <el-button :icon="Search" circle />
              <el-button type="primary" :icon="Edit" circle />
              <el-button type="success" :icon="Check" circle />
              <el-button type="info" :icon="Message" circle />
              <el-button type="warning" :icon="Star" circle />
              <el-button type="danger" :icon="Delete" circle />
            </el-row>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
</script>
