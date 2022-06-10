<template>
  <div class="progress-box">
    <div class="progress-list" v-for="(list,index) in progressList" :key="index">
      <div ref="progressItem" draggable="true" class="progress-item" v-for="(item,index) in list" :key="index">

        <div :class="['progress',item.class]">
          <div class="progress-main">
            <p>
              <i class="iconfont icon-qian"></i>
              <span>{{ item.name }}</span>
            </p>
            <p v-if="item.money">{{ item.money }}</p>
            <div @click="clickConnect(list,item,index)" :class="['ununited',{connect:item.isConnect}]">
              <i class="iconfont icon-lianjie"></i>
            </div>
          </div>
          <div class="progress-time">{{ item.time }}</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  data(){
    return{
      progressList: {
        a:[
          {name:'预付款1',money:'￥-15000.00',time:'2022.01.08 至 2022.01.15',class:'payment',isConnect:false},
          {name:'收货入库1',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
          {name:'预付款2',money:'￥-15000.00',time:'2022.01.08 至 2022.01.15',class:'payment',isConnect:false},
        ],
        b:[
          {name:'收货入库2',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
          {name:'收货入库3',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
          {name:'收货入库4',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
          {name:'预付款3',money:'￥-15000.00',time:'2022.01.08 至 2022.01.15',class:'payment',isConnect:false},
        ],
        c:[
          {name:'收货入库5',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
          {name:'收货入库6',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
          {name:'收货入库7',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
        ],
        d:[
          {name:'收货入库8',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
          {name:'收货入库9',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
          {name:'收货入库10',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
        ],
        e:[
          {name:'收货入库11',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
          {name:'收货入库12',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:false},
        ],
      }
    }
  },
  methods:{
    clickConnect(list,item,index){
      let progressItem = this.$refs.progressItem[index]
      console.log('progressItem',progressItem)
      console.log('list',list)
      console.log('progressItem.nextElementSibling',progressItem.nextElementSibling)
      console.log('item',item)
      console.log('item.nextElementSibling',item.nextElementSibling)
      progressItem.nextElementSibling
      item.isConnect = !item.isConnect
      if(item.isConnect){

      }
    }
  },
  mounted() {
    //获取bg类的div列表
    let box = document.querySelector('.progress-box').childNodes;
    let content = null; //当前box的内容记录变量
    for (let i = 0; i < box.length; i++) {
      //设置开始拖拽时的函数（记录当前box内容）
      box[i].ondragstart = function () {
        content = this;
      }
      //阻止默认的事件，event来源JS已定义的变量
      box[i].ondragover = function () {
        event.preventDefault();
      }
      //结束拖拽后的处理信息
      box[i].ondrop = function () {
        if (content != null && content != this) {
          let temp = document.createElement("div");
          document.querySelector(".progress-box").replaceChild(temp, this);
          document.querySelector(".progress-box").replaceChild(this, content);
          document.querySelector(".progress-box").replaceChild(content, temp);
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.progress-box{
  display: flex;
  justify-content: left;
  margin: 30px;
  width: calc(100% - 60px);
  overflow: auto;
  &::-webkit-scrollbar {
    opacity: 0;
    width: 6px;
    height: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    opacity: 0;
    border-radius: 6px;
    cursor: pointer;
    background-color: #efefef;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
  }
  .progress-list{
    display: flex;
    &:last-child{
      .progress-item{
        &:last-child{
          .ununited{
            display: none;
          }
        }
      }
    }
    .progress-item{
      margin-right: 15px;
    }
    .progress{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      line-height: 20px;
      cursor: move;
      .progress-main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px;
        border-radius: 5px;
        box-sizing: border-box;
        p{
          display: flex;
          justify-content: center;
          align-items: center;
          i{
            margin-right: 5px;
            font-weight: bold;
          }
        }
        .ununited{
          position: absolute;
          top: 10px;
          right: -18px;
          background: #5ecedd;
          height: 15px;
          line-height: 15px;
          padding: 0 5px;
          border-radius: 10px;
          z-index: 1;
          opacity: .5;
          cursor: pointer;
          i{
            font-size: 12px;
            font-weight: bold;
          }
          &.connect{
            opacity: 1;
          }
        }
      }
      &.payment{
        .progress-main{
          background: #ffce6f;
        }
      }
      &.storage{
        .progress-main{
          background: #cfdbf3;
        }
      }
      .progress-time{
        line-height: 30px;
        color: #cbcbcb;
        white-space: nowrap;
      }
    }
  }
}
</style>
