<template>
  <div>
    <div :class="['turn-box', { 'turn-after': isTurn }]">
      <div class="turn-front" @click="toBack">点击翻转到背面</div>
      <div class="turn-back" @click="toFront">点击翻转到正面</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Carousel',
  data() {
    return {
      isTurn: false
    }
  },
  methods: {
    toBack() {
      this.isTurn = true
    },
    toFront() {
      this.isTurn = false
    }
  }
}
</script>
<style scoped lang="scss">
.turn-box {
  width: 300px;
  height: 300px;
  display: inline-block;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);
  position: relative;
  text-align: center;
  color: #fff;
  .turn-front {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    transform: rotateY(0deg);
    transition: all 0.4s linear;
    background: rgb(107, 219, 210);
  }
  .turn-back {
    width: 100%;
    height: 100%;
    background: #e66e66;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: rotateY(180deg);
    transition: all 0.4s linear;
  }
}
.turn-after {
  .turn-front {
    z-index: 1;
    transform: rotateY(-180deg);
  }

  .turn-back {
    z-index: 2;
    transform: rotateY(0deg);
  }
}
</style>
