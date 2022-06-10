<template>
  <div class="gantt-elastic-main">
    <gantt-elastic
      :options="options"
      :tasks="tasks"
      @tasks-changed="tasksUpdate"
      @options-changed="optionsUpdate"
      @dynamic-style-changed="styleUpdate"
      height="1000"
    >
      <gantt-header slot="header" :options="options"></gantt-header>
    </gantt-elastic>
    <div class="q-mt-md" />

    <el-button
      class="add-btn"
      @click="addTask"
      type="primary"
      round
      size="small"
      >添加新项目</el-button
    >
  </div>
</template>

<style></style>

<script>
import GanttElastic from 'gantt-elastic'
import GanttHeader from 'gantt-elastic-header'
export default {
  name: 'Gantt',
  components: {
    GanttElastic,
    GanttHeader
  },
  props: {
    propsTasks: {
      type: Array,
      default: () => {
        return []
      }
    },
    propsOptions: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      tasks: [],
      options: {},
      dynamicStyle: {}
    }
  },
  watch: {
    propsTasks: {
      immediate: true,
      handler(val) {
        this.tasks = val
      }
    },
    propsOptions: {
      immediate: true,
      handler(val) {
        this.options = val
      }
    }
  },
  mounted() {
    // that = this
  },
  methods: {
    addTask() {
      this.$emit('addTask')
    },
    // 甘特图数据发生改变时调用（从后端接口调用数据时会出现死循环，需要加上条件判断进行显示）
    tasksUpdate(tasks, num) {
      if (num === 2) {
        this.tasks = tasks
      } else {
        return
      }
    },
    // options配置改变时调用（从后端接口调用数据时会出现死循环，需要加上条件判断进行显示）
    optionsUpdate(options, num) {
      if (num === 2) {
        this.options = options
      } else {
        return
      }
    },
    // 样式改变时调用
    styleUpdate(style) {
      this.dynamicStyle = style
    }
  }
}
</script>
<style lang="scss" scoped>
.gantt-elastic-main {
  width: 100%;
  height: 100%;

  .add-btn {
    margin: 10px;
  }
}
</style>
<style lang="scss">
// .gantt-elastic {
//   height: calc(100% - 57px) !important;
// }
// .gantt-elastic__main-view {
//   height: calc(100% - 57px) !important;
// }
// .gantt-elastic__main-container-wrapper {
//   height: 100% !important;
// }
// .gantt-elastic__main-container {
//   height: 100% !important;
// }
// .gantt-elastic__task-list {
//   height: 100% !important;
// }
// .gantt-elastic__task-list-items {
//   height: calc(100% - 60px) !important;
// }
// .gantt-elastic__task-list-container {
//   height: 100% !important;
// }
// .gantt-elastic__header-label {
//   margin-right: 10px;
// }
// .gantt-elastic__header-slider-wrapper {
//   margin-left: 5px;
// }
// .gantt-elastic__chart {
//   height: 100%;
// }
// .gantt-elastic__chart-graph-container {
//   height: calc(100% - 60px) !important;
//   div {
//     height: 100% !important;
//   }
// }

.vue-switcher-theme--default.vue-switcher-color--default div {
  background-color: #13ce66 !important;
}
.vue-switcher-theme--default.vue-switcher-color--default div:after {
  background-color: #d1d1d1 !important;
}
.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked
  div {
  background-color: #aaa !important;
}
</style>
