<template>
  <div>
    <Icon icon="ep:histogram" />
    <Icon icon="ri:menu-2-fill" />
    <Icon icon="ri:menu-2-fill" :horizontalFlip="true" />
    <!-- <Icon icon="logos:zoom" /> -->
    <Icon icon="line-md:arrow-align-bottom" />
    <Icon icon="line-md:beer-loop" />
    <Icon icon="line-md:close-to-menu-alt-transition" />
    <button @click="show = !show">Toggle</button>
    <Transition>
      <div>
        <p v-if="show">hello</p>
      </div>
    </Transition>
    <el-divider />
    <div class="body">
      <label for="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <el-divider />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Logo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
const show = ref(false)
const isMenuOpen = ref(false)
function toggleMenu() {}
</script>
<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
