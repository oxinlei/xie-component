<template>
  <div class="box">
    <BoxA :list="first" />
    <BoxA :list="two" />
    <BoxA :list="three" />
    <BoxA :list="four" class="blue"/>
  </div>
</template>

<script>
import BoxA from "../components/BoxA";
export default {
  name: "Box",
  components: {BoxA},
  data(){
    return{
      first:{
        title:'Cooling/Hearsjlfjasupply',
        isTipShow:false,
        tipList:[
          'Add New','Edit','Delete'
        ],
        textList:[
          'Helvetica Neue,Helvetica,',
          'HingFang SC,Hiragino Sans GB,raginoragino  ',
          'Microsoft YaHei,Arial'
        ],
        imgList:[
          {id:'001',url:require('@/assets/tx.jpg')},
          {id:'002',url:require('@/assets/tx1.jpg')},
          {id:'003',url:require('@/assets/tx2.jpg')}
        ],
        otherList: {}
      },
      two:{
        title:'HearsjlfjasupplyCooling',
        isTipShow:false,
        tipList:[
          'Add New','Edit','Delete'
        ],
        textList:[
          'Helvetica Neue,Helvetica,',
          'HingFang SC,Hiragino Sans GB,raginoragino  ',
        ],
        imgList:[
          {id:'003',url:require('@/assets/tx2.jpg')}
        ],
        otherList: {}
      },
      three:{
        title:'HearsjlfjasupplyCooling',
        isTipShow:false,
        tipList:[
          'Add New','Edit','Delete'
        ],
        textList:[
          'Helvetica Neue,Helvetica,',
        ],
        imgList:[
          {id:'003',url:require('@/assets/tx2.jpg')}
        ],
        otherList: {}
      },
      four:{
        minTitle:'minTitle',
        title:'HearsjlfjasupplyCooling',
        isTipShow:false,
        tipList:[
          'Add New','Edit','Delete'
        ],
        imgList:[
          {id:'003',url:require('@/assets/tx2.jpg')}
        ],
        otherList: {
          title: 'VIEW',
          text: 'Electic Heat Lockout'
        }
      }
    }
  },
}
</script>

<style scoped lang="scss">
.box{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px 0 50px 50px;
  &>div{
    margin-right: 50px;
    margin-bottom: 30px;
  }
}
</style>
