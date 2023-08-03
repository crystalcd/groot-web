<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-container">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup></script>
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
