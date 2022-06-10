<template>
  <div class="gantt-elastic-box">
    <GanttElastic
      :props-tasks="tasks"
      :props-options="options"
      @addTask="addTask"
    >
    </GanttElastic>
    <el-dialog title="添加新项目" :visible.sync="dialogVisible" width="30%">
      <FormBox
        :data-form="dataForm"
        :rules="rules"
        @addFormData="addFormData"
      />
    </el-dialog>
  </div>
</template>

<style></style>

<script>
import GanttElastic from '@/components/GanttElastic'
import dayjs from 'dayjs'
function getDate(hours) {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()
  const timeStamp = new Date(
    currentYear,
    currentMonth,
    currentDay,
    0,
    0,
    0
  ).getTime()
  return new Date(timeStamp + hours * 60 * 60 * 1000).getTime()
}
export default {
  name: 'Gantt',
  components: {
    GanttElastic
  },
  data() {
    return {
      dialogVisible: false,
      // 数据
      tasks: [
        {
          id: 1,
          label: '项目名称1', // 项目名称
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          start: getDate(-24 * 5), // 任务开始时间
          duration: 15 * 24 * 60 * 60 * 1000, // 任务进行的时间
          percent: 85, // 必填项，完成率，百分比
          type: 'project' // 必填项，进度条显示的类型（project、milestone、task）
          //collapsed: true,
        },
        {
          id: 2,
          label: '项目名称2',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          parentId: 1, // 需要跟父级id相同，是项目下的任务
          start: getDate(-24 * 4),
          duration: 4 * 24 * 60 * 60 * 1000,
          percent: 50,
          type: 'milestone',
          collapsed: true,
          // 进度条样式
          style: {
            base: {
              fill: '#1EBC61', // 背景色
              stroke: '#0EAC51' // 边框颜色
            },
            text: {
              color: '#108cee'
            }
          }
        },
        {
          id: 3,
          label: '项目名称3.',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          parentId: 2,
          start: getDate(-24 * 3),
          duration: 2 * 24 * 60 * 60 * 1000,
          percent: 100,
          type: 'task'
        },
        {
          id: 4,
          label: '项目名称4',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          start: getDate(-24 * 2),
          duration: 2 * 24 * 60 * 60 * 1000,
          percent: 50,
          type: 'task',
          dependentOn: [3]
        },
        {
          id: 5,
          label: '项目名称5',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          parentId: 4,
          start: getDate(0),
          duration: 2 * 24 * 60 * 60 * 1000,
          percent: 10,
          type: 'milestone',
          style: {
            base: {
              fill: '#0287D0',
              stroke: '#0077C0'
            }
          }
        },
        {
          id: 6,
          label: '项目名称6',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          parentId: 5,
          start: getDate(24),
          duration: 1 * 24 * 60 * 60 * 1000,
          percent: 50,
          type: 'task',
          collapsed: true,
          style: {
            base: {
              fill: '#8E44AD',
              stroke: '#7E349D'
            }
          }
        },
        {
          id: 7,
          label: '项目名称7',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          parentId: 2,
          dependentOn: [6],
          start: getDate(24 * 2),
          duration: 4 * 60 * 60 * 1000,
          percent: 20,
          type: 'task',
          collapsed: true
        },
        {
          id: 8,
          label: '项目名称8',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          parentId: 7,
          dependentOn: [7],
          start: getDate(24 * 3),
          duration: 1 * 24 * 60 * 60 * 1000,
          percent: 0,
          type: 'task'
        },
        {
          id: 9,
          label: '项目名称9',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          parentId: 8,
          dependentOn: [8, 7],
          start: getDate(24 * 4),
          duration: 4 * 60 * 60 * 1000,
          percent: 20,
          type: 'task',
          style: {
            base: {
              fill: '#8E44AD',
              stroke: '#7E349D'
            }
          }
        },
        {
          id: 10,
          label: '项目名称10',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          start: getDate(24 * 5),
          duration: 24 * 60 * 60 * 1000,
          percent: 0,
          type: 'task'
        },
        {
          id: 11,
          label: '项目名称11',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          start: getDate(24 * 6),
          duration: 24 * 60 * 60 * 1000,
          percent: 0,
          type: 'task'
        },
        {
          id: 12,
          label: '项目名称12',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          start: getDate(24 * 7),
          duration: 24 * 60 * 60 * 1000,
          percent: 0,
          type: 'task',
          parentId: 11
        },
        {
          id: 13,
          label: '项目名称13',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          start: getDate(24 * 8),
          duration: 24 * 60 * 60 * 1000,
          percent: 0,
          type: 'task'
        },
        {
          id: 14,
          label: '项目名称14',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          start: getDate(24 * 9),
          duration: 24 * 60 * 60 * 1000,
          percent: 0,
          type: 'task'
        },
        {
          id: 15,
          label: '项目名称15',
          user:
            '<a href="https://www.google.com/search?q=负责人名字" target="_blank" style="color:#0077c0;">负责人名字</a>',
          start: getDate(24 * 16),
          duration: 24 * 60 * 60 * 1000,
          percent: 0,
          type: 'task'
        }
      ],
      // 设置
      options: {
        taskMapping: {
          progress: 'percent' // 进度-百分比
        },
        maxRows: 100, // 最大行距
        maxHeight: 500, // 最大高度
        defHeader: false, // has slot header
        title: {
          label: '你的项目名称',
          html: false
        },
        row: {
          height: 24 // 行高
        },
        times: {
          timeZoom: 16, // 甘特图列宽
          timeScale: 60 * 1000 // 时间尺度
        },
        // scope: {
        //   befoce: 10,
        //   after: 10
        // },
        // 日历
        calendar: {
          hour: {
            display: true
          }
        },
        // 右侧甘特图样式
        chart: {
          progress: {
            bar: false
          },
          // 收缩icon样式
          expander: {
            type: 'chart',
            display: true, // 是否显示
            offset: 4, // 离右侧进度条距离
            size: 18 // 图标大小
          },
          text: {
            display: true, // 是否显示
            offset: 4 // 离左侧收缩icon距离
          }
        },
        // 左侧表格固定内容
        taskList: {
          expander: {
            straight: false
          },
          columns: [
            {
              id: 1,
              label: 'ID',
              value: 'id', // 对应tasks内的属性值
              width: 40
            },
            {
              id: 2,
              label: '项目名称',
              value: 'label',
              width: 200,
              expander: true, // 显示展开按钮
              html: true,
              events: {
                click({ data, column }) {
                  alert('description clicked!\n' + data.label)
                }
              }
            },
            {
              id: 3,
              label: '负责人',
              value: 'user',
              width: 130,
              html: true
            },
            {
              id: 3,
              label: '开始时间',
              value: (task) => dayjs(task.start).format('YYYY-MM-DD'),
              width: 78
            },
            {
              id: 4,
              label: '类型',
              value: 'type',
              width: 68
            },
            {
              id: 5,
              label: '%',
              value: 'progress',
              width: 35,
              style: {
                'task-list-header-label': {
                  'text-align': 'center',
                  width: '100%'
                },
                'task-list-item-value-container': {
                  'text-align': 'center',
                  width: '100%'
                }
              }
            }
          ]
        },
        // 设置中文表头
        locale: {
          name: 'en',
          Now: '当前时间',
          'X-Scale': '缩放宽度',
          'Y-Scale': '缩放高度',
          'Task list width': '左侧表格宽度',
          'Before/After': '时间跨度',
          'Display task list': '显示左侧表格',
          weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          months: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ]
        },
        calendar: {
          workingDays: [1, 2, 3, 4, 5, 6], // 设置每周的工作时间
          gap: 0, // 与上方距离
          strokeWidth: 5, //与下方距离
          hour: {
            display: true // 设置小时是否出现
          }
        }
      },
      lastId: 16,
      dataForm: {
        xtype: '',
        labelWidth: '100px',
        status: 'createForm',
        label: [
          {
            xtype: 'text',
            name: 'name',
            text: '项目名称'
          },
          {
            xtype: 'text',
            name: 'user',
            text: '负责人'
          },
          {
            xtype: 'date',
            name: 'start',
            text: '开始时间'
          },
          {
            xtype: 'select',
            name: 'type',
            text: '类型',
            selectList: [
              {
                label: 'project',
                value: 'project'
              },
              {
                label: 'milestone',
                value: 'milestone'
              },
              {
                label: 'task',
                value: 'task'
              }
            ]
          },
          {
            xtype: 'unit',
            name: 'percent',
            text: '完成率',
            unit: '%'
          }
        ]
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入项目名称',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur'
          }
        ],
        user: [
          {
            required: true,
            message: '请输入负责人姓名',
            trigger: 'blur'
          }
        ],
        start: [
          {
            required: true,
            message: '请选择开始时间',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    addTask() {
      console.log('aaa')
      this.dialogVisible = true
    },
    addFormData(data) {
      console.log(data)
      this.tasks.push({
        id: this.lastId++,
        label:
          '<a href="https://images.pexels.com/photos/423364/pexels-photo-423364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank" style="color:#0077c0;">' +
          data.name +
          '</a>',
        user:
          '<a href="https://images.pexels.com/photos/423364/pexels-photo-423364.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" target="_blank" style="color:#0077c0;">' +
          data.user +
          '</a>',
        start: data.date,
        duration: 1 * 24 * 60 * 60 * 1000,
        percent: data.percent ? data.percent : 10,
        type: data.type ? data.type : 'project'
      })

      this.dialogVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.gantt-elastic-box {
  width: 100%;
  height: 100%;
}
</style>
