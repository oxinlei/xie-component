<template>
  <div class="color-text">
    <h3>AnimateText</h3>
  </div>
</template>

<script>
export default {
  name: 'ColorText'
}
</script>

<style scoped lang="scss">
h3 {
  font-family: Arial;
  font-size: 10rem;
  font-weight: 600;
  letter-spacing: 10px;
  /* 渐变背景 */
  background: linear-gradient(45deg, #00a0e9, #10d39d, #00a0e9, #10d39d);
  /*设置字体颜色透明*/
  color: transparent;
  /*背景裁剪为文本形式*/
  -webkit-background-clip: text;
  animation: gradient 5s linear infinite;
  text-align: center;
}
@keyframes gradient {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1000px 0;
  }
}
</style>
