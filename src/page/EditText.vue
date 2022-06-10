<template>
  <FlexLayout>
    <!--左侧内容-->
    <template slot="flex-left-box">
      <div class="form-box">

        <div class="form-top">
          <div class="form-top-left">
            <h6>版本：</h6>
            <div class="form-top-left-select">
              <i class="iconfont icon-gengduo1"></i>
              <el-select v-model="value" placeholder="V 4.0">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="form-top-right">
            <div class="form-top-right-item" v-for="(item,index) in list" :key="index">
              <h6>
                {{ item.name }}：
              </h6>
              <div class="form-top-right-select">
                <el-select v-model="item.optionsAValue" placeholder="请选择">
                  <el-option
                    v-for="optionA in item.optionsA"
                    :key="optionA"
                    :label="optionA"
                    :value="optionA">
                  </el-option>
                </el-select>
                <el-select v-if="item.optionsB" v-model="item.optionsBValue" placeholder="请选择">
                  <el-option
                    v-for="optionB in item.optionsB"
                    :key="optionB"
                    :label="optionB"
                    :value="optionB">
                  </el-option>
                </el-select>
                <el-select v-if="item.optionsC" v-model="item.optionsCValue" placeholder="请选择">
                  <el-option
                    v-for="optionC in item.optionsC"
                    :key="optionC"
                    :label="optionC"
                    :value="optionC">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>

        <Editor />

      </div>
    </template>

    <!--右侧头部-->
    <template slot="flex-right-top-box">
      <div class="right-top">
        <TabBox :tabs="defaultTabs">
          <!--右侧头部内容-->
          <template>
            <slot name="tab-content"></slot>
          </template>
        </TabBox>
      </div>
    </template>

    <!--右侧底部-->
    <template slot="flex-right-bottom-box">
      <div class="right-bottom">
        <TabBox :tabs="moreTabs"/>
        <div class="right-bottom-content">

        </div>
      </div>
    </template>
  </FlexLayout>
</template>

<script>
import FlexLayout from '../components/FlexLayout'
import Editor from "../components/Editor"
import TabBox from "../components/TabBox"
export default {
  name: "EditText",
  components:{
    FlexLayout,
    Editor,
    TabBox
  },
  data() {
    return {
      options: [{
        value: 'V 4.0',
        label: 'V 4.0'
      }, {
        value: 'V 3.0',
        label: 'V 3.0'
      }, {
        value: 'V 2.0',
        label: 'V 2.0'
      }, {
        value: 'V 1.0',
        label: 'V 1.0'
      }],
      value: '',
      list:[
        {
          name:'正文',
          optionsAValue:'',
          optionsA:[
            '个体工商户商',
            '商铺租赁家具'
          ]
        },
        {
          name:'附件',
          optionsAValue:'',
          optionsA:[
            '商铺租赁家具'
          ],
          optionsBValue:'',
          optionsB:[
            '入场装修方案'
          ]
        },
        {
          name:'通用附件',
          optionsAValue:'',
          optionsA:[
            '信用调查同意书'
          ],
          optionsBValue:'',
          optionsB:[
            '入场装修方案'
          ],
          optionsCValue:'',
          optionsC:[
            '入场装修方案'
          ]
        },
      ],
      defaultTabs:[
        {name:'表单字段',show:true},
        {name:'条款备选',show:true},
        {name:'履约计划',show:true},
        {name:'操作记录',show:false},
      ],
      moreTabs:[
        {name:'协同',show:true},
        {name:'条款库',show:true},
        {name:'文本比对',show:true},
        {name:'外部磋商',show:false},
        {name:'智能纠错',show:false},
        {name:'在线查询',show:false},
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";
.form-box {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 400px;
  height: 100%;
  padding: 15px 10px 15px 15px;
  box-sizing: border-box;
  .form-top{
    display: flex;
    border-bottom: 2px solid #efefef;
    h6{
      color: #9c9da1;
      font-weight: normal;
    }
    &-left{
      padding: 5px;
      box-sizing: border-box;
      border-right: 2px solid #efefef;
      &-select{
        width: 100px;
        display: flex;
        line-height: 40px;
      }
    }
    &-right{
      display: flex;
      width: 100%;
      margin: 0 10px;
      padding-bottom: 10px;
      box-sizing: border-box;
      overflow: auto;
      @include scrollbar(rgba(0,0,0,.2));
      &-item{
        display: flex;
        flex-direction: column;
        .form-top-right-select{
          display: flex;
          .el-select{
            width: 100px;
            margin-top: 5px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
.right-top{
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 200px;
  .line{
    display: flex;
    flex-direction: column;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6px;
    cursor: row-resize;
    i{
      height: 1px;
      width: 14px;
      margin: 1px 0;
    }
  }
  .right-top-content{
    flex: 1;
  }
}
.right-bottom{
  display: flex;
  flex-direction: column;
  height: 100%;
  .right-bottom-content{
    flex: 1;
    height: 100%;
  }
}

</style>
<style lang="scss">
.el-input__inner{
  height: 30px;
  line-height: 30px;
  color: red;
  background: none;
  border: none;
}
.form-top-right{
  .form-top-right-item{
    .form-top-right-select{
    }
    &:first-child{
      .el-input{
        background: rgba(44, 123, 229, 1);
      }
    }
    .el-input{
      background: rgba(231, 238, 252, 1);
      border-radius: 5px;
    }
  }
}
.el-scrollbar__view{
  padding: 6px;
  .el-select-dropdown__item{
    padding: 0 5px;
  }
}
.el-input__icon{
  height: 30px;
  line-height: 30px;
}
</style>
