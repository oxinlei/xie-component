import Vue from 'vue'
Vue.directive('drag-icon', {
  // 指令的定义
  inserted: function(el) {
    const oIcon = el // 获取可拖拽按钮
    oIcon.style.cursor = 'move'
    const oDiv = oIcon.parentNode // 获取需要拖拽的div
    oDiv.style.position = 'fixed'
    oDiv.style.zIndex = '1'
    oIcon.onmousedown = (e) => {
      // 算出鼠标相对元素的位置
      const disX = e.clientX - oDiv.offsetLeft
      const disY = e.clientY - oDiv.offsetTop
      document.onmousemove = (e) => {
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        const left = e.clientX - disX
        const top = e.clientY - disY

        const oDivW = oDiv.offsetWidth // 获取需要拖拽的div宽
        const oDivH = oDiv.clientHeight // 获取需要拖拽的div高
        const docW = document.body.clientWidth // 获取窗口宽
        const docH = document.body.clientHeight // 获取窗口高
        const maxW = docW - oDivW // 计算出最大的移动宽度
        const maxH = docH - oDivH // 计算出最大的移动高度

        // 移动当前元素
        oDiv.style.left = left + 'px'
        oDiv.style.top = top + 'px'
        if (left < 0) {
          oDiv.style.left = 0 + 'px'
        }
        if (top < 0) {
          oDiv.style.top = 0 + 'px'
        }
        if (left > maxW) {
          oDiv.style.left = maxW + 'px'
        }
        if (top > maxH) {
          oDiv.style.top = maxH + 'px'
        }
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
})
