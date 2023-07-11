<template lang="">
  <div>
    {{ count }}
  </div>
  <button @click="add">add</button>
</template>
<script lang="ts">
import { get } from '@/http'
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    add() {
      this.count++;
      get("/domains", { project: 'slack' }).then(res => {
        console.log(res)
      }).catch(e => {
        alert(e);
      })
    }
  },
  mounted() {
    this.add()
  }
}
</script>
<style lang=""></style>
