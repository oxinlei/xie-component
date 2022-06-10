<template>
  <div class="table-text-box">
    <table>
      <thead>
        <tr>
          <th v-for="(th, index) in thList" :key="index">
            {{ th.text }}
          </th>
          <th>
            <div
              :style="{
                width: data.handleWidth ? data.handleWidth + 'px' : 80 + 'px'
              }"
            >
              操作
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="trList.length <= 0">
          <tr>
            <td :colspan="thList.length + 1">暂无数据</td>
          </tr>
        </template>
        <template v-else>
          <tr v-for="(tr, index) in trList" :key="index">
            <td v-for="(th, key) in thList" :key="key">
              <!-- 可选择的类型显示判断后的值 -->
              <template v-if="th.xtype === 'select'">
                <span v-for="(item, i) in th.selectList" :key="i">
                  <template v-if="tr[th.name] === item.value">
                    {{ item.label }}
                  </template>
                </span>
              </template>
              <!-- 默认显示可编辑input状态 -->
              <template v-else>
                <el-input
                  v-model="tr[th.name]"
                  :placeholder="'请输入' + th.text"
                />
              </template>
            </td>
            <td class="handle">
              <i class="iconfont icon-bianji" @click="editTableTextTr(tr)" />
              <i class="iconfont icon-shanchu" @click="delTableTextTr(index)" />
            </td>
          </tr>
        </template>
        <tr>
          <td
            class="add-item"
            :colspan="thList.length + 1"
            @click="addTableTextTr()"
          >
            <i class="iconfont icon-jiahao" />
            添加
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableText',
  props: {
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
      trList: [],
      trItem: {},
      rulesMessage: ''
    }
  },
  watch: {
    data: {
      handler(val) {
        console.log(val.tr)
        this.thList = val.th
        this.trList = val.tr
        this.trItem = val.trItem
      },
      immediate: true,
      deep: true
    },
    rules: {
      handler(val) {
        console.log(val)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 添加表格tr
    addTableTextTr() {
      const newItem = JSON.parse(JSON.stringify(this.trItem))
      if (this.trList.length > 0) {
        if (this.validatingData()) {
          this.trList.push(newItem)
        } else {
          this.$message.error(this.rulesMessage)
          return
        }
      } else {
        console.log('push', this.trList)
        this.trList.push(newItem)
      }
    },
    // 判断数据是否填写完整
    validatingData() {
      if (this.rules !== '') {
        // 表单内的表格需判断必填项是否填写完整
        const flag = this.trList.every((item) => {
          console.log('item', item)
          const keyList = []
          for (const key in this.rules) {
            console.log('请点击编辑完善必填项', this.rules)
            keyList.push(key)
          }
          const itemFlag = keyList.every((i) => {
            console.log('请点击编辑完善必填项', i, item[i])
            return item[i] !== ''
          })
          return itemFlag
        })
        this.rulesMessage = '请点击编辑完善必填项'
        console.log('请点击编辑完善必填项', this.rules)
        console.log('请点击编辑完善必填项', flag)
        return flag
      } else {
        // 非表单内的表格需判断每项是否填写完整
        const flag = this.trList.every((item) => {
          const keyList = []
          for (const key in item) {
            keyList.push(key)
          }
          const itemFlag = keyList.every((i) => {
            return item[i] !== ''
          })
          return itemFlag
        })
        this.rulesMessage = '请完整填写表格内容'
        console.log('请完整填写表格内容')
        return flag
      }
    },
    // 编辑表格tr
    editTableTextTr(item) {
      this.$emit('editTableTextTr', item)
    },
    // 删除表格tr
    delTableTextTr(index) {
      this.trList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.table-text-box {
  table {
    width: 100%;
    text-align: center;
    font-size: 12px;
    border-collapse: collapse;

    thead {
      color: #909399;
      font-weight: 500;
    }

    tr {
      th,
      td {
        border: 1px solid #dbdfe7;
        line-height: 25px;
        overflow: hidden;
        &:not(:last-child) {
          width: 45%;
          height: 35px;
        }
      }
    }

    th {
      background: #efefef;
    }

    td {
      padding: 5px;

      .btn {
        &:not(:first-child) {
          margin-left: 10px;
        }
      }

      .el-input__inner {
        text-align: center;
        border: none;
      }

      &.add-item {
        padding: 0;
        cursor: pointer;
        background: #edeeee;

        i {
          vertical-align: middle;
        }

        &:hover {
          background: #dceeff;
        }
      }
    }
    .handle {
      i {
        margin: 0 5px;
        font-size: 18px;
        &.icon-bianji {
          color: #1890ff;
        }
        &.icon-shanchu {
          color: #d31900;
        }
        &:hover {
          color: #1890ff;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.table-text-box {
  td {
    .el-input__inner {
      text-align: center;
      border: none;
      padding: 0;
      height: 25px;
      line-height: 25px;
    }

    .el-input--medium .el-input__inner {
      height: 25px;
      line-height: 25px;
    }
  }
}
</style>
