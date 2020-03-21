<template>
  <div class="butBar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart(){
      this.$emit("DetailAddToCart", this.addToCart)
    }
  }
}
</script>

<style>
  .butBar{
    position: fixed;
    height: 49px;
    width: 100%;
    background: #fff;
    bottom: 0;
    z-index: 9999;
    display: flex;
    text-align: center;
    color: black;
  }
  .bar-item{
    display: flex;
    width: 50%;
  }
  .bar-item>div{
    flex: 1;
  }
  .bar-left{
    font-size: 12px;
  }
  .bar-left i{
    display: block;
    margin: 6px auto 1px;
    width: 23px;
    height: 23px;
    background: url('~assets/img/detail/detail_bottom.png') 0 1px/100%;
  }
  .bar-left .service{
    background-position: 0 -56px;
  }
  .bar-left .shop{
    background-position: 0 -103px;
  }
  .bar-right{
    font-size: 13px;
    line-height: 49px;
  }
  .bar-right .cart{
    background: gold;
  }
  .bar-right .buy{
    color: #fff;
    background: var(--color-high-text);
  }
</style>