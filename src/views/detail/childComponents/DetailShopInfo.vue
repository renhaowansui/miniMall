<template>
  <div class="shopInfo">
    <div class="title">
      <img :src="ShopData.logo" alt="">
      <h4>{{ShopData.name}}</h4>
    </div>
    <div class="baseInfo">
      <div class="info-left">
        <div class="sells">
          <p>{{ShopData.sells}}</p>
          <p>总销量</p>
        </div>
        <div class="goodNum">
          <p>{{ShopData.goodNum}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="info-right">
        <div class="score" v-for="(item, index) in ShopData.score" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span class="high" v-if="item.isBetter">高</span>
          <span class="low" v-else>低</span>
        </div>
      </div>
    </div>
    <div class="butDiv">
      <a :href="ShopData.shopUrl">
        <div class="but">进店逛逛</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    ShopData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
  .shopInfo{
    color: black;
    font-size: 13px;
    border-bottom: 2px solid gainsboro;
  }
  .title{
    padding: 10px 0 10px 15px;
  }
  .title img{
    float: left;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .title h4{
    font-size: 15px;
    line-height: 40px;
  }
  .baseInfo{
    display: flex;
    justify-content: space-around;
    line-height: 20px;
    align-items: center;
  }
  .info-left{
    border-right: 2px solid gainsboro;
    box-sizing: content-box;
    padding-right: 10px;
    text-align: center;
  }
  .info-left>div{
    display: inline-block;
    padding-right: 20px;
  }
  .score span:nth-of-type(2){
    margin: 0 4px;
    display: inline-block;
    width: 25px;
  }
  .high{
    color: oldlace;
    background: red;
  }
  .low{
    color: oldlace;
    background: green;
  }
  .butDiv{
    width: 100%;
  }
  .but{
    margin: 15px auto;
    width: 120px;
    height: 25px;
    background: gainsboro;
    line-height: 25px;
    text-align: center;
    border-radius: 10px;
  }
</style>