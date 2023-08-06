<template>
  <el-row :gutter="10">
    <el-col :xs="24" :span="6"><div class="grid-content ep-bg-purple">xs 沾满</div></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
  <el-divider />
  <el-row :align="'middle'">
    <el-col :span="12">
      <el-image class="me-3" />
    </el-col>
    <el-col>
      <el-input v-model="input" placeholder="Please input" />
    </el-col>
    <el-col>
      <el-tooltip content="创建" placement="bottom">
        <el-button circle :icon="Plus" />
      </el-tooltip>

      <el-avatar :size="40" class="ms-3" />
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
const input = ref('')
</script>
<style lang="scss">
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple {
  background-color: #d3dce6;
}
.ep-bg-purple-light {
  background-color: #e5e9f2;
}
</style>
