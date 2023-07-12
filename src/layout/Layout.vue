<template lang="">
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="css">
.el-header {
  background-color: #000033;
}
.el-main {
  background-color: #cccccc;
}
.el-aside {
  background-color: #006666;
  height: 100vh;
}
</style>
