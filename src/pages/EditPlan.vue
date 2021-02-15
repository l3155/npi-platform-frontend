<template>
  <div v-loading="loading">
    <el-row>
      <el-card class="box-card">
        <h3><i class="el-icon-edit"></i>EditPlan</h3>
        <plan-table v-bind:tableData="planData"></plan-table>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import PlanTable from '../components/PlanTable'
export default {
  data () {
    return {
      planData: [],
      loading: true
    }
  },
  methods: {
    getPlanData () {
      this.loading = true
      this.$http.get('http://127.0.0.1:5000/get_plan').then((res) => {
        this.planData = res.data.data
      })
      this.loading = false
    }
  },
  mounted () {
    this.getPlanData()
  },
  components: {
    'plan-table': PlanTable
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
