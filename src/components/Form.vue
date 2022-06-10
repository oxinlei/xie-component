<template>
  <div class="form-box">
    <h5>基本信息</h5>
    <form action="">
      <Input class="form-item" :form="form.total" />
      <Input class="form-item" :form="form.comeTime" />
      <Input class="form-item" :form="form.offTime"  :timeCost="timeCost"/>
      <Input class="form-item" :form="form.purchaseNum"/>
      <Input class="form-item" :form="form.afterTheStandard" />
      <Input class="form-item" :form="form.defaultRate" />
      <InputSelect class="form-item" :form="form.qualityStandard" />
      <InputSelect class="form-item" :form="form.typeOfPayment" />
      <InputSelect class="form-item" :form="form.typeOfPayment1" />
    </form>
    <h5 style="margin-top: 50px">合同主体</h5>
    <div class="contract-main">
      <ContractMain :main="main.firstParty" />
      <ContractMain :main="main.secondParty" />
      <ContractMain :main="main.thirdParty" />
    </div>
    <h5 style="margin-top: 30px">扩展字段</h5>
  </div>
</template>

<script>
import Input from "./InputText";
import InputSelect from "./InputSelect";
import ContractMain from "./ContractMain";
export default {
  name: "Form",
  components:{
    Input,
    InputSelect,
    ContractMain
  },
  data() {
    return {
      comeTimeValue: '2022-01-18',
      offTimeValue: '2025-01-18',
      form: {
        total: {
          title:'总收入',
          value:'290,000元',
          isLockInput:true,
          isUnlockInput:false,
        },
        comeTime:{
          title:'生效时间',
          value:'2022-01-18',
          isLockInput:false,
          isUnlockInput:true,
        },
        offTime:{
          title:'截止时间',
          value:'2029-01-18',
          isLockInput:false,
          isUnlockInput:true,
        },
        purchaseNum: {
          title:'采购数量',
          value:'290,000元',
          isLockInput:true,
          isUnlockInput:false,
        },
        afterTheStandard: {
          title:'售后标准',
          value:'优质',
          isLockInput:true,
          isUnlockInput:false,
        },
        defaultRate: {
          title:'违约比例',
          value:'25%',
          isLockInput:true,
          isUnlockInput:false,
          alarm:'风险警报',
          alarmText:'违约比例操作正常值'
        },
        qualityStandard: {
          title:'质量标准',
          value:[
            '标准1',
            '标准2',
            '标准3',
          ],
        },
        typeOfPayment:{
          title:'支付类型',
          value:[
            '支付宝',
            '微信',
            '云闪付',
          ],
        },
        typeOfPayment1:{
          title:'支付类型1',
          value:[
            '支付宝1',
            '微信1',
            '云闪付1',
          ],
        },
      },
      main:{
        firstParty:{
          title:'甲方',
          value:[
            '靠窗网络科技有限公司',
          ],
        },
        secondParty:{
          title:'乙方',
          value:[
            '靠墙网络科技有限公司',
            '靠门网络科技有限公司',
          ],
        },
        thirdParty:{
          title:'丙方',
          value:[
            '靠边网络科技有限公司',
          ],
        }
      }
    }
  },
  computed:{
    timeCost(){
      let comeTime = this.form.comeTime.value,
          offTime = this.form.offTime.value
      //时间差的毫秒数
      let date3 = new Date(offTime).getTime() - new Date(comeTime).getTime();
      //计算出相差天数
      let days = Math.floor(date3/(24*3600*1000))
      //计算出相差年数
      let years = Math.floor(days/365)
      return years + '年'
    }
  },
}
</script>

<style scoped lang="scss">
.form-box{
  margin-left: 40px;
  padding: 50px 0 50px 50px;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  h5{
    padding: 3px 0;
    text-align: left;
    text-indent: 1em;
    border-radius: 5px;
    color: #53A4FB;
    font-weight: 700;
    background: linear-gradient(90deg, #F1F3F4, #fff, #fff);
  }
  form,.contract-main{
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 10px;
    &>div{
      width: calc(100% / 3);
      margin:30px 0;
      padding-right: 8%;
      box-sizing: border-box;
    }
  }
  .contract-main{
    width: 96%;
    margin-left: -30px;
    &>div{
      margin:0;
      padding-right: 0;
    }
  }
}
</style>
