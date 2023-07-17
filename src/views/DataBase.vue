<template lang="">
  <div>MongoDB</div>
  <el-container>
    <el-aside width="200px">
      <el-tree :props="props" :load="loadNode" @node-click="nodeClick" lazy />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-table-v2 :columns="columns" :data="data" :width="700" :height="400" fixed />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
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
      },
      columns: [],
      data: []
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
        const dataBaseName = node.data.name
        get('/collections', { dbname: dataBaseName }).then((res) => {
          const data = res.map((collection: any) => {
            return {
              name: collection,
              leaf: true
            }
          })
          resolve(data)
        })
      } else {
        return resolve([])
      }
    },

    nodeClick(node, nodeprop, treenode, e) {
      console.log(node, nodeprop, treenode, e)
      if (node.leaf) {
        const table = node.name
        const db = nodeprop.parent.data.name
        console.log(db, table)
        get(`/collections/${db}/${table}`).then((res) => {
          console.log(res)
          if (res.length > 0) {
            this.columns = res[0].map((line) => {
              return {
                key: line.Key,
                dataKey: line.Key,
                title: line.Key,
                width: 150
              }
            })
            this.data = res.map((line) => {
              let map = {}
              line.forEach((element) => {
                map[element.Key] = element.Value
              })
              return map
            })
            console.log('data', this.data)
          }
        })
      }
    }
  }
}
</script>
<style lang=""></style>
