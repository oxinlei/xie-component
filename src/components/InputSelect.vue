<template>
  <div class="dropdown-box">
    <div class="dropdown" :class="{arrows:isActive,active:isInputActive}">
      <label :for="form.title" ref="label">{{ form.title }}</label>
      <p>
        fsjfljaflj;fjsa;l
        fsjfljaflj;fjsa;l
      </p>
      <input @click="dropDown()" :id="form.title" ref="input" type="text" class="textBox" :placeholder="form.title" readonly>
      <div class="option">
        <div @click="showDropDown(item)" v-for="(item,index) in form.value" :key="index">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputSelect",
  props:[
    'form'
  ],
  data(){
    return{
      isActive:false,
      isInputActive: false
    }
  },
  methods:{
    dropDown(){
      console.log('dropDown')
      this.isInputActive = false
      this.isActive =! this.isActive
      let input = this.$refs.input
      console.log('dropDown',input.placeholder,input.value)
      // if(input.value != this.form.title){
      //   this.isActive = true
      // }
    },
    showDropDown(item){
      console.log('showDropDown')
      let input = this.$refs.input
      let dropdown = document.querySelector('.dropdown')
      if(input.value != this.form.title){
        let label = this.$refs.label
        label.className = 'move'
      }
      if(input.placeholder == this.form.title){
        input.value = item
        dropdown.className = 'dropdown'
      }
      this.isInputActive = true
      this.isActive = false
    },
  },
}
</script>

<style scoped lang="scss">
.dropdown-box{
  padding-right: 100px;
  box-sizing: border-box;
}
.dropdown{
  position: relative;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  background: #e8e8e8;
  transition: .3s;
  p{
    position: absolute;
    top: 50px;
    left:0;
  }
  label{
    position: absolute;
    top: 0;
    left:0;
    line-height: 35px;
    padding: 0 20px;
    text-align: left;
    font-size: 14px;
    transition: all .3s;
    cursor: text;
    opacity: 0;
    &.move{
      top: -25px;
      left: 0;
      padding: 0;
      opacity: 100;
    }
  }
  &::before{
    content: '';
    position: absolute;
    right: 20px;
    top: 10px;
    z-index: 1;
    width: 8px;
    height: 8px;
    border: 1px solid #333;
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    transform: rotate(-45deg);
    transition: .3s;
    pointer-events: none;
  }
  input{
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    margin: 0 10%;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    background: #e8e8e8;
    transition: .3s;
  }
  .option{
    position: absolute;
    top: 37px;
    width: 80%;
    height: 0px;
    margin: 0 10%;
    font-size: 12px;
    overflow: hidden;
    border : 1px solid #FFF;
    transition: .8s;
    div{
      padding: 5px 10px;
      cursor: pointer;
      transition: .3s;
      margin: 5px 0;
      &:hover{
        padding-left: 15px;
        color:#42A7FF;
        background: #fff;
        border-radius: 2px;
      }
    }
  }
  &.arrows{
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(91, 130, 166, 0.3);
    &::before{
      top: 15px;
      transform: rotate(-225deg);
    }
    .option{
      height: auto;
      padding: 10px;
      background: rgba(137, 163, 192, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.9);
      box-shadow: 0px 5px 10px rgba(12, 27, 55, 0.1);
      backdrop-filter: blur(10px);
    }
    input{
      background: #fff;
      border-radius: 0;
      box-shadow : 0 2px #42A7FF;
    }
  }
  &.active{
    height: 35px;
    border-radius: 0;
    background: #FFFFFF;
    border-bottom : 2px solid #42A7FF;
    &::before{
      right: 5px;
    }
    input{
      margin: 0;
      padding: 0;
      background: #FFFFFF;
      border-bottom : 2px solid #42A7FF;
    }
  }
}
</style>
