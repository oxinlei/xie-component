<template>
  <div class="pop">
    <div class="pop-box" v-drag>
      <header>
        {{title}}
        <i class="iconfont icon-guanbi" @click="closePop()"></i>
      </header>
      <div class="pop-main"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: [
    'title'
  ],
  methods:{
    closePop(){
      this.$emit('closePop')
    }
  }
}
</script>

<style scoped lang="scss">
.pop{
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: all .5s;
  .pop-box{
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.3);
    transform: scale(1);
    transition: all .3s;
    padding:0 20px;
    header{
      padding: 0 20px;
      height: 50px;
      line-height: 50px;
      position: relative;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      i{
        position: absolute;
        right: 0px;
        cursor: pointer;
      }
    }
    .pop-main{

    }
  }
  &.show{
    opacity: 100;
    .pop-box {
      transform: scale(1);
    }
  }
  &.hide{
    opacity: 0;
    .pop-box {
      transform: scale(0);
    }
  }
}
</style>
