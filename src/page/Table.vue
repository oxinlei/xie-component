<template>
  <div class="">
    <TableHeader :title="title" :btn-list="btnList" />
    <TableBox
      :data-table="table"
      :filter-data="filterData"
      :is-selection-show="true"
    />
  </div>
</template>

<script>
import TableHeader from '@/components/TableBox/components/TableHeader'
export default {
  name: 'Table',
  components: {
    TableHeader
  },
  data() {
    return {
      title: '数据模型',
      btnList: [
        {
          name: 'staticFileUpload',
          title: '新建数据模型',
          show: false,
          slotName: 'StaticFileUpload'
        },
        {
          name: 'addApi',
          title: '新建文件夹',
          show: false,
          slotName: 'EditApiForm'
        }
      ],

      table: {
        th: [
          {
            xtype: 'text',
            name: 'dataSourceName',
            text: '名称'
          },
          {
            xtype: 'text',
            name: 'description',
            text: '描述'
          },
          {
            xtype: 'text',
            name: 'createUserId',
            text: '创建人',
            width: 150
          },
          {
            xtype: 'switch',
            name: 'enable',
            text: '开启跨源查询',
            tip: {
              icon: 'icon-yiwen',
              content:
                '开启跨源查询开启跨源查询开启跨源查询开启跨源查询开启跨源查询',
              placement: 'top',
              trigger: 'click'
            },
            width: 120
          },
          {
            xtype: 'valided',
            name: 'valided',
            text: '状态',
            width: 80
          },
          {
            xtype: 'dataSourceType',
            name: 'dataSourceType',
            text: '类型',
            width: 100
          }
        ],
        handle: [
          // 操作按钮，type为按钮样式：'primary'为蓝色、'success'为绿色、'warning'为橙色、'info'为灰色、'danger'为红色
          { name: '创建数据模型', type: 'primary', href: '#' },
          {
            name: '预览数据',
            type: 'success',
            href: '#/data-preview'
          },
          { name: '修改配置', type: 'warning', href: '#' },
          { name: '清理缓存', type: 'info', href: '#' },
          { name: '删除', type: 'danger', href: '#' }
        ],
        tr: []
      },
      filterData: [
        {
          dataSourceName: 'aaa',
          description: 'bbb',
          createUserId: 'ccc',
          enable: 'ddd'
        }
      ]
    }
  },
  methods: {
    selectList(params) {
      console.log('params', params)
    }
  }
}
</script>

<style lang="scss" scoped></style>
