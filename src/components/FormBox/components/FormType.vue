<template>
  <div>
    <!-- 开关 -->
    <el-switch
      v-if="item.xtype === 'switch'"
      v-model="form[item.name]"
      active-color="#13ce66"
      inactive-color="#ededed"
      active-value="1"
      inactive-value="0"
    />
    <!-- 文本框 -->
    <el-input
      v-if="item.xtype === 'text'"
      v-model="form[item.name]"
      :placeholder="'请输入' + item.text"
      :size="size"
    />
    <!-- 密码 -->
    <template v-if="item.xtype === 'password'">
      <div class="password-box">
        <div class="password-icon" @click="changePasswordShow">
          <i
            :class="[
              'iconfont',
              passwordType === 'password'
                ? 'icon-yanjing-zhengyan'
                : 'icon-yanjing-biyan'
            ]"
          />
        </div>
        <el-input
          ref="password"
          v-model="form[item.name]"
          :type="passwordType"
          :placeholder="'请输入' + item.text"
          :size="size"
        />
      </div>
    </template>
    <!-- 多行文本框 -->
    <el-input
      v-if="item.xtype === 'textarea'"
      v-model="form[item.name]"
      type="textarea"
      :size="size"
    />
    <!-- 文本框+单位 -->
    <template v-if="item.xtype === 'unit'">
      <el-input
        v-model="form[item.name]"
        :placeholder="'请输入' + item.text"
        :style="{ width: item.inputWidth + 'px' }"
        :size="size"
      />
      <em>{{ item.unit }}</em>
    </template>
    <!-- 下拉框 -->
    <el-select
      v-if="item.xtype === 'select'"
      v-model="form[item.name]"
      :placeholder="'请选择' + item.text"
      @change="changeSelect($event, item)"
      :size="size"
    >
      <el-option
        v-for="option in item.selectList"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>
    <!-- 日期 -->
    <el-date-picker
      v-if="item.xtype === 'date'"
      v-model="form[item.name]"
      type="date"
      :placeholder="'请输入' + item.text"
      :size="size"
    />
    <!-- 时间 -->
    <el-time-picker
      v-if="item.xtype === 'time'"
      v-model="form[item.name]"
      :placeholder="'请输入' + item.text"
      :size="size"
    />
    <!-- 选框-单个 -->
    <el-checkbox v-if="item.xtype === 'checked'" v-model="form[item.name]">
      {{ item.checked }}
    </el-checkbox>
    <!-- 多选框-多个 -->
    <el-checkbox-group
      v-if="item.xtype === 'checkbox'"
      v-model="form[item.name]"
    >
      <el-checkbox
        v-for="(checkbox, checkboxIndex) in item.checkboxList"
        :key="checkboxIndex"
        :label="checkbox"
        :name="item.name"
      />
    </el-checkbox-group>
    <!-- 单选框 -->
    <el-radio-group v-if="item.xtype === 'radio'" v-model="form[item.name]">
      <el-radio
        v-for="(radio, radioIndex) in item.radioList"
        :key="radioIndex"
        :label="radio.value"
      >
        {{ radio.label }}
      </el-radio>
    </el-radio-group>
    <!-- 数字 -->
    <el-input-number
      v-if="item.xtype === 'number'"
      v-model="form[item.name]"
      :min="1"
      :max="10"
      :size="size"
    />
  </div>
</template>

<script>
export default {
  name: 'FormType',
  props: {
    size: {
      type: String,
      default: () => {
        return 'mini'
      }
    },
    typeForm: {
      type: Object,
      default: () => {
        return {}
      }
    },
    typeItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      form: {},
      item: {},
      passwordType: 'password'
    }
  },
  watch: {
    typeForm: {
      handler(val) {
        this.form = val
      },
      immediate: true
    },
    typeItem: {
      handler(val) {
        this.item = val
      },
      immediate: true
    }
  },
  methods: {
    // 密码显示/隐藏
    changePasswordShow() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 选择下拉框
    changeSelect(val, item) {
      this.$emit('changeSelect', val, item)
    }
  }
}
</script>
<style scoped lang="scss">
.password-box {
  position: relative;

  .password-icon {
    position: absolute;
    top: 0;
    right: 10px;
    z-index: 1;
  }
}

.el-form-item {
  .el-form-item__label {
    font-size: 12px;
    height: 30px;
    line-height: 30px;
  }
  .el-select {
    width: 100%;
  }
  .el-form-item__content {
    width: 300px;
    line-height: 30px;
    font-size: 12px;

    em {
      margin-left: 10px;
      font-style: normal;
    }
  }

  .el-input__prefix,
  .el-input__suffix {
    top: 1px;
  }

  .el-date-editor {
    .el-input__prefix,
    .el-input__suffix {
      top: -1px;
    }
  }

  .is-focus {
    .el-input__suffix {
      top: -1px;
    }
  }

  .el-checkbox-group,
  .el-radio-group {
    label {
      width: auto;
    }
    .el-checkbox,
    .el-radio {
      font-size: 12px;
      margin-right: 10px;
    }
    .el-radio__label,
    .el-checkbox__label {
      font-size: 12px;
    }
  }
  .el-input-number__decrease,
  .el-input-number__increase {
    height: 28px;
    line-height: 28px;
  }
}
</style>
<style>
.el-form-item {
  margin-bottom: 10px;
}
</style>
