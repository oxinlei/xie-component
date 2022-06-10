<template>
  <div id="app">
    <nav>
      <div class="sidebar-icon" @click="toggle">
        <i class="iconfont icon-shousuo"></i>
      </div>
      <div class="nav-router">
        <router-link
          class="nav-item"
          active-class="active"
          tag="span"
          :to="{ path: menu.name }"
          v-for="(menu, index) in menus"
          :key="index"
        >
          <a>
            <i :class="['iconfont', menu.icon]"></i>
            <b>
              {{ menu.name }}
            </b>
          </a>
        </router-link>
        <!--<div class="active-box"></div>-->
      </div>
    </nav>
    <div ref="view" class="view">
      <div class="view-width">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import PopUp from './components/PopUp'
export default {
  name: 'App',
  components: {
    PopUp
  },
  data() {
    return {
      menus: [
        { id: '001', name: 'button', icon: 'icon-anniu' },
        { id: '002', name: 'box', icon: 'icon-checkbox-weixuan' },
        { id: '003', name: 'AnimateText', icon: 'icon-16gl-S' },
        { id: '004', name: 'TabControl', icon: 'icon-doufukuai' },
        { id: '005', name: 'ColorText', icon: 'icon-wenzi' },
        {
          id: '006',
          name: 'EditorForm',
          icon: 'icon-biaodanzujian-xialakuang'
        },
        { id: '006', name: 'EditText', icon: 'icon-biaodanzujian-xialakuang' },
        { id: '007', name: 'Test', icon: 'icon-ceshi' },
        { id: '008', name: 'UploadFiles', icon: 'icon-yunshangchuan_o' },
        {
          id: '009',
          name: 'IllustrationAnimation',
          icon: 'icon-yunshangchuan_o'
        },
        {
          id: '010',
          name: 'IllustrationAnimation1',
          icon: 'icon-yunshangchuan_o'
        },
        { id: '011', name: 'Progress', icon: 'icon-yunshangchuan_o' },
        { id: '012', name: 'TestTwo', icon: 'icon-yunshangchuan_o' },
        { id: '013', name: 'Store', icon: 'icon-yunshangchuan_o' },
        { id: '014', name: 'FishBoneBox', icon: 'icon-yunshangchuan_o' },
        { id: '015', name: 'Carousel', icon: 'icon-yunshangchuan_o' },
        { id: '016', name: 'Gantt', icon: 'icon-yunshangchuan_o' },
        { id: '017', name: 'Form', icon: 'icon-yunshangchuan_o' },
        { id: '018', name: 'Table', icon: 'icon-yunshangchuan_o' },
        { id: '019', name: 'JsonViewBox', icon: 'icon-yunshangchuan_o' }
      ],
      isHide: false
    }
  },
  methods: {
    toggle() {
      this.isHide = !this.isHide
      let nav = document.querySelector('nav')
      let view = document.querySelector('.view')
      if (this.isHide) {
        nav.className = 'hide'
        view.className = 'view viewmini'
      } else {
        nav.className = ''
        view.className = 'view'
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  background: #f3f5f9;
  position: relative;
}
nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 230px;
  height: 100vh;
  padding-top: 50px;
  box-sizing: border-box;
  color: #78777e;
  background: #fff;
  box-shadow: 0 0 5px #efefef;
  transition: all 0.3s;
  &.hide {
    width: 50px;
    .sidebar-icon {
      transform: rotate(180deg);
      transform-origin: center;
    }
    .nav-item {
      overflow: hidden;
      height: 50px;
      a {
        padding-left: 20px;
        i {
          left: 18px;
        }
        b {
          opacity: 0;
        }
      }
    }
  }
  .sidebar-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    line-height: 50px;
    transition: all 0.3s;
    cursor: pointer;
  }
  .nav-router {
    height: calc(100vh - 50px);
    overflow: auto;
    padding-bottom: 50px;
    box-sizing: border-box;
  }
  .nav-item {
    display: flex;
    position: relative;
    line-height: 50px;
    transition: all 0.3s;
    a {
      position: relative;
      width: 100%;
      padding-left: 80px;
      text-align: left;
      transition: all 0.3s;
      i {
        position: absolute;
        top: 0;
        left: 50px;
        transition: all 0.3s;
      }
      b {
        transition: all 0.3s;
        opacity: 1;
      }
    }
    &:hover {
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -5px;
        bottom: 0;
        width: 10px;
        height: 50px;
        background: #23a6d5;
        border-radius: 10px;
      }
    }
    &.active {
      background: linear-gradient(90deg, #c4ecff, #c4ffdc, #c4ecff);
      animation: gradient 5s linear infinite;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -5px;
        bottom: 0;
        width: 10px;
        height: 50px;
        background: #23a6d5;
        border-radius: 10px;
      }
      @keyframes gradient {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 1000px 0;
        }
      }
    }
    a {
      display: block;
    }
  }
}
.view {
  margin-left: 230px;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;
  transition: all 0.3s;
  animation: rightIn 0.5s linear infinite;
  animation-iteration-count: 1;
  @keyframes rightIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  &.viewmini {
    margin-left: 50px;
  }
  .view-width {
    min-width: 1200px;
    height: 100%;
    overflow: auto;
  }
}
//.active-box{
//  height: 50px;
//  background: linear-gradient(90deg, #c4ecff, #c4ffdc, #c4ecff);
//  animation: gradient 5s linear infinite;
//  position: absolute;
//  top: 100px;
//  &:before{
//    position: absolute;
//    top: 0;
//    left: -5px;
//    bottom:0;
//    content: "";
//    width: 10px;
//    height: 50px;
//    background: #23A6D5;
//    border-radius: 10px;
//  }
//  @keyframes gradient {
//    from {
//      background-position: 0 0;
//    }
//    to {
//      background-position: 1000px 0;
//    }
//  }
//}
</style>
