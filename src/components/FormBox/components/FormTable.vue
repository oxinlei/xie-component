<template>
  <div class="table-text-box">
    <el-form ref="form" :model="data" :rules="data.rules" :inline="true">
      <el-table :data="data.tr" border>
        <el-table-column
          v-for="(th, index) in thList"
          :key="index"
          :prop="th.name"
          align="center"
          :label="th.text"
        >
          <template slot-scope="scope">
            <el-form-item
              :prop="'tr.' + scope.$index + '.' + th.name"
              :rules="data.rules[th.name]"
            >
              <!-- <el-input
                v-model="scope.row[th.name]"
                size="mini"
                :placeholder="'请输入' + th.text"
                clearable
              /> -->
              <!--可选择的类型显示判断后的值 -->
              <template v-if="th.xtype === 'select'">
                <el-select
                  v-if="th.xtype === 'select'"
                  v-model="scope.row[th.name]"
                  :placeholder="'请选择' + th.text"
                  @change="changeSelect($event, item)"
                  :size="size"
                >
                  <el-option
                    v-for="option in th.selectList"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <!-- 默认显示可编辑input状态-->
              <template v-else>
                <el-input
                  v-model="scope.row[th.name]"
                  size="mini"
                  :placeholder="'请输入' + th.text"
                  clearable
                />
              </template>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-form-item class="handle">
              <i class="el-icon-edit" @click="editRow(scope.row)" />
              <i class="el-icon-delete" @click="delRow(scope.$index)" />
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
      <div class="add-icon" @click="addRow()">
        <i class="el-icon-circle-plus-outline" />
        新增
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'FormTable',
  props: {
    size: {
      type: String,
      default: () => {
        return 'mini'
      }
    },
    data: {
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
    }
  },
  data() {
    return {
      thList: [],
      trList: {},
      trItem: {}
    }
  },
  watch: {
    data: {
      handler(val) {
        this.thList = val.th
        this.trList = val.tr
        this.trItem = val.trItem
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 校验
    validateField() {
      let falg = true
      if (this.trList.length > 0) {
        this.trList.forEach((item) => {
          this.$refs['form'].validate((valid) => {
            if (valid) {
              falg = true
            } else {
              falg = false
            }
          })
        })
      }
      return falg
    },
    // 添加行
    addRow() {
      const newItem = JSON.parse(JSON.stringify(this.trItem))
      if (this.validateField()) {
        this.trList.push(newItem)
      } else {
        return
      }
    },
    // 编辑行
    editRow(item) {
      this.$emit('editRow', item)
    },
    // 删除行
    delRow(index) {
      this.trList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.table-text-box {
  .handle {
    i {
      margin: 0 5px;
      font-size: 18px;
      cursor: pointer;
      &:first-child {
        color: #1890ff;
        &:hover {
          color: #006cd1;
        }
      }
      &:nth-child(2) {
        color: #d31900;
        &:hover {
          color: #881000;
        }
      }
    }
  }
  .add-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #1890ff;
    text-align: center;
    border-radius: 0 0 5px 5px;
    border: 1px solid #dfe6ec;
    border-top: none;
    line-height: 35px;
    cursor: pointer;
    &:hover {
      background: #e8f4ff;
    }
    i {
      margin-right: 5px;
    }
  }
  ::v-deep {
    .el-table {
      font-size: 12px;
    }
    .el-table--small {
      th {
        padding: 0px 0;
      }
    }
    .el-form-item.is-error {
      .el-input__inner {
        border: 1px solid #ff4949;
        &:focus {
          border: none;
          box-shadow: 0 0 0 1px #ff0000, 0 0 0 3px #ffd4d4;
        }
      }
    }
    .el-form-item__content {
      .el-input__inner {
        height: 30px;
        line-height: 30px;
      }
    }
    .cell {
      overflow: inherit;
    }
    .el-form-item--small .el-form-item__error {
      position: absolute;
      top: -5px;
      left: 10%;
      background-color: #fff;
      padding: 0 2px;
      width: 80%;
    }
    .el-form-item--small.el-form-item {
      margin-bottom: 0;
      margin-right: 0;
    }
    .el-table__empty-block {
      min-height: 49px;
      .el-table__empty-text {
        line-height: 49px;
      }
    }
  }
}
</style>
<style lang="scss">
.el-table .el-table__cell {
  padding: 0;
}
.el-table__row {
  .cell {
    padding: 5px 0;
  }
}
.table-text-box {
  .el-form-item__error {
    top: 0px;
    left: 10px;
    padding: 0 5px;
    background: #fff;
  }
}
</style>
