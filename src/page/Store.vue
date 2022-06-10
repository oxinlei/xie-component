<template>
  <div>
    <i class="el-icon-rank" v-drag-icon></i>
    <div class="box">
      拖动
    </div>
  </div>
</template>

<script>
export default {
  name: 'Store'
}
</script>

<style scoped lang="scss">
i {
  font-size: 24px;
}
.box {
  width: 100px;
  height: 100px;
  background: #6196e6;
  color: #fff;
}
</style>
