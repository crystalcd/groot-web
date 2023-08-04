<template>
  <div>
    {{ smAndLarger }}
    {{ largerThanSm }}
    {{ lgAndSmaller }}
    {{ smallerThanLg }}
  </div>
</template>
<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndLarger = breakpoints.greaterOrEqual('sm') // sm and larger
const largerThanSm = breakpoints.greater('sm') // only larger than sm
const lgAndSmaller = breakpoints.smallerOrEqual('lg') // lg and smaller
const smallerThanLg = breakpoints.smaller('lg')
console.log(smAndLarger, largerThanSm, lgAndSmaller, smallerThanLg)
</script>
<style lang="scss"></style>
