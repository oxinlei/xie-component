<template>
  <div class="progress-box">

    <!--使用draggable组件-->
    <draggable class="progress-list" v-model="progressList"  chosenClass="chosen" forceFallback="true" group="people" animation="1000" @start="onStart()" @end="onEnd()">
      <transition-group>
        <div class="progress-item-box" v-for="(list,key) in progressList" :key="list.id">
          <div ref="progressItem" draggable="true" class="progress-item" v-for="(item,index) in list.value" :key="index">

            <div :class="['progress',item.class]">
              <div class="progress-main">
                <p>
                  <i class="iconfont icon-qian"></i>
                  <span>{{ item.name }}</span>
                </p>
                <p v-if="item.money">{{ item.money }}</p>
                <div @click="clickConnect(list,item,index,key)" :class="['notConnected',{connect:item.isConnect}]">
                  <i class="iconfont icon-lianjie"></i>
                </div>
              </div>
              <div class="progress-time">{{ item.time }}</div>
            </div>

          </div>

        </div>
      </transition-group>
    </draggable>

  </div>
</template>

<script>
//导入draggable组件
import draggable from 'vuedraggable'
import {nanoid} from 'nanoid'
export default {
  name: "Progress",
  //注册draggable组件
  components: {
    draggable,
  },
  data(){
    return{
      drag:false,
      progressList: [
        {
          id:1,
          value:[
            {name:'aaa预付款1',money:'￥-15000.00',time:'2022.01.08 至 2022.01.15',class:'payment',isConnect:true},
            {name:'aaa收货入库1',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:true},
            {name:'aaa预付款2',money:'￥-15000.00',time:'2022.01.08 至 2022.01.15',class:'payment',isConnect:true},
          ],
        },
        {
          id:2,
          value:[
            {name:'bbb收货入库2',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:true},
          ],
        },
        {
          id:3,
          value:[
            {name:'ccc收货入库5',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:true},
            {name:'ccc收货入库6',money:'',time:'2022.01.08 至 2022.01.15',class:'storage',isConnect:true},
          ],
        },
      ]
    }
  },
  methods:{
    isConnectFalse(){
      for(let i = 0;i < this.progressList.length;i++){
        for(let j = 0; j < this.progressList[i].value.length;j++){
          this.progressList[i].value[this.progressList[i].value.length - 1].isConnect = false
        }
      }
    },
    //开始拖拽事件
    onStart(){
      this.drag=true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag=false;
      this.isConnectFalse();
    },
    clickConnect(list,item,index,key){
      item.isConnect = !item.isConnect
      if(item.isConnect){
        let oldList = list.value //原数组
        let newList = this.progressList[key + 1].value //要添加的数组
        // oldList = oldList.concat(newList)
        oldList.push.apply(oldList,newList)
        // newList.splice(0,newList.length)
        this.progressList.splice(key + 1,1)
      }else{
        let selfList = this.progressList[key].value
        let changeList = selfList.splice(index + 1,selfList.length - (index + 1))
        let addItem = {id:nanoid(),value:[]}
        addItem.value.push(...changeList)
        this.progressList.splice(key + 1,0,addItem)
      }
    }
  },
  mounted() {
    this.isConnectFalse();
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
    span{
      display: flex;
      .progress-item-box{
        display: flex;
        &:last-child{
          .progress-item{
            &:last-child{
              .notConnected{
                display: none;
              }
            }
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
      height: 100%;
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
        .notConnected{
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
