<template>
  <div>
    <label class="hamburger-container">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
/* hamburger-menu.scss */

// hamburger-container {
//   display: grid;
//   place-items: center;
//   height: 100vh;
//   background: #4c23e8;
//   margin: 0;
//   padding: 0;
// }

.hamburger-container {
  display: flex;
  flex-direction: column;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  box-sizing: border-box;

  span {
    background: $black;
    border-radius: 10px;
    height: 0.25rem;
    margin: 0.25rem 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  span:nth-of-type(1) {
    width: 50%;
  }

  span:nth-of-type(2) {
    width: 100%;
  }

  span:nth-of-type(3) {
    width: 75%;
  }
}

input[type='checkbox'] {
  display: none;

  &:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotate(45deg) translate(150%, 0);
  }

  &:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotate(-45deg);
  }

  &:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(50%, -190%) rotate(45deg);
  }
}
</style>
