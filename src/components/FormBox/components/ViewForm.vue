<template>
  <div>
    <el-form
      ref="ruleForm"
      :model="form"
      class="form-type-box scroll-bar"
      :label-width="dataForm.labelWidth"
    >
      <!-- 预览表单 -->
      <el-form-item
        v-for="(item, index) in dataForm.label"
        v-show="form[item.name]"
        :key="index"
        class="form-item"
        :label="item.text"
        :prop="item.name"
      >
        <span class="view-form">
          <template
            v-if="form[item.name] === true || form[item.name] === false"
          >
            <el-switch
              v-model="form[item.name]"
              active-color="#13ce66"
              inactive-color="#ededed"
              disabled="disabled"
            />
          </template>
          <template v-else>
            {{ form[item.name] }}
          </template>
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ViewForm',
  props: {
    dataForm: {
      type: Object,
      default: () => {
        return {}
      }
    },
    listForm: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      form: {}
    }
  },
  watch: {
    listForm: {
      handler(val) {
        this.form = val
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
.form-item {
  span {
    width: 300px;
    margin-left: 10px;

    b {
      font-weight: normal;
      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }

  &::v-deep {
    .el-form-item__label {
      font-size: 12px;
      height: 30px;
      line-height: 30px;
    }

    .el-form-item__content {
      width: 300px;
      line-height: 30px;
      font-size: 12px;

      .el-input__inner {
        height: 30px;
        line-height: 30px;
      }
      em {
        margin-left: 10px;
        font-style: normal;
      }
    }
  }
}
</style>
