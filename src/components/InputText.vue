<template>
  <div>
    <div class="form-item-box">
      <label :for="form.title" ref="label">{{ form.title }}</label>
      <input :id="form.title" ref="input" type="text" name="firstname" v-model="form.value" :disabled="form.isUnlockInput" @focus="focusInput($event)" @blur="blurInput($event)" s/>
      <i class="iconfont icon-jiesuo" @click="lockInput()" v-show="form.isLockInput"></i>
      <i class="iconfont icon-suoding" @click="unlockInput()" v-show="!form.isLockInput"></i>
      <div class="time-cost" v-if="timeCost">
        {{timeCost}}
      </div>
      <div ref="alarm" class="alarm" v-show="form.alarm" @mouseover="showAlarmBox($event)" @mouseleave="hideAlarmBox($event)">
        <span>{{form.alarm}}</span>
        <b>{{form.alarmText}}</b>
        <div ref="alarmBox" class="alarm-box">
          <h5>财务类>违约金>违约比例</h5>
          <p>信用违约风险是指在商业交易中由于交易一方的违约，使交易另一方得到的预期现金流量现值减少而遭受的风险。</p>
          <strong>参考</strong>
          <ul>
            <li>
              <span><5%em</span>
              <em>正常</em>
            </li>
            <li>
              <span>5%~15%</span>
              <em>正常</em>
            </li>
            <li>
              <span>>15%</span>
              <em>正常</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputText",
  props:[
    'form',
    'timeCost'
  ],
  methods:{
    lockInput(){
      this.form.isLockInput = false
      this.form.isUnlockInput = true
      let input = this.$refs.input
      input.disabled = true
      input.style.borderBottom = '2px solid #EBEBEB'
    },
    unlockInput() {
      this.form.isLockInput = true
      this.form.isUnlockInput = false
      let input = this.$refs.input
      input.disabled = false
      if (input.value == '') {
        input.target.style.borderBottom = '2px solid #EBEBEB'
      }
    },
    focusInput(e){
      e.currentTarget.previousElementSibling.className = 'move'
      e.target.style.borderBottom = '1px solid #42A7FF'
    },
    blurInput(e){
      e.currentTarget.previousElementSibling.className = ''
      e.target.style.borderBottom = ''
      if(e.target.value != ''){
        e.currentTarget.previousElementSibling.className = 'move'
        e.target.style.borderBottom = '2px solid #F89E81'
      }else{
        e.target.style.borderBottom = '2px solid #EBEBEB'
      }
    },
    showAlarmBox(e){
      let alarm = this.$refs.alarm
      let alarmBox = this.$refs.alarmBox
      alarmBox.style.display = 'block'
      document.onmousemove = (e) => {
        alarmBox.style.left = (e.pageX - alarm.getBoundingClientRect().left) + 'px'
      }
    },
    hideAlarmBox(){
      let alarmBox = this.$refs.alarmBox
      alarmBox.style.display = 'none'
    }
  },
  mounted() {
    let input = this.$refs.input
    let label = this.$refs.label
    if(input.disabled == true){
      input.style.borderBottom = '2px solid #EBEBEB'
    }else{
      input.style.borderBottom = '2px solid #F89E81'
    }
    if(input.value != ''){
      label.className = 'move'
    }else{
      input.style.borderBottom = '2px solid #EBEBEB'
    }
  }
}
</script>

<style scoped lang="scss">
.form-item-box{
  position: relative;
  .time-cost{
    position: absolute;
    right:0;
    top: -20px;
    background: #E0E8F6;
    border-radius: 15px;
    padding: 1px 10px;
    color: #71747C;
  }
  label{
    position: absolute;
    top: 0;
    left:0;
    padding:5px 10px;
    text-align: left;
    font-size: 14px;
    color: #bcbcbc;
    transition: all .3s;
    cursor: text;
    &.move{
      top:-20px;
      left:-5px;
      padding:0 5px;
      font-size: 0.32rem;
      color: #bcbcbc;
      border-radius: 6px;
    }
  }
  input{
    width: 100%;
    line-height: 30px;
    font-size: 16px;
    border: none;
  }
  .orange-bot{
    border-bottom: 2px solid #F89E81;
  }
  i{
    position: absolute;
    top:10px;
    font-size: 12px;
    transition: .3s;
    cursor: pointer;
    &.icon-jiesuo{
      right:0px;
    }
    &.icon-suoding{
      color: #2db2ff;
      right:10px;
    }
  }
}
.alarm{
  display: flex;
  justify-content: space-between;
  border-top: 2px solid red;
  cursor: default;
  span{
    padding: 2px 5px;
    background: red;
    color: #fff;
  }
  b{
    padding-top: 2px;
    color: red;
  }
  &:hover{
    .alarm-box{
      display: block;
    }
  }
  .alarm-box{
    display: none;
    position: absolute;
    top: 56px;
    width: 100%;
    background: rgba(137, 163, 192, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    box-shadow: 0px 5px 10px rgba(12, 27, 55, 0.1);
    backdrop-filter: blur(5px);
    z-index: 10;
    color: #7A7B7D;
    h5{
      padding: 5px;
      background: linear-gradient(90deg, red, #ffa0a0);
      color: #fff;
    }
    p{
      margin: 10px 20px;
      text-indent: 2em;
      padding-bottom: 10px;
      border-bottom: 2px solid #eee;
    }
    strong{
      display: block;
      padding-left: 20px;
      box-sizing: border-box;
    }
    ul{
      padding-bottom: 10px;
      li{
        padding: 5px 20px;
        box-sizing: border-box;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        span{
          background: none;
          color: #7A7B7D;
        }
        em{
          font-style: normal;
        }
        &:first-child{
          margin-top:10px ;
        }
      }
    }
  }
}

</style>
