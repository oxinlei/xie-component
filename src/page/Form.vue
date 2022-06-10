<template>
  <div class="FormBox">
    <FormBox :data-form="form" :list-form="listForm" :rules="rules" />
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      form: {
        size: 'mini',
        xtype: '', // 用于判断是否定制化表单
        labelWidth: '100px', // 表单左侧label宽度
        status: 'updateForm', // updateForm 按钮为立即更新，createForm 按钮为立即创建，searchForm 按钮为搜索
        // 表单左侧标题名称、显示类型
        label: [
          // 表格
          {
            xtype: 'table', // 表单行显示类型
            name: 'table', // 表单左侧标题名称对应右侧数据字段
            text: '表格', // 表单左侧标题名称
            // 表格表单需配置如下
            table: {
              // 表头
              th: [
                {
                  text: '姓名', // 表格标题
                  name: 'name', // 对应表格tr字段名
                  xtype: 'text' // 表格显示表单类型
                },
                {
                  text: '性别',
                  name: 'sex',
                  xtype: 'select',
                  selectList: [
                    {
                      label: '男',
                      value: 'aaa'
                    },
                    {
                      label: '女',
                      value: 'ddd'
                    }
                  ]
                }
              ],
              tr: [],
              // 新增表格tr字段名
              trItem: {
                name: '',
                sex: ''
              },
              // 表格必填项
              rules: {
                name: [
                  {
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                  }
                ]
              }
            }
          },
          // 开关
          {
            xtype: 'switch',
            name: 'switch',
            text: '开关'
          },
          // 文本框
          {
            xtype: 'text',
            name: 'text',
            text: '文本框'
          },
          // 密码
          {
            xtype: 'password',
            name: 'password',
            text: '密码'
          },
          // 多行文本框
          {
            xtype: 'textarea',
            name: 'textarea',
            text: '多行文本框'
          },
          // 文本框+单位
          {
            xtype: 'unit',
            name: 'unit',
            text: '文本框+单位',
            unit: 'px',
            inputWidth: 150 // 输入框宽度
          },
          // 下拉框
          {
            xtype: 'select',
            name: 'select',
            text: '下拉框',
            selectList: [
              { value: '1', label: '下拉框1' },
              { value: '2', label: '下拉框2' }
            ]
          },
          // 日期
          {
            xtype: 'date',
            name: 'date',
            text: '日期'
          },
          // 时间
          {
            xtype: 'time',
            name: 'time',
            text: '时间'
          },
          // 选框-单个
          {
            xtype: 'checked',
            name: 'checked',
            text: '选框-单个',
            checked: '选框-单个'
          },
          // 多选框-多个-必须有初始参数
          {
            xtype: 'checkbox',
            name: 'checkbox',
            text: '多选框-多个',
            checkboxList: ['多选框-多个1', '多选框-多个2']
          },
          // 单选框
          {
            xtype: 'radio',
            name: 'radio',
            text: '单选框',
            radioList: [
              { value: '1', label: '单选框1' },
              { value: '2', label: '单选框2' }
            ]
          },
          // 数字-必须有初始参数
          {
            xtype: 'number',
            name: 'number',
            text: '数字'
          }
        ]
      },
      // 收集表单数据对象-对应form内的label列表下的name
      listForm: {
        checkbox: [], // 多选框-多个-必须有初始参数
        number: 1 // 数字-必须有初始参数
      },
      // 设置必填项-字段名对应form内的label列表下需要设置必填项的name
      rules: {
        text: [
          {
            required: true,
            message: '请输入文本框',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur'
          }
        ],
        date: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    selectList(params) {
      console.log('params', params)
    }
  }
}
</script>

<style lang="scss">
.FormBox {
  & > div {
    height: 100vh;
    overflow: hidden;
  }
}
</style>
