<template>
  <div class="baseInfo" v-if="Object.keys(GoodData).length>0">
    <div class="title">
      <p>{{GoodData.title}}</p>
      <span class="lowNowPrice">{{GoodData.newPrice}}</span>
      <span class="oldPrice">{{GoodData.oldPrice}}</span>
      <span v-if="GoodData.discountDesc" class="discountDesc">{{GoodData.discountDesc}}</span>
    </div>
    <div class="columns">
      <div class="columns-item" v-for="(item, index) in GoodData.columns" :key="index">
        <span>{{item}}</span>
      </div>
    </div>
    <div class="services">
      <div class="services-item" v-for="(item, index) in GoodData.services" :key="index">
        <span class="icon"><img :src="item.icon" alt=""></span><span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    GoodData:{
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .baseInfo{
    color: black;
    padding: 10px 5px;
  }
  .title{
    font-size: 12px;
  }
  .title p{
    font-size: 16px;
    font-weight: 600;
  }
  .title span{
    line-height: 35px;
  }
  .lowNowPrice{
    font-size: 16px;
    font-weight: 600;
    color: var(--color-high-text)
  }
  .oldPrice{
    color: var(--color-text);
    text-decoration: line-through;
    margin: 0 5px;
  }
  .discountDesc{
    color: white;
    padding: 2px 4px;
    border-radius: 5px;
    background: deeppink;
  }
  .columns{
    display: flex;
    color: var(--color-text);
    font-size: 12px;
    padding-bottom: 5px;
  }
  .columns div{
    flex: 1;
  }
  .columns span{
    padding-bottom: 4px;
    border-bottom: 1px solid gainsboro
  }
  .columns div:nth-of-type(1){
    text-align: left;
  }
  .columns div:nth-of-type(1) span{
    padding-right: 20px;
  }
  .columns div:nth-of-type(2){
    text-align: center;
  }
  .columns div:nth-of-type(2) span{
    padding-left: 10px;
    padding-right: 10px;
  }
  .columns div:nth-of-type(3){
    text-align: right;
  }
  .columns div:nth-of-type(3) span{
    padding-left: 10px;
  }
  .services{
    padding: 10px 0;
    display: flex;
    font-size: 12px;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 2px solid gainsboro;
  }
  .services div{
    width: 30%;
    padding-bottom: 5px;
  }
  .services div:nth-of-type(2){
    text-align: center;
  }
  .services div:nth-of-type(3){
    text-align: right;
  }
  .services div:nth-of-type(5){
    text-align: center;
  }
  .icon img{
    width: 10px;
  }
</style>