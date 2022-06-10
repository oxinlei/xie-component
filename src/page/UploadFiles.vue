<template>
  <div class="upload-box">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <div class="text">
        <p>拖拽文件到此处或<b>点击上传</b></p>
        <span>最大10MB，支持jpg,png,doc,pdf</span>
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "UploadFiles"
}
</script>

<style scoped lang="scss">
.upload-box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .text{
    color: #adadad;
    p{
      line-height: 30px;
    }
    span{
      color: #bcbcbc;
    }
  }
}
</style>
<style lang="scss">
.el-upload-dragger{
  border: 2px dashed #66b1ff !important;
  height: auto !important;
  padding: 10px !important;
  border-radius: 12px !important;
}
</style>
