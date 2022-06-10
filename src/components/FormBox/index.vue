<template>
  <div>
    <el-form
      v-if="dataForm.label"
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :class="['form-type-box scroll-bar', { showMore: isShowMore }]"
      :label-width="dataForm.labelWidth ? dataForm.labelWidth : ''"
    >
      <el-form-item
        v-for="(item, index) in dataForm.label.slice(
          0,
          sliceNum ? sliceNum : dataForm.label.length
        )"
        :key="index"
        class="form-item"
        :label="item.text"
        :prop="item.name"
      >
        <template v-if="item.xtype === 'table'">
          <!-- 表格 -->
          <FormTable
            v-if="item.xtype === 'table'"
            ref="tableText"
            :size="size"
            :data="item.table"
            @editRow="(tableItem) => editRow(tableItem, item)"
          />
        </template>
        <template v-else>
          <FormType
            ref="formType"
            :size="size"
            :type-form="form"
            :type-item="item"
            @changeSelect="changeSelect"
          />
        </template>
      </el-form-item>

      <!-- 判断条件显示 -->
      <template v-if="isAffirm">
        <el-form-item
          v-for="item in dataAffirmForm.label"
          :key="item.name"
          class="form-item"
          :label="item.text"
          :prop="item.name"
        >
          <FormType
            ref="formType"
            :size="size"
            :type-form="form"
            :type-item="item"
          />
        </el-form-item>
      </template>

      <!-- 更多 -->
      <template v-if="sliceNum">
        <div class="more" @click="clickMoreDataForm">
          <span>更多</span>
          <i class="iconfont icon-jiantou_yemian_xiangxia" />
        </div>
      </template>
    </el-form>
    <div class="form-btn">
      <el-button :size="size" @click="resetForm('ruleForm')"> 重置 </el-button>
      <el-button
        v-if="dataForm.isTestShow"
        type="success"
        :size="size"
        @click="testForm('ruleForm')"
      >
        测试连接
      </el-button>
      <el-button
        v-if="dataForm.status === 'createForm'"
        type="primary"
        :size="size"
        @click="createData('ruleForm')"
      >
        立即创建
      </el-button>
      <el-button
        v-if="dataForm.status === 'updateForm'"
        type="primary"
        :size="size"
        @click="updateData('ruleForm')"
      >
        立即更新
      </el-button>
      <el-button
        v-if="dataForm.status === 'searchForm'"
        type="primary"
        :size="size"
        @click="searchData('ruleForm')"
      >
        搜索
      </el-button>
    </div>
  </div>
</template>

<script>
import FormType from './components/FormType'
import FormTable from './components/FormTable'
export default {
  name: 'FormBox',
  components: {
    FormType,
    FormTable
  },
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
    },
    rules: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isAffirm: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    dataAffirmForm: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      form: {},
      sliceNum: 0,
      isShowMore: false,
      size: 'mini'
    }
  },
  watch: {
    dataForm: {
      handler(val) {
        this.size = val.size
        if (val.sliceNum) {
          this.sliceNum = val.sliceNum
        }
      },
      immediate: true
    },
    listForm: {
      handler(val) {
        this.form = val
      },
      immediate: true
    }
  },
  methods: {
    // 显示更多
    clickMoreDataForm() {
      this.isShowMore = !this.isShowMore
      if (this.isShowMore) {
        this.sliceNum = this.dataForm.label.length
      } else {
        this.sliceNum = this.dataForm.sliceNum
      }
    },
    // 测试
    testForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '恭喜你，测试通过，请点击创建',
            type: 'success'
          })
        } else {
          this.$message.error('测试不通过，请正确填写表单')
          return false
        }
      })
    },
    // 验证表单内的表格是否填写完整
    tableValidate() {
      this.dataForm.label.forEach((labelItem) => {
        console.log('验证表单内的表格是否填写完整')
        if (labelItem.xtype === 'table') {
          if (labelItem.table.tr.length > 0) {
            this.$refs.formType.forEach((item) => {
              item.validatingData()
              console.log('验证表单内的表格是否填写完整', item.validatingData())
            })
          }
        }
      })
    },
    // 创建数据
    createData(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) return
        this.addFormData(this.form, formName) // 提交服务端
      })
    },
    addFormData(data, formName) {
      this.$emit('addFormData', data, formName)
      this.resetForm(formName)
    },
    // 更新数据
    updateData(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) return
        let flag = true
        if (this.$refs.tableText.length > 0) {
          console.log(flag)
          flag = this.$refs.tableText.every((item) => {
            console.log(item.validateField())
            item.validateField()
            if (item.validateField()) {
              return true
            } else {
              return false
            }
          })
          console.log(flag)
        }
        if (flag) {
          console.log('提交服务端')
          this.updateFormData(this.form, formName) // 提交服务端
        } else {
          return
        }
      })
    },
    updateFormData(data, formName) {
      this.$emit('updateFormData', data, formName)
    },
    // 重置数据
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 搜索数据
    searchData(formName) {
      this.$emit('searchData', this.form, formName)
    },
    // 选择下拉框
    changeSelect(val, item) {
      this.$emit('changeSelect', val, item)
    },
    // 编辑表格tr
    editRow(tableItem, item) {
      this.$emit('editRow', tableItem, item)
    }
  }
}
</script>

<style scoped lang="scss">
.form-type-box {
  overflow-y: overlay;
  position: relative;
  padding: 15px 20px 0 0;
  box-sizing: border-box;
  height: 100%;
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
}

.more {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
  background: #fff;
  border-top: 1px solid rgb(235, 235, 235);
  border-bottom: 1px solid rgb(235, 235, 235);

  i {
    display: inline-block;
    transform: rotate(0);
    transition: all 0.3s ease-in;
  }
}

.showMore {
  .more {
    i {
      transform: rotate(-180deg);
    }
  }
}

.form-btn {
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 20px;
}
</style>
