<template>
  <div class="container">
    <div class="box">
      <span></span>
      <div class="content">
        <h2>sf sajf a</h2>
        <p>sfh jshaljkhf jls jhfj hljhf jshjkfhajksfhjshfjshajfhal</p>
        <a href="#">fkdsjfkslj</a>
      </div>
    </div>
    <div class="box">
      <span></span>
      <div class="content">
        <h2>sf sajf a</h2>
        <p>sfh jshaljkhf jls jhfj hljhf jshjkfhajksfhjshfjshajfhal</p>
        <a href="#">fkdsjfkslj</a>
      </div>
    </div>
    <div class="box">
      <span></span>
      <div class="content">
        <h2>sf sajf a</h2>
        <p>sfh jshaljkhf jls jhfj hljhf jshjkfhajksfhjshfjshajfhal</p>
        <a href="#">fkdsjfkslj</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl"
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 200px);
  min-height: 100vh;
  flex-wrap: wrap;
  background: #350048;
}
.box{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  margin: 40px 30px;
  transition: .5s;
  &::before,&::after{
    content: '';
    position: absolute;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
  }
  &::after{
    filter: blur(30px);
  }
  &:hover::before,&:hover::after{
    transform: skewX(0deg);
    left: 20px;
    width: calc(100% - 90px);
  }
  &:nth-child(1)::before,&:nth-child(1)::after{
    background: linear-gradient(315deg, #ffbc00, #ff0058);
  }
  &:nth-child(2)::before,&:nth-child(2)::after{
    background: linear-gradient(315deg, #03a9f4, #ff0058);
  }
  &:nth-child(3)::before,&:nth-child(3)::after{
    background: linear-gradient(315deg, #4dff03, #00d0ff);
  }
  span{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    pointer-events: none;
    &::before,&::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: rgba(255,255,255,.1);
      backdrop-filter: (10px);
      opacity: 0;
      transition: .5s;
      animation: animate 2s ease-in-out infinite;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    &::before{
      top: 0;
      left: 0;
    }
    &::after{
      bottom: 0;
      right: 0;
      animation-delay: -1s;
    }
  }
  .content{
    position: relative;
    left: 0;
    z-index: 1;
    padding: 30px 40px;
    background: rgba(255,255,255,.05);
    box-shadow: 0 5px 15px rgba(0,0,0,.1);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    transition: .5s;
    color: #fff;
    h2{
      font-size: 2em;
      color: #fff;
      margin-bottom: 10px;
    }
    p{
      font-size: 1.1em;
      margin-bottom: 10px;
      line-height: 1.4em;
    }
    a{
      display: inline-block;
      font-size: 1.1em;
      color: #111;
      background: #fff;
      padding: 10px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 700;
      margin-top: 5px;
    }
  }
  &:hover{
    span{
      &::before{
        top: -50px;
        left: 50px;
        width: 80px;
        height: 80px;
        opacity: 1;
      }
      &::after{
        bottom: -50px;
        right: 50px;
        width: 80px;
        height: 80px;
        opacity: 1;
      }
    }
    .content{
      left: -25px;
      padding: 60px 40px;
    }
  }
  @keyframes animate {
    0%,100%{
      transform: translateY(10px);
    }
    50%{
      transform: translateY(-10px);
    }
  }
}
</style>
