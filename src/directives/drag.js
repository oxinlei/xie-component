import Vue from "vue";
Vue.directive("drag", {
  // 指令的定义
  bind: function(el) {
    let oDiv = el; //获取当前元素
    oDiv.style.position = 'fixed';
    oDiv.style.zIndex = '1';
    oDiv.style.cursor = 'move';
    oDiv.onmousedown = (e) => {
      //算出鼠标相对元素的位置
      let disX = e.clientX - oDiv.offsetLeft;
      let disY = e.clientY - oDiv.offsetTop;
      document.onmousemove = (e) => {
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        let elW = el.offsetWidth; //获取当前元素宽
        let elH = el.clientHeight; //获取当前元素高
        let docW = document.body.clientWidth; //获取窗口宽
        let docH = document.body.clientHeight; //获取窗口高
        let maxW = docW - elW; //计算出最大的移动宽度
        let maxH = docH - elH; //计算出最大的移动高度

        //移动当前元素
        oDiv.style.left = left + "px";
        oDiv.style.top = top + "px";
        if(left < 0){
          oDiv.style.left = 0 + "px";
        }
        if(top < 0){
          oDiv.style.top = 0 + "px";
        }
        if(left > maxW){
          oDiv.style.left = maxW + "px";
        }
        if(top > maxH){
          oDiv.style.top = maxH + "px";
        }
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  },
});
