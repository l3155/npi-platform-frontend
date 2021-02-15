<template>
  <div v-loading="loading">
    <el-row>
      <el-col :span='12'>
        <el-card class="box-card">
          <h3><i class="el-icon-edit"></i>GX达成数据</h3>
          <otd-table v-bind:tableData="tableData1"></otd-table>
        </el-card>
      </el-col>
      <el-col :span='12'>
        <el-card class="box-card">
          <h3><i class="el-icon-edit"></i>HZ达成数据</h3>
          <otd-table v-bind:tableData="tableData2"></otd-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OtdTable from '../components/OtdTable'
export default {
  data () {
    return {
      tableData1: [],
      tableData2: [],
      loading: true
    }
  },
  methods: {
    getOtdData () {
      this.$http.get('http://127.0.0.1:5000/get_otd').then((res) => {
        console.log(res)
      })
    }
  },
  mounted () {
    this.$http.get('http://127.0.0.1:5000/get_otd').then((res) => {
      this.tableData1 = res.data.gx
      this.tableData2 = res.data.hz
      this.loading = false
    })
  },
  components: {
    'otd-table': OtdTable
  }
}
</script>

<style scoped>
h3 {
  text-align: left
}
.box-card {
  margin: 2px
}
</style>
