<template lang="">
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <div style="line-height: 58px">
      <el-button type="primary" circle @click="add">
        <i-ep-edit></i-ep-edit>
      </el-button>
    </div>

    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>

  <el-dialog v-model="dialogFormVisible" title="Start Scan">
    <el-form :model="form">
      <el-form-item label="Project name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Domains" :label-width="formLabelWidth">
        <el-input v-model="form.domains" placeholder="Please input domains" type="textarea">
        </el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { get, post } from '@/http'
export default {
  data() {
    return {
      count: 1,
      activeIndex: 2,
      dialogFormVisible: false,
      formLabelWidth: '140px',
      form: {
        name: '',
        domains: ''
      }
    }
  },
  methods: {
    add() {
      this.count++
      this.dialogFormVisible = true
      get('/domains', { project: 'slack' })
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    handleSelect(key: string, keyPath: string[]) {
      console.log(key, keyPath)
    },
    onSubmit() {
      console.log(this.form)
      post('/domains', this.form).then((res) => {
        console.log(res)
      })
      // this.dialogFormVisible = false
    }
  },
  mounted() {}
}
</script>
<style lang="css">
.flex-grow {
  flex-grow: 1;
}
</style>
