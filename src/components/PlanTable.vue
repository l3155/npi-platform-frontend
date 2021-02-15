<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%; font-size: 10px"
    >
    <el-table-column
      prop="pc_owner"
      label="PC"
      align="center"
      width="110">
      <template slot-scope="scope">
        <!-- <el-input v-model="scope.row.plan_date" v-show="true"></el-input> -->
        <span v-show="!scope.row.isEditing">{{scope.row.pc_owner}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="lot_no"
      label="Lot"
      align="center"
      width="110">
      <template slot-scope="scope">
        <!-- <el-input v-model="scope.row.lot_no" v-show="true"></el-input> -->
        <span v-show="!scope.row.isEditing">{{scope.row.lot_no}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="part_no"
      label="PartNo"
      align="center"
      width="130">
      <template slot-scope="scope">
        <!-- <el-input v-model="scope.row.plan_date" v-show="true"></el-input> -->
        <span v-show="!scope.row.isEditing">{{scope.row.part_no}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="panel_size"
      label="Size"
      align="center"
      width="90">
      <template slot-scope="scope">
        <!-- <el-input v-model="scope.row.plan_date" v-show="true"></el-input> -->
        <span v-show="!scope.row.isEditing">{{scope.row.panel_size}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="released_date"
      label="Release"
      align="center"
      width="90">
      <template slot-scope="scope">
        <!-- <el-input v-model="scope.row.plan_date" v-show="true"></el-input> -->
        <span v-show="!scope.row.isEditing">{{scope.row.released_date}}</span>
      </template>
    </el-table-column>

    <el-table-column
      prop="request_date"
      label="ReqDate"
      align="center"
      width="120">
      <template slot-scope="scope">
        <el-input v-model="scope.row.actual_qty" v-show="true"></el-input>
        <!-- <span v-show="!scope.row.isEditing">{{scope.row.plan_qty}}</span> -->
      </template>
    </el-table-column>
    <el-table-column
      prop="gx_plan_date"
      label="GXPlan"
      align="center"
      width="120">
      <template slot-scope="scope">
        <el-input v-model="scope.row.gx_plan_date" v-show="true"></el-input>
        <!-- <span v-show="!scope.row.isEditing">{{scope.row.plan_qty}}</span> -->
      </template>
    </el-table-column>
    <el-table-column
      prop="hz_plan_date"
      label="HZPlan"
      align="center"
      width="120">
      <template slot-scope="scope">
        <el-input v-model="scope.row.hz_plan_date" v-show="true"></el-input>
        <!-- <span v-show="!scope.row.isEditing">{{scope.row.plan_qty}}</span> -->
      </template>
    </el-table-column>
    <el-table-column
      prop="gx_actual_date"
      label="GXActual"
      align="center"
      width="120">
      <template slot-scope="scope">
        <el-input v-model="scope.row.gx_actual_date" v-show="true"></el-input>
        <!-- <span v-show="!scope.row.isEditing">{{scope.row.plan_qty}}</span> -->
      </template>
    </el-table-column>
    <el-table-column
      prop="hz_actual_date"
      label="HZActual"
      align="center"
      width="120">
      <template slot-scope="scope">
        <el-input v-model="scope.row.hz_actual_date" v-show="true"></el-input>
        <!-- <span v-show="!scope.row.isEditing">{{scope.row.plan_qty}}</span> -->
      </template>
    </el-table-column>
    <el-table-column
      prop="step"
      label="Step"
      align="center"
      width="220">
      <template slot-scope="scope">
        <!-- <el-input v-model="scope.row.plan_date" v-show="true"></el-input> -->
        <span v-show="!scope.row.isEditing">{{scope.row.step}}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="Action"
      width="105">
      <template slot-scope="scope">
        <!-- <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button> -->
        <el-button @click="updateOtdData(scope.row)" type="text" size="small">提交</el-button>
        <el-button @click="updateOtdData(scope.row)" type="text" size="small">忽略</el-button>
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
      this.$http.get('http://127.0.0.1:5000/update_otd?' +
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

<style scoped>
.el-input {
  font-size: 12px
}
</style>
