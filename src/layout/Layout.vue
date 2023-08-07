<template>
  <div>
    <el-header class="border-bottom header-container">
      <Header> </Header>
    </el-header>
    <el-header v-if="isMobile" class="d-flex align-items-center border-bottom">
      <span @click="customClickHandler"> <Icon icon="ri:menu-2-fill" width="24" /> Menu </span>
    </el-header>
    <el-container>
      <el-aside v-if="!isMobile" width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <el-drawer
      v-if="isMobile"
      v-model="drawerVisible"
      :with-header="false"
      direction="ltr"
      size="70%"
    >
      <Aside></Aside>
    </el-drawer>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Menu } from '@element-plus/icons-vue'
import { Icon } from '@iconify/vue'
const isMobile = ref(window.innerWidth < 768)
const drawerVisible = ref(false)
const handleResize = () => {
  let width = window.innerWidth
  isMobile.value = width < 768
  console.log(width)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

const customClickHandler = () => {
  console.log(234)
  drawerVisible.value = true
}
</script>
<style lang="scss">
.header-container {
  position: sticky;
  top: 0;
  z-index: 100;
  background: $white;
}
.el-aside {
  height: 100vh;
}
</style>
