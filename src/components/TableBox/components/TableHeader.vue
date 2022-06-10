<template>
  <div class="title">
    <h5>{{ title }}</h5>
    <div class="btn-box">
      <el-button
        v-for="(item, index) in btnList"
        :key="index"
        type="primary"
        round
        size="mini"
        @click="clickAddItem(item)"
      >
        {{ item.title }}
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TableHeader',
  props: {
    title: {
      type: String,
      default: () => {
        return ''
      }
    },
    btnList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    clickAddItem(item) {
      this.$emit('clickAddItem', item)
    }
  }
}
</script>
<style scoped lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  box-sizing: border-box;

  h5 {
    line-height: 25px;
  }

  .btn-box {
    button {
      color: #fff;

      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
}
</style>
