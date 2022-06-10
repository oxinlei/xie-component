<template>
  <div class="box">
    <div class="login" v-drag>
      <form action="#">
        <h2>可移动窗口</h2>
        <div class="item">
          <label for="username">获取焦点时文字上移</label>
          <input type="text" name="username" id="username" placeholder="" @focus="focusInput($event)" @blur="blurInput($event)">
        </div>
        <div class="item">
          <label for="password">获取焦点时文字上移</label>
          <input type="text" name="password" id="password" placeholder="" @focus="focusInput($event)" @blur="blurInput($event)">
        </div>
        <button class="login-btn">登录</button>
      </form>
    </div>
    <div>
      <button class="change-all-btn">
        <span>鼠标经过试试-背景色+边框+阴影+文字</span>
        <em></em>
      </button>
    </div>
    <div>
      <button class="bj-change-btn m20">背景色渐变按钮</button>
    </div>
    <div>
      <button class="filter-btn">鼠标经过试试-毛玻璃</button>
    </div>
    <div class="filter-img">
      <p>鼠标经过图片-毛玻璃</p>
      <img src="../assets/m.jpg">
    </div>
    <div>
      <button class="mouseover-bj-change-btn">鼠标经过-背景渐变</button>
    </div>
    <div class="blur-btn-box">
      <div class="blur-btn" @click="clickPopUpShow"><a href="#">点击出现弹窗</a></div>
      <div class="blur-btn" @click="clickPopUpShow"><a href="#">read More</a></div>
      <div class="blur-btn"><a href="#">read More</a></div>
    </div>
    <div class="big-btn" @mouseover="tipShow($event)" @mouseleave="tipHide($event)" v-drag>
      鼠标经过显示提示窗口
      <div class="tip-box" ref="tipBox"></div>
    </div>
    <PopUp title="弹窗" @closePop="closePop" ref="PopUp" />
  </div>
</template>

<script>
import PopUp from "../components/PopUp";
export default {
  name: 'Button',
  components:{
    PopUp
  },
  data () {
    return {
    }
  },
  methods:{
    clickPopUpShow(){
      let PopUp = this.$refs.PopUp.$el
      PopUp.style.display = 'flex'
      setTimeout(function (){
        PopUp.className = 'pop show'
      },500)
    },
    closePop(){
      let PopUp = this.$refs.PopUp.$el
      PopUp.className = 'pop hide'
      setTimeout(function (){
        PopUp.style.display = 'none'
      },800)
    },
    focusInput(e){
      e.currentTarget.previousElementSibling.className = 'move'
      e.target.style.borderBottom = '1px solid #42A7FF'
    },
    blurInput(e){
      console.log(e.target.value)
      e.currentTarget.previousElementSibling.className = ''
      e.target.style.borderBottom = ''
      if(e.target.value != ''){
        e.currentTarget.previousElementSibling.className = 'move'
      }
    },
    tipShow(e){
      let tipBox = this.$refs.tipBox; //提示窗口
      tipBox.className = 'tip-box show'
      let eTop = e.target.offsetTop; //元素距离浏览器窗口头部距离
      let eLeft = e.target.offsetLeft; //元素距离浏览器窗口左边距离
      let eWidth = e.target.clientWidth; //元素宽
      let eHeight = e.target.clientHeight; //元素高
      let tipBoxWidth = tipBox.clientWidth; //提示窗口宽
      let tipBoxHeight = tipBox.clientHeight; //提示窗口高
      let minLeft = (tipBoxWidth - eWidth) / 2
      let maxLeft = eLeft - tipBoxWidth
      let minTop = eHeight + 20

      if(eLeft > minLeft && eLeft > maxLeft){
        tipBox.style.left = - minLeft + 'px'
      }else if(eLeft < minLeft){
        tipBox.style.left = 0 + 'px'
      }else if(eLeft >= maxLeft){
        tipBox.style.left = -(tipBoxWidth - eWidth) + 'px'
      }

      if(eTop < tipBoxHeight){
        tipBox.style.top = eHeight + 20 + 'px'
        tipBox.style.bottom = ''
        tipBox.className = 'tip-box show show-bottom'
      }else if(eTop > tipBoxHeight){
        tipBox.style.top = ''
        tipBox.style.bottom = minTop + 'px'
        tipBox.className = 'tip-box show show-top'
      }
    },
    tipHide(){
      let tipBox = this.$refs.tipBox; //提示窗口
      tipBox.className = 'tip-box'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box{
  height: 100vh;
  background: #eee;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(350deg,#e989e0,#9db3e5);
  .filter-img{
    position: relative;
    width: 200px;
    height: 200px;
    margin: 20px auto;
    border-radius: 10px;
    p{
      position: absolute;
      top:0;
      left: 0;
      right:0;
      bottom:0;
      z-index: 1;
      color: #fff;
      text-align: center;
    }
    img{
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    &:hover{
      img{
        filter: blur(5px);
      }
    }
  }
}

.login {
  display: flex;
  flex-direction: column;
  position: relative;
  left:300px;
  top:400px;
  z-index: 1000;
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 10px 10px rgba(255, 255, 255, 0.3);
  input,.login-btn {
    width: 100%;
    height: 32px;
    margin: 30px 0;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 6px;
    border: none;
    display: block;
  }
  .item{
    position: relative;
    input{
      text-indent: 1em;
      transition: all .3s;
      &:focus{
        border: none;
      }
    }
    label{
      position: absolute;
      top: 0;
      left:0;
      padding:5px 10px;
      text-align: left;
      font-size: 14px;
      color: #adadad;
      transition: all .3s;
      cursor: text;
      &.move{
        top:-20px;
        left:-5px;
        padding:0 5px;
        font-size: 0.32rem;
        color: #343434;
        border-radius: 6px;
      }
    }
  }
  .login-btn{
    &:hover{
      box-shadow:  0 0 0 1px #42A7FF,0 0 0 3px #BDE7FF;
    }
  }
}
.big-btn{
  position: relative;
  left: 1000px;
  top:400px;
  .tip-box{
    position: absolute;
    display: none;
    &.show{
      display: block;
      width: 200px;
      height: 200px;
      padding: 20px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 10px 10px 10px rgba(255, 255, 255, 0.3);
      bottom: 60px;
      left:-20px;
    }
    &.show-top{
      &::after{
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translate(-50%, 10px);
        content: '';
        border: 10px solid;
        border-color: #fff transparent transparent transparent;
        opacity: .3;
      }
    }
    &.show-bottom{
      &::before{
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translate(-50%, 10px);
        content: '';
        border: 10px solid;
        border-color:transparent transparent #fff transparent;
        opacity: .3;
      }
    }
  }
}
</style>

