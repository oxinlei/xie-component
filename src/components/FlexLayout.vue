<template>
  <div class="flex-box">

    <div class="flex-left">
      <!--左侧内容-->
      <template>
        <slot name="flex-left-box"></slot>
      </template>

      <div class="line" @mousedown="changeWidth($event)">
        <i></i>
        <i></i>
      </div>
    </div>

    <div class="flex-right">

      <div class="flex-right-top">
        <!--右侧头部-->
        <template>
          <slot name="flex-right-top-box"></slot>
        </template>

        <div class="line" @mousedown="changeHeight($event)">
          <i></i>
          <i></i>
        </div>
      </div>

      <div class="flex-right-bottom">
        <!--右侧底部-->
        <template>
          <slot name="flex-right-bottom-box"></slot>
        </template>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "FlexLayout",
  methods:{
    changeWidth(e){
      let startX = e.clientX,
        startWidth = parseInt( window.getComputedStyle(document.querySelector('.flex-left')).width , 10)
      document.onmousemove = (e) => {
        let newWidth = startWidth + e.clientX - startX
        document.querySelector('.flex-left').style.width = newWidth + 'px'
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    changeHeight(e){
      let startY = e.clientY,
        startHeight = parseInt( window.getComputedStyle(document.querySelector('.flex-right-top')).height , 10)
      document.onmousemove = (e) => {
        let newHeight = startHeight + e.clientY - startY
        document.querySelector('.flex-right-top').style.height = newHeight + 'px'
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";
.flex{
  &-box{
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  &-left{
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 400px;
    padding-right: 6px;
    box-sizing: border-box;
    .line{
      top: 0;
      right: 0;
      width: 6px;
      height: 100%;
      cursor: col-resize;
      i{
        height: 14px;
        width: 1px;
        margin: 0 1px;
      }
    }
  }
  &-right{
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 400px;
    background: #fff;
    &-top{
      position: relative;
      min-height: 200px;
      padding-bottom: 6px;
      .line{
        display: flex;
        flex-direction: column;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 6px;
        cursor: row-resize;
        i{
          height: 1px;
          width: 14px;
          margin: 1px 0;
        }
      }
    }
    &-bottom{
      flex: 1;
      min-height: 200px;
    }
  }
}
</style>
