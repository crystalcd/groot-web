<template lang="">
  <div>h1</div>
  <el-tree :props="props" :load="loadNode" lazy />
</template>
<script lang="ts">
import type Node from 'element-plus/es/components/tree/src/model/node'
import { get, post } from '@/http'
interface Tree {
  name: string
  leaf?: boolean
}
export default {
  data() {
    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      }
    }
  },
  methods: {
    loadNode(node: Node, resolve: (data: Tree[]) => void) {
      console.log(node)
      if (node.level === 0) {
        return resolve([{ name: 'DataBase' }])
      } else if (node.level === 1) {
        get('/dbs').then((res) => {
          console.log(res)
          const data = res.map((dbname: any) => {
            return {
              name: dbname,
              leaf: false
            }
          })
          resolve(data)
        })
      } else if (node.level === 2) {
        // get('/collections',{dbname,})
      } else {
        return resolve([])
      }
    }
  }
}
</script>
<style lang=""></style>
