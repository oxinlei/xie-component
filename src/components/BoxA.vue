<template>
  <div class="box-a">
    <header>
      <p v-if="list.minTitle">{{list.minTitle}}</p>
      <h2>{{list.title}}</h2>
      <i class="iconfont icon-gengduo-shuxiang" @click="clickMore()"></i>
      <div class="tips" v-show="list.isTipShow">
        <ul>
          <li v-for="item in list.tipList">{{item}}</li>
        </ul>
      </div>
    </header>
    <div class="box">
      <ul v-if="list.textList">
        <li v-for="item in list.textList" :key="item">{{item}}</li>
      </ul>
      <ol v-if="list.imgList">
        <li v-for="item in list.imgList" :key="item.id"><img :src="item.url"></li>
      </ol>
    </div>
    <div class="other" v-if="list.otherList">
      <b>{{list.otherList.title}}</b>
      <span>{{list.otherList.text}}</span>
      <em v-if="list.otherList.text"><i class="iconfont icon-guanbi"></i></em>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxA",
  props:[
    'list'
  ],
  data(){
    return{
    }
  },
  methods:{
    clickMore(){
      this.list.isTipShow = !this.list.isTipShow
    }
  },
}
</script>

<style scoped lang="scss">
.box-a{
  position: relative;
  width: 300px;
  height: 280px;
  padding: 30px 25px 25px 25px;
  background: #fff;
  text-align: left;
  box-shadow: 1px 1px 3px 2px #efefef;
  border-radius: 3px;
  header{
    position: relative;
    h2{
      width: 200px;
      font-size: 24px;
      color: #4C4D57;
      font-weight: 700;
      word-wrap:break-word
    }
    i{
      position: absolute;
      top:0;
      right:-15px;
      font-size: 30px;
      color: #CECECE;
      cursor: pointer;
    }
    .tips{
      position: absolute;
      right:-50px;
      bottom: 0;
      min-width: 120px;
      padding: 15px 20px;
      background: rgba(73, 80, 142, 0.2);
      backdrop-filter: blur(10px);
      box-shadow: -5px 10px 15px 5px rgba(73, 80, 142, 0.1);
      ul{
        li{
          line-height: 25px;
        }
      }
    }
  }
  .box{
    position: absolute;
    bottom: 25px;
    left: 25px;
    right: 25px;
    ul{
      margin-top: 30px;
      width: 100%;
      li{
        color: #898989;
        margin-left: 15px;
        padding: 5px 0;
        position: relative;
        &:before{
          content: "\2022";
          color: #148AE0;
          font-size: 20px;
          position: absolute;
          top:0px;
          left:-15px;
        }
      }
    }
    ol{
      display: flex;
      justify-content: right;
      margin-right: 5px;
      margin-top: 20px;
      width: 100%;
      li{
        margin-right: -5px;
        img{
          width: 30px;
          height: 30px;
          border-radius: 4px 4px 4px 10px;
          border: 2px solid #fff;
        }
      }
    }
  }
}

.blue{
  background: #465EEE;
  header{
    p{
      color: #70BCEC;
      margin-bottom: 5px;
    }
    h2{
      color: #fff;
    }
    i{
      color: #7E9EFF;
    }
    .tips{
      bottom: 20px;
      background: rgba(255, 255, 255, 0.5);
    }
  }
  .box{
    ol{
      li{
        img{
          border: 2px solid #465EEE;
        }
      }
    }
  }
  .other{
    position: absolute;
    left: 0;
    bottom: 100px;
    width: 100%;
    color: #fff;
    //overflow:hidden;
    b{
      position: absolute;
      top: 0;
      left:20px;
      z-index: 1;
    }
    span{
      position: absolute;
      top: 0;
      left:60px;
      color: #7E9EFF;
      z-index: 1;
    }
    em{
      position: absolute;
      top: 0;
      right:20px;
      background: #3C54DB;
      border-radius: 50%;
      padding: 2px;
      text-align: center;
      i{
        font-size: 10px;
        color:#7E9EFF;
        cursor: pointer;
      }
    }
    .circle{
      position: absolute;
      top: -35px;
      left: 0;
      width: 60px;
      height: 80px;
      overflow: hidden;
      z-index: 0;
      &::before{
        position: absolute;
        right: 0;
        content: '';
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: #3C54DB;
      }
    }
  }
}
</style>
