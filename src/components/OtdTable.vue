<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column
      prop="plan_date"
      label="PlanDate"
      align="center"
      width="180">
      <template slot-scope="scope">
        <!-- <el-input v-model="scope.row.plan_date" v-show="true"></el-input> -->
        <span v-show="!scope.row.isEditing">{{scope.row.plan_date}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="plan_qty"
      label="PlanQty"
      align="center"
      width="100">
      <template slot-scope="scope">
        <el-input v-model="scope.row.plan_qty" v-show="true"></el-input>
        <!-- <span v-show="!scope.row.isEditing">{{scope.row.plan_qty}}</span> -->
      </template>
    </el-table-column>
    <el-table-column
      prop="actual_qty"
      label="ActualQty"
      align="center"
      width="100">
      <template slot-scope="scope">
        <el-input v-model="scope.row.actual_qty" v-show="true"></el-input>
        <!-- <span v-show="!scope.row.isEditing">{{scope.row.plan_qty}}</span> -->
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="AchievingRate">
      <template slot-scope="scope">
        <!-- <el-input v-model="scope.row.plan_qty" v-show="true"></el-input> -->
        <span v-show="true">{{ (scope.row.actual_qty/scope.row.plan_qty).toFixed(2) * 100 + '%' }}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="Action">
      <template slot-scope="scope">
        <!-- <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button> -->
        <el-button @click="updateOtdData(scope.row)" type="text" size="small">提交</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      isEditing: true,
      rowDataEditing: {},
      loading: true
    }
  },
  methods: {
    updateOtdData (row) {
      console.log(row)
      this.$http.get('/update_otd?' +
      'plan_qty=' + row.plan_qty +
      '&actual_qty=' + row.actual_qty +
      '&id=' + row.id).then((res) => {
        if (res.data === 'success') {
          this.$notify({
            title: '成功',
            message: '更新成功',
            type: 'success'
          })
        } else {
          this.$notify.error({
            title: '错误',
            message: '更新失败'
          })
        }
      })
    }
  },
  props: [ 'tableData' ]
}
</script>
