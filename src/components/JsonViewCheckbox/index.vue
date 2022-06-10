<template>
  <div :class="['json-view-container', theme, `deep-${currentDeep}`]">
    <div
      :class="['json-view', length ? 'closeable' : '']"
      :style="{ fontSize: fontSize + 'px', lineHeight: lineHeight + 'px' }"
    >
      <!--icon-style-square-->
      <span
        @click="toggleClose"
        class="angle"
        v-if="length && iconStyle === 'square'"
      >
        <svg
          v-if="innerclosed"
          :fill="iconColors[0]"
          width="1em"
          height="1em"
          viewBox="0 0 1792 1792"
          style="vertical-align: middle; color: rgb(42, 161, 152); height: 1em; width: 1em;"
        >
          <path
            d="M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
          ></path>
        </svg>
        <svg
          v-if="!innerclosed"
          :fill="iconColors[1]"
          width="1em"
          height="1em"
          viewBox="0 0 1792 1792"
          style="vertical-align: middle; color: rgb(88, 110, 117); height: 1em; width: 1em;"
        >
          <path
            d="M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
          ></path>
        </svg>
      </span>
      <!--icon-style-circle-->
      <span
        @click="toggleClose"
        class="angle"
        v-if="length && iconStyle === 'circle'"
      >
        <svg
          v-if="!innerclosed"
          viewBox="0 0 24 24"
          :fill="iconColors[0]"
          preserveAspectRatio="xMidYMid meet"
          style="vertical-align: middle; color: rgb(1, 160, 228); height: 1em; width: 1em;"
        >
          <path
            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
          ></path>
        </svg>
        <svg
          v-if="innerclosed"
          viewBox="0 0 24 24"
          :fill="iconColors[1]"
          preserveAspectRatio="xMidYMid meet"
          style="vertical-align: middle; color: rgb(161, 106, 148); height: 1em; width: 1em;"
        >
          <path
            d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
          ></path>
        </svg>
      </span>
      <!--icon-style-triangle-->
      <span
        @click="toggleClose"
        class="angle"
        v-if="length && iconStyle === 'triangle'"
      >
        <svg
          v-if="!innerclosed"
          viewBox="0 0 15 15"
          :fill="iconColors[0]"
          style="vertical-align: top; color: #3c4047; height: 1em; width: 1em; padding-left: 2px;"
        >
          <path d="M0 5l6 6 6-6z"></path>
        </svg>
        <svg
          v-if="innerclosed"
          viewBox="0 0 15 15"
          :fill="iconColors[1]"
          style="vertical-align: top; color: #3c4047; height: 1em; width: 1em; padding-left: 2px;"
        >
          <path d="M0 14l6-6-6-6z"></path>
        </svg>
      </span>

      <div class="content-wrap">
        <div
          :class="['first-line row-box', length > 0 ? 'pointer' : '']"
          @click="toggleClose"
        >
          <!-- <span v-if="jsonKey" class="json-key">"{{jsonKey.indexOf('[')>-1 ?'':jsonKey}}": </span> -->
          <div class="row-value">
            <input
              name="ccc"
              type="checkbox"
              @click.stop=""
              @change="getJsonKey(jsonKey, items)"
            />
            <span
              v-if="
                jsonKey &&
                  jsonKey.indexOf('[') == -1 &&
                  jsonKey.indexOf(']') == -1
              "
              class="json-key"
            >
              "{{ jsonKey }}":
            </span>

            <span v-if="length">
              {{ prefix }}{{ innerclosed ? '...' + subfix : '' }}
              <span class="json-note">
                {{ innerclosed ? length + ' items' : '' }}
              </span>
            </span>
            <span v-if="!length">
              {{ `${isArray ? '[]' : '{}'}${isLast ? '' : ','}` }}
            </span>
          </div>
          <div class="row-type">
            <span>
              {{ items.instanceof === Array ? 'Array' : 'Object' }}
              {{ items.isArray }}
            </span>
          </div>
        </div>
        <div v-if="!innerclosed && length" class="json-body">
          <!-- <span style="color:#fff">{{ JSON.stringify(items) }}</span> -->
          <template v-for="(item, index) in items">
            <JsonViewCheckbox
              v-if="item.isJSON"
              :closed="isClose()"
              :key="index"
              :data="item.value"
              :parentData="item"
              :jsonKey="item.key"
              :currentDeep="templateDeep + 1"
              :deep="deep"
              :iconStyle="iconStyle"
              :theme="theme"
              :fontSize="fontSize"
              :lineHeight="lineHeight"
              :iconColor="iconColors"
              :isLast="index === items.length - 1"
              :hasSiblings="item.hasSiblings"
            />
            <p class="json-item" v-else :key="index">
              <span class="json-item-span" v-if="item.key != 'gdkyArrIndex'">
                <input
                  name="ccc"
                  type="checkbox"
                  :value="item.itemPath"
                  @click.stop=""
                  @change="getJsonKey(item.key, item.value)"
                />
                <span class="json-key" :data-key="item.itemPath">
                  {{ isArray ? '' : '"' + item.key + '":' }}
                </span>
                <span :class="['json-value', getDataType(item.value)]">
                  {{
                    `${getDataType(item.value) === 'string' ? '"' : ''}${
                      item.value
                    }${getDataType(item.value) === 'string' ? '"' : ''}${
                      index === items.length - 1 ? '' : ','
                    }`
                  }}
                </span>
              </span>
              <span class="json-item-type">
                {{ typeof item.value }}
              </span>
            </p>
          </template>
          <span v-if="!innerclosed" class="base-line"></span>
        </div>
        <p v-if="!innerclosed" class="last-line">
          <span>{{ subfix }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JsonViewCheckbox',
  props: {
    parentData: {
      type: [Object, Array]
    },
    data: {
      // 传入的json数据
      type: [Object, Array],
      required: true
    },
    jsonKey: {
      // json的key值，用于第二层及二层以上的组件的key值
      type: String,
      default: ''
    },
    closed: {
      // 是否折叠
      type: Boolean,
      default: false
    },
    isLast: {
      //是否是最后一行
      type: Boolean,
      default: true
    },
    fontSize: {
      //字体大小
      type: Number,
      default: 14
    },
    lineHeight: {
      //行高
      type: Number,
      default: 24
    },
    deep: {
      // 展开深度
      type: Number,
      default: 10
    },
    currentDeep: {
      // 当前为递归的第几层
      type: Number,
      default: 1
    },
    iconStyle: {
      // 折叠icon样式
      type: String,
      default: 'square'
    },
    iconColor: {
      //icon颜色
      type: Array,
      default() {
        return []
      }
    },
    theme: {
      // 主题
      type: String,
      default: 'one-dark'
    },
    hasSiblings: {
      // 是否有兄弟节点
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      innerclosed: this.closed,
      templateDeep: this.currentDeep,
      // visible: false,
      tempStr: ''
    }
  },
  computed: {
    isArray() {
      return this.getDataType(this.data) === 'array'
    },
    length() {
      return this.isArray ? this.data.length : Object.keys(this.data).length
    },
    subfix() {
      const data = this.data
      if (this.isEmptyArrayOrObject(data)) {
        // 如果是空数组或空对象
        return ''
      } else {
        return (this.isArray ? ']' : '}') + (this.isLast ? '' : ',')
      }
    },
    prefix() {
      return this.isArray ? '[' : '{'
    },
    items() {
      var tempJson = []
      const json = this.data

      if (this.isArray) {
        return json.map((item, index) => {
          const isJSON = this.isObjectOrArray(item)
          return {
            key: '[' + index + ']',
            arrKey: '[' + index + ']',
            value: item,
            isJSON,
            parentData: this.parentData
          }
        })
      } else {
        this.tempStr = ''
        var arrSplit = ''
        if (this.parentData) {
          var arr = this.jsonSplice(this.parentData, true)
          if (arr) {
            arr = arr
              .substring(0, arr.length - 1)
              .split('.')
              .reverse()
            arrSplit = arr.join('.').replace('.[', '[') + '.'
          }
        } else {
          arrSplit = ''
        }
        Object.keys(json).forEach((key) => {
          const item = json[key]
          const isJSON = this.isObjectOrArray(item)
          tempJson.push({
            key,
            value: item,
            isJSON,
            parentData: this.parentData,
            itemPath: arrSplit + key //当前key的路径
          })
        })
        return tempJson
      }
    },
    iconColors() {
      const { theme, iconColor } = this
      if (iconColor.length === 2) {
        return iconColor
      } else {
        if (theme === 'one-dark') {
          return ['#747983', '#747983']
        } else if (theme === 'vs-code') {
          return ['#c6c6c6', '#c6c6c6']
        } else {
          return ['#747983', '#747983']
        }
      }
    }
  },
  // mounted() {
  //   this.visible = true
  //   setTimeout(() => {
  //     this.visible = true
  //   }, 0)
  // },
  methods: {
    jsonSplice(json, isTop) {
      let _this = this
      if (json) {
        if (isTop) {
          _this.tempStr += json.key + '.'
          // _this.tempStr.push(json.key)
        }
        Object.keys(json).map((key) => {
          if (key == 'parentData' && json['parentData']) {
            _this.tempStr += json[key].key + '.'
            //  _this.tempStr.push(json[key].key)
            _this.jsonSplice(json[key])
          }
        })

        // console.log(_this.tempStr)
        return _this.tempStr
      }
    },
    getDataType(data) {
      return Object.prototype.toString
        .call(data)
        .slice(8, -1)
        .toLowerCase()
    },
    isObjectOrArray(source) {
      return ['array', 'object'].includes(this.getDataType(source))
    },
    toggleClose() {
      if (this.length === 0) {
        return
      }
      if (this.innerclosed) {
        this.innerclosed = false
      } else {
        this.innerclosed = true
      }
    },
    isClose() {
      return this.templateDeep + 1 > this.deep
    },
    isEmptyArrayOrObject(data) {
      // 空数组或者空对象
      return [{}, []]
        .map((item) => JSON.stringify(item))
        .includes(JSON.stringify(data))
    },
    getJsonKey(a, b) {
      console.log(a, b)
    }
  },
  watch: {
    closed() {
      this.innerclosed = this.closed
    }
  }
}
</script>
<style scoped lang="scss">
@import './style/index.scss';
@import './style/on-dark.scss';
@import './style/vs-code.scss';
.row-box {
  display: flex;
  justify-content: space-between;
  .row-value {
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
    }
    .json-key {
      margin-right: 10px;
    }
  }
  .row-type {
    margin-right: 100px;
  }
}
</style>
