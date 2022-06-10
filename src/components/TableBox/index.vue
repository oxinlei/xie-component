<template>
  <div class="table-box">
    <el-table
      ref="table"
      :data="filterData"
      style="width: 100%"
      height="calc(100% - 50px)"
      border
      fit
      class="scroll-bar"
      :default-sort="{ prop: 'date', order: 'descending' }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="isSelectionShow" type="selection" width="40" />
      <el-table-column type="index" label="序号" width="50" />
      <el-table-column
        v-for="th in table.th"
        :key="th.name"
        :width="th.width ? th.width : ''"
      >
        <template slot="header" slot-scope="scope">
          {{ th.text }}
          <span v-if="th.name === 'enable' && th.tip">
            <el-popover
              :placement="th.tip.placement"
              :title="th.text"
              :trigger="th.tip.trigger"
              :content="th.tip.content"
            >
              <i slot="reference" :class="['iconfont', th.tip.icon]" />
            </el-popover>
          </span>
        </template>
        <template slot-scope="scope">
          <template v-if="th.xtype === 'text'">
            {{ scope.row[th.name] }}
          </template>
          <template v-if="th.xtype === 'text-edit'">
            <el-input v-model="scope.row[th.name]" size="mini" />
          </template>
          <template v-if="th.xtype === 'switch'">
            <el-switch v-model="scope.row[th.name]" />
          </template>
          <template v-if="th.xtype === 'select'">
            <el-select
              v-model="scope.row[th.name]"
              placeholder="请选择"
              size="mini"
            >
              <el-option
                v-for="(item, index) in scope.row.select"
                :key="index"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
          <template v-if="th.xtype === 'valided'">
            <span v-if="scope.row[th.name] === 0" class="un-valided">
              未验证
            </span>
            <span v-if="scope.row[th.name] === 1" class="valided">
              已验证
            </span>
          </template>
          <template v-if="th.xtype === 'dataSourceType'">
            <template v-if="scope.row[th.name] === 1">JDBC数据源</template>
            <template v-if="scope.row[th.name] === 2">静态数据源</template>
            <template v-if="scope.row[th.name] === 3">API数据源</template>
          </template>
        </template>
      </el-table-column>
      <el-table-column v-if="table.handle" label="操作" width="400">
        <template slot-scope="scope">
          <el-button
            v-for="(handle, index) in table.handle"
            :key="index"
            :type="handle.type"
            size="mini"
            class="btn"
            plain
            @click="clickHandleBtn(scope.row, handle.name)"
          >
            {{ handle.name }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableBox',
  props: {
    dataTable: {
      type: Object,
      default: () => {
        return {}
      }
    },
    filterData: {
      type: Array,
      default: () => {
        return []
      }
    },
    isSelectionShow: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      table: []
    }
  },
  computed: {
    maxHeight() {
      return 'calc(100% - 50px)'
    }
  },
  watch: {
    dataTable: {
      handler(val) {
        console.log(val)
        this.table = val
      },
      immediate: true
    }
  },
  created() {
    this.selectList()
  },
  methods: {
    // 读取页码对应数据
    selectList(params) {
      if (!params) params = { page: 1, limit: 10 }
      this.$emit('selectList', params)
    },
    // 批量操作
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange', val)
    },
    // 操作
    clickHandleBtn(row, name) {
      this.$emit('clickHandleBtn', row, name)
    }
  }
}
</script>
<style scoped lang="scss">
.pagination-container {
  margin: 0;
  padding: 10px;
}
.valided {
  color: #67c23a;
}
.un-valided {
  color: #f56c6c;
}
.table-box {
  padding: 10px;
  box-sizing: border-box;
  ::v-deep {
    .el-table__header {
      th {
        background: #efefef;
        text-align: center;
      }
    }
    .el-table__body {
      td {
        text-align: center;
      }
    }
    .el-table__row {
      line-height: 30px;
    }
    .cell {
      padding: 0 !important;
    }
    .el-input {
      width: 80%;
      padding: 3px 0;
    }
    .el-select {
      display: flex;
      justify-content: center;
    }
  }
  .btn {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
<style lang="scss">
.table-box {
  .el-table__row {
    .cell {
    }
    .el-table_1_column_2 {
      text-align: center;
    }
  }
}
::v-deep.el-table__body-wrapper {
  &::-webkit-scrollbar {
    /* 滚动条整体样式 */
    width: 6px !important; /* 高宽分别对应横竖滚动条的尺寸 */
  }
}
</style>
