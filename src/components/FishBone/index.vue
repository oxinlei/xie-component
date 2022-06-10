<template>
  <div>
    <div class="fish-bone-btn">
      <el-button
        size="mini"
        :class="{ atcive: isAtcive === 0 }"
        @click="layoutFishbone"
      >
        layoutFishbone/鱼骨图
      </el-button>
      <el-button
        size="mini"
        :class="{ atcive: isAtcive === 1 }"
        @click="layoutBranching"
      >
        layoutBranching/分支图
      </el-button>
      <el-button
        size="mini"
        :class="{ atcive: isAtcive === 2 }"
        @click="layoutNormal"
      >
        layoutNormal/正常图
      </el-button>
      <el-button size="mini" type="success" @click="savePng">
        保存为png图片
      </el-button>
    </div>
    <div class="fish-bone-main">
      <div
        id="gos"
        :style="{ width: width + 'px', height: height + 'px' }"
      ></div>
    </div>
  </div>
</template>
<script>
import go from 'gojs'
import { FishboneLayout, FishboneLink } from './FishboneLayout.js'
export default {
  name: 'FishBone',
  props: {
    json: {
      type: Object,
      default: () => {
        return {}
      }
    },
    width: {
      type: Number,
      default: () => {
        return 1000
      }
    },
    height: {
      type: Number,
      default: () => {
        return 500
      }
    }
  },
  data() {
    return {
      diagram: '',
      isAtcive: 0
    }
  },
  mounted() {
    // 创建图表实例
    const $ = go.GraphObject.make
    let _this = this
    this.diagram = $(go.Diagram, 'gos', { isReadOnly: false })
    // 节点模板描述了如何构造每个节点
    this.diagram.nodeTemplate = $(
      go.Node,
      $(
        go.TextBlock,
        new go.Binding('text', 'title'), // 修改文本调用的参数
        new go.Binding('font', '', _this.convertFont)
      )
    )

    this.diagram.linkTemplateMap.add(
      'normal',
      $(go.Link, { routing: go.Link.Orthogonal, corner: 4 }, $(go.Shape))
    )

    this.diagram.linkTemplateMap.add(
      'fishbone',
      $(
        FishboneLink, // defined above
        $(go.Shape)
      )
    )

    const nodeDataArray = []
    _this.walkJson(_this.json, nodeDataArray)

    this.diagram.model = new go.TreeModel(nodeDataArray)
    console.log(this.diagram.model)
    this.layoutFishbone()
  },
  methods: {
    convertFont(data) {
      let size = data.size
      if (size === undefined) size = 13
      let weight = data.weight
      if (weight === undefined) weight = ''
      return weight + ' ' + size + 'px sans-serif'
    },
    walkJson(obj, arr) {
      const key = arr.length
      obj.key = key
      arr.push(obj)
      const children = obj.causes || obj.children // 修改文本子节点调用的参数
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const o = children[i]
          o.parent = key
          this.walkJson(o, arr)
        }
      }
    },
    // 切换layoutFishbone/鱼骨图
    layoutFishbone() {
      this.isAtcive = 0
      this.diagram.startTransaction('fishbone layout')
      this.diagram.linkTemplate = this.diagram.linkTemplateMap.getValue(
        'fishbone'
      )
      this.diagram.layout = go.GraphObject.make(FishboneLayout, {
        angle: 180,
        layerSpacing: 10,
        nodeSpacing: 20,
        rowSpacing: 10
      })
      this.diagram.commitTransaction('fishbone layout')
    },
    // 切换layoutBranching/分支图
    layoutBranching() {
      this.isAtcive = 1
      this.diagram.startTransaction('branching layout')
      this.diagram.linkTemplate = this.diagram.linkTemplateMap.getValue(
        'normal'
      )
      this.diagram.layout = go.GraphObject.make(go.TreeLayout, {
        angle: 180,
        layerSpacing: 20,
        alignment: go.TreeLayout.AlignmentBusBranching
      })
      this.diagram.commitTransaction('branching layout')
    },
    // 切换layoutNormal/正常图
    layoutNormal() {
      this.isAtcive = 2
      this.diagram.startTransaction('normal layout')
      this.diagram.linkTemplate = this.diagram.linkTemplateMap.getValue(
        'normal'
      )
      this.diagram.layout = go.GraphObject.make(go.TreeLayout, {
        angle: 180,
        breadthLimit: 1000,
        alignment: go.TreeLayout.AlignmentStart
      })
      this.diagram.commitTransaction('normal layout')
    },
    // 保存为png图片
    savePng() {
      const canvas = document.querySelector('#gos').children[0] //获取canvas DOM对象
      const imageData = canvas.toDataURL('image/png') //返回base64的URL
      const elink = document.createElement('a')
      elink.download = '图片'
      elink.style.display = 'none'
      elink.href = imageData
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href) //释放URL对象
      document.body.removeChild(elink)
    }
  }
}
</script>

<style scoped lang="scss">
.fish-bone-btn {
  margin: 5px;
  .atcive {
    background: #dde7ff;
  }
}
.fish-bone-main {
  padding: 10px;
}
</style>
