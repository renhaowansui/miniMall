<template>
  <div id="goods-List-item" @click="goodsClick">
    <img v-lazy="showImages" alt="" @load="goodImgLoad">
    <div class="itemInfo">
      <p class="ellipsis">{{good.title}}</p>
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
  },
  computed: {
    showImages(){
      return this.good.image || this.good.show.img
    }
  },
  methods: {
    goodImgLoad(){
      this.$bus.$emit('goodImgLoad')
    },
    goodsClick(){
      // 通过动态路由更换地址路径
      // this.$router.push('detail', this.good.iid)
      // 通过query更换地址路径  
      this.$router.push({
        path: 'detail',
        query: {
          iid: this.good.item_id || this.good.iid
        }
      })
    }
  },
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