<template>
  <div class="contract-main-box" @click="clickContractMain" :class="{extend:isExtend}">
    <div class="main-box" :class="{active:isActive}">
      <h5>{{main.title}}</h5>
      <ul class="main-box-ul">
        <li v-for="item in main.value" :key="item">{{item}}</li>
      </ul>
      <div class="orientation-box">
        <h5>公司库<span>定位</span></h5>
        <ul class="orientation-box-ul" ref="orientationBoxUl">
          <li>
            决定的质量标准为<span>标准</span>
            <i class="iconfont icon-guanbi"></i>
          </li>
          <li>
            此次的质量标准为<span>标准</span>，如果违反
            <i class="iconfont icon-guanbi" @click.stop="" @click="delLi($event)"></i>
          </li>
        </ul>
        <div class="button-box">
          <b>框选文本中需定位的地方，点击增加定位</b>
          <button @click.stop="" @click="addOrientation">增加定位</button>
        </div>
        <i @click.stop="" @click="extend" class="iconfont icon-zhankaiquanpingkuozhan"></i>
        <div class="box-show1"></div>
        <div class="box-show"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContractMain",
  props:[
    'main'
  ],
  data(){
    return{
      isActive:false,
      isExtend:false
    }
  },
  methods:{
    clickContractMain(){
      this.isActive = !this.isActive
    },
    addOrientation(){
      let orientationBoxUl = this.$refs.orientationBoxUl
      let li = document.createElement("li")
      orientationBoxUl.appendChild(li)
      li.innerHTML = '此次的质量标准为<span>标准</span>\n' +
        '            <i class="iconfont icon-guanbi"></i>'
    },
    extend(){
      this.isExtend = !this.isExtend
    },
    delLi(e){
      // console.log(e.target.parentNode)
      // e.target.removeChild(e.target.parentNode)
    }
  }
}
</script>

<style scoped lang="scss">
.contract-main-box{
  cursor: pointer;
  padding: 20px;
  .main-box{
    padding: 15px;
    height: 100px;
    //overflow: hidden;
    transition: all .8s;
    h5{
      text-align: left;
      font-size: 0.32rem;
      color: #bcbcbc;
    }
    .main-box-ul{
      margin-top: 8px;
      border-bottom:2px solid #eee;
      padding: 3px 0;
      li{
        line-height: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
    .orientation-box{
      margin-top: 10px;
      display: none;
      h5{
        span{
          color: #2db2ff;
          margin-left: 15px;
        }
      }
      .button-box{
        padding: 10px 0;
        display: flex;
        align-items: center;
        b{
          color: #bcbcbc;
          font-weight: normal;
          transform: scale(.8);
        }
        button{
          font-size: 10px;
          transform: scale(.8);
          width: 150px;
          height: 25px;
          color: #fff;
          background: #42A7FF;
          border-radius: 10px;
        }
      }
    }
    &.active{
      height: auto;
      min-height: 200px;
      background: #FFFFFF;
      box-shadow: 0px 10px 20px rgba(91, 130, 166, 0.3);
      border-radius: 5px;
      .orientation-box{
        display: block;
      }
      .main-box-ul{
        border-bottom:2px solid #42A7FF;
      }
    }
  }
  .box-show1{
    display: none;
  }
  .box-show{
    width: 0px;
    transition: .3s;
  }
}
.extend{
  .orientation-box{
    position: relative;
    .box-show1{
      display: block;
      position: absolute;
      bottom: -15px;
      left: 155px;
      z-index: 3;
      width: 50px;
      height: 99px;
      background: #FFFFFF;
    }
    .box-show{
      position: absolute;
      bottom: -15px;
      left: 176px;
      z-index: 2;
      width: 400px;
      height: 100px;
      background: #FFFFFF;
      box-shadow: 0px 10px 20px rgba(91, 130, 166, 0.3);
      border-radius: 5px;
    }
  }
}
</style>
<style lang="scss">
.orientation-box-ul{
  padding: 10px 0;
  border-bottom:2px solid #eee;
  li{
    line-height: 20px;
    transform: scale(.9);
    span{
      color: #2db2ff;
      margin-left: 10px;
      border-bottom:1px solid #2db2ff;
    }
  }
}
</style>
