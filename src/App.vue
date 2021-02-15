<template>
  <div id="app">
    <el-row>
      <el-menu :default-active="defaultActive" class="el-menu" mode="horizontal"
        background-color="#303133"
        text-color="#FFFFFF"
        active-text-color="#409EFF"
        @select="handleSelect">
        <el-menu-item index="0"><span class="my_header">FA达成率编辑平台</span></el-menu-item>
        <el-menu-item index="1">Edit OTD</el-menu-item>
        <el-menu-item index="2">Edit Plan</el-menu-item>
        <el-menu-item index="3">Upload File</el-menu-item>
      </el-menu>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      defaultActive: '',
      activePath: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (keyPath[0] === '1') {
        if (this.activePath !== keyPath[0]) {
          this.activePath = keyPath[0]
          this.$router.push('/editOtd')
        }
      } else if (keyPath[0] === '2') {
        if (this.activePath !== keyPath[0]) {
          this.activePath = keyPath[0]
          this.$router.push('/editPlan')
        }
      } else if (keyPath[0] === '3') {
        if (this.activePath !== keyPath[0]) {
          this.activePath = keyPath[0]
          this.$router.push('/uploadFile')
        }
      } else {
        this.activePath = keyPath[0]
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.my_header {
  font-size: 16px
}
</style>
