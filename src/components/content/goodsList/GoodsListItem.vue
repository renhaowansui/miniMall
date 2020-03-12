<template>
  <div id="goods-List-item">
    <a :href="good.link">
      <img :src="good.show.img" alt="">
    </a>
    <div class="itemInfo">
      <p class="ellipsis">{{good.props[0]}}</p>
      <span class="price">{{good.price}}</span>
      <span class="cfav">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style>
  #goods-List-item{
    width: 46%;
  }
  #goods-List-item img{
    width: 100%;
    border-radius: 5px;
  }
  .itemInfo{
    padding: 5px 0;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price{
    color: var(--color-high-text);
    margin-right: 18px;
  }
  .cfav{
    position: relative;
  }
  .cfav::before{
    position: absolute;
    left: -16px;
    top: -1px;
    content: "";
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>