<template lang="">
  <div>
    {{ count }}
  </div>
  <button @click="add">add</button>
</template>
<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    add() {
      this.count++
    }
  },
  mounted() {
    this.add()
  }
}
</script>
<style lang=""></style>
