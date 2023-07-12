<template lang="">
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            Main
            <el-icon color="#409EFC" class="no-inherit">
              <i-ep-add-location />
            </el-icon>
            <el-icon><Plus /></el-icon>

            <div style="font-size: 20px">
              <!-- 由于SVG图标默认不携带任何属性 -->
              <!-- 你需要直接提供它们 -->
              <Edit style="width: 1em; height: 1em; margin-right: 8px" />
              <Share style="width: 1em; height: 1em; margin-right: 8px" />
              <Delete style="width: 1em; height: 1em; margin-right: 8px" />
              <Search style="width: 1em; height: 1em; margin-right: 8px" />
            </div>
            <el-icon><Plus /></el-icon>
          </el-main>
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

/* .el-main {
  background-color: #cccccc;
} */

.el-aside {
  background-color: #006666;
  height: 100vh;
}
</style>
