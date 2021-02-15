<template>
<el-row>
  <el-col :span='12'>
    <h3>文件上传</h3>
    <el-divider></el-divider>
    <el-upload
        class="upload-demo"
        ref="upload"
        action="/submit_upload_file"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <p>目前已上传的文件为</p>
        <div slot="tip" class="el-upload__tip">请仅上传1个文件</div>
      </el-upload>
      <el-card class="box-card">
        <p>请确保文件中日期等数据格式的准确性</p>
        <p>上传的文件会被改名为：NPI_Plan_Summary</p>
        <p>上传文件后，WIP数据会被刷新</p>
      </el-card>
  </el-col>
  <cl-col :span='12'>
  </cl-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      fileList: []
    }
  },
  created () {
    let url = '/get_file'
    this.$http.get(url).then((res) => {
      this.fileList = res.data
    })
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
      this.$notify({
        title: '成功',
        message: '更新成功,请等待几分钟后刷新wip',
        type: 'success'
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-top: 100px;
  text-align: left;
  font-size: 12px
}
</style>
