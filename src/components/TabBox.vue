<template>
  <div>
    <div class="tab-box">
      <div ref="tabBoxUl" class="tab-box-ul">

        <div ref="tabBoxLi" class="tab-box-li" v-show="item.show" v-for="(item,index) in tabs" :key="index" :class="{active:index == isActive}" @click="clickTab(index,$event)">
          {{ item.name }}
        </div>
        <div class="line-bottom"></div>
      </div>
      <i class="iconfont icon-gengduo-shuxiang" @click="isTabMoreShow = !isTabMoreShow"></i>
      <div class="tab-more-show" v-show="isTabMoreShow">
        <ul>
          <li v-for="(item,key) in tabs" :key="key" :class="{active:item.show}" @click="clickTabMore(item)">
            <i class="iconfont icon-duihao_o"></i>
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-content">
      <div
        v-for='(item,index) in tabs'
        v-show="index == isActive">
        <template :slot='item.name'>
          <div>
            {{ item }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBox",
  props:[
    'tabs',
  ],
  data(){
    return{
      isTabMoreShow:false,
      tabsShow:[],
      isActive:0,
    }
  },
  components:{
    lineBottom(){
      return
    }
  },
  methods:{
    clickTabMore(item){
      item.show = !item.show
      let tabBoxLi = this.$refs.tabBoxLi.length
      // if(){
      //
      // }
    },
    clickTab(index,e){
      this.isActive = index
      let tabBoxLiWidth = e.target.clientWidth
      let tabBoxLiLeft = e.target.offsetLeft
      let lineBottom = this.$el.querySelector('.line-bottom')
      lineBottom.style.width = tabBoxLiWidth + 'px'
      lineBottom.style.transform = 'translateX(' + tabBoxLiLeft + 'px)';
    }
  },
  mounted() {
    let tabBoxLiWidth = this.$refs.tabBoxUl.children[0].clientWidth
    let lineBottom =  this.$el.querySelector('.line-bottom')
    lineBottom.style.width = tabBoxLiWidth + 'px'
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";
.tab-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0,0,0,.05);
  border-bottom: 1px solid rgba(0,0,0,.1);
  position: relative;
  .tab-box-ul{
    display: flex;
    width: calc(100% - 40px);
    position: relative;
    overflow: auto;
    @include scrollbar(rgba(0,0,0,.05));
    .tab-box-li{
      padding: 8px 18px;
      white-space:nowrap;
      font-size: 14px;
      position: relative;
      cursor: move;
      text-align: center;
      &.active{
        font-weight: bold;
      }
    }
  }
  .line-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #409eff;
    z-index: 0;
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
  }
  .icon-gengduo-shuxiang{
    margin-right: 10px;
    background: rgba(0,0,0,.08);
    border-radius: 3px;
  }
}
.tab-more-show{
  position: absolute;
  top: 35px;
  right: 0;
  width: 120px;
  height: auto;
  background: #fff;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0 0 5px 5px rgba(0,0,0,.05);
  font-size: 14px;
  ul{
    li{
      padding: 10px 20px;
      position: relative;
      text-indent: 1em;
      i{
        display: none;
      }
      &:hover{
        background: rgba(0,0,0,.05);
      }
      &.active{
        i{
          display: block;
          position: absolute;
          left: -5px;
          top: 12px;
        }
      }
    }
  }
}
</style>
