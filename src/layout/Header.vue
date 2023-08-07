<template>
  <header class="header">
    <div class="logo">
      <el-image v-if="logoUrl" class="me-3" :src="logoUrl" />
      <template v-else> groot </template>
    </div>
    <nav class="menu">
      <el-tooltip content="创建" placement="bottom">
        <el-button circle :icon="Plus" />
      </el-tooltip>
      <el-avatar :src="avatarUrl" :size="40" class="avatar ms-3" />
    </nav>

    <div class="xs-menu">
      <el-avatar :src="avatarUrl" :size="40" class="avatar ms-3" />
      <!-- <Hanbeger></Hanbeger> -->
      <transition name="fade">
        <Icon class="menu-icon" :icon="publishedBooksMessage" width="24" @click="toggleMenu" />
      </transition>

      <transition name="fade">
        <div v-if="isMenuOpen" class="full-screen">
          <h1>123</h1>
          <el-divider />
          ABC
          <el-divider />
          CRF
          <el-divider />
        </div>
      </transition>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import 'element-plus/theme-chalk/display.css'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value

  console.log(isMenuOpen.value, publishedBooksMessage)
}
const publishedBooksMessage = computed(() => {
  return isMenuOpen.value ? 'line-md:close-small' : 'ri:menu-2-fill'
})

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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  .logo {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .menu {
    display: flex;
    align-items: center;

    .avatar {
      margin-right: 10px;
    }
  }
  .xs-menu {
    display: none; // 默认在电脑端隐藏菜单图标
    .menu-icon {
      cursor: pointer;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  @media (max-width: 768px) {
    // 手机端样式
    flex-direction: row; // 保持水平布局

    .logo {
      order: 0; // 将 logo 放在最左侧
      margin-right: auto; // 将右侧空间都给 logo
    }

    .menu {
      order: 2; // 菜单放在最右侧
      display: none; // 默认隐藏菜单栏

      .avatar {
        display: none; // 隐藏其他元素
      }
    }
    .xs-menu {
      display: flex;
      align-items: center;
    }

    &.menu-open {
      display: flex; // 展开菜单时显示菜单栏
      flex-direction: column;
      align-items: flex-start;
      margin-right: auto; // 将右侧空间都给菜单栏
    }

    .full-screen {
      position: fixed;
      top: 60px;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0 32px;
      width: 100%;
      background-color: $white;
      transition: background-color 0.5s;
      overflow-y: auto;
    }
  }
}
</style>
