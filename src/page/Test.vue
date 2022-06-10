<template>
  <div class="main">
    <button class="come" @click="fly">
      <i ref="button" class="iconfont icon-anniu"></i>
      come
    </button>
    <button ref="button1"  class="to">
      <i class="iconfont icon-anniu"></i>
      to
    </button>
  </div>
</template>

<script>
export default {
  name: "Test",
  methods:{
    fly(){
      let button = this.$refs.button
      let button1 = this.$refs.button1
      button.className = 'iconfont icon-anniu'
      button1.className = 'to'
      setTimeout(function () {
        button.className = 'iconfont icon-anniu fly'
      },100)
      setTimeout(function () {
        button1.className = 'to move'
      },500)
    },
  },
  mounted() {
    // for (var i = 0; i < 5; ++i) {
    //   setTimeout(() => console.log(i), 0)
    // }
    // console.log(i)
  }
}
</script>

<style scoped lang="scss">
.main{
  width:1220px;
  height: 100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  button{
    padding: 5px 20px;
    color: #fff;
    font-size: 14px;
    background: #2db2ff;
    border-radius: 10px;
    margin: 0 50px;
    position: relative;
    .fly{
      position:absolute;
      animation: fly .5s infinite;
      animation-iteration-count:1;animation-fill-mode:forwards;
    }
    @keyframes fly {
      0%{
        color: red;
        top: 5px;
        right: 50px;
        opacity: 100;
      }
      20%{
        color: red;
        top:-100px;
        right:25px;
        opacity: 100;
      }
      40%{
        color: red;
        top:-150px;
        right:-25px;
        opacity: 100;
      }
      60%{
        color: red;
        top:-200px;
        right:-50px;
        opacity: 100;
      }
      80%{
        color: red;
        top:-200px;
        right:-100px;
      }
      100%{
        color: red;
        top:0px;
        right:-120px;
        opacity: 0;
      }
    }
  }
  .to{
    transition: .3s;
    i{
      position: absolute;
      top: -20px;
      left: 10px;
      opacity: 0;
      transition: .3s;
    }
    &.move{
      text-indent: 1em;
      i{
        top: 5px;
        left: 0;
        opacity: 100;
      }
    }
  }
}
</style>
