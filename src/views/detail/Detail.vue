<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" ref="navbar"
                    :navbarCenter="['商品','参数','评论','推荐']"
                    @topBarClick="topBarClick" />
    <detail-scroll class="content" ref="scroll" 
                   :isClick="true" :isProbeType="3"
                   @getScrollPos="getScrollPos">
      <detail-main-swiper class="detail-swiper" :banners='topImg' />
      <detail-goods-base-info :GoodData="GoodData" />
      <detail-shop-info :ShopData="ShopData" />
      <detail-good-info :detailData="DetailData" @detailImgLoad="detailImgLoad" />
      <detail-params-info ref="params" :paramsData="ParamsData" />
      <detail-comment-info ref="comment" :commentData="CommentData" />
      <detail-recommends ref="recommends" :goods="recommentsData" />
    </detail-scroll>
    <back-top @click.native="BackTopClick" v-show="isShowBackTop" />
    <detail-butBar class="detail-but" @DetailAddToCart="detailAddToCart" />
  </div>
</template>

<script>
//  加载页面组件
import DetailNavBar from './childComponents/DetailNavBar';
import DetailMainSwiper from './childComponents/DetailMainSwiper'
import DetailGoodsBaseInfo from './childComponents/DetailGoodBaseinfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailGoodInfo from './childComponents/DetailGoodInfo'
import DetailParamsInfo from './childComponents/DetailParamsInfo'
import DetailCommentInfo from './childComponents/DetailCommentInfo'
import DetailRecommends from 'content/goodsList/GoodsList'
import DetailButBar from './childComponents/DetailButBar'

import DetailScroll from 'components/common/scroll/Scroll'

//  封装请求文件  
import {getGoodDetail, Good, Shop, Params, getRecommends} from 'network/detail';
//  加载公用方法
import {debounce} from '@/common/utils'
import {imgLoadListener, backTop} from '@/common/mixins.js';
import {mapActions} from 'vuex'

export default {
  name: "Detail",
  data(){
    return {
      iid: null,
      topImg: [],
      GoodData: {},
      ShopData: {},
      DetailData: {},
      ParamsData: {},
      CommentData: {},
      recommentsData: [],
      debounceRefresh: null,
      topBarPositionY: [],
      setTopBarPositionY: null,
      currentPositionIndex: 0
    }
  },
  mixins: [imgLoadListener, backTop],
  components: {
    DetailNavBar,
    DetailMainSwiper,
    DetailGoodsBaseInfo,
    DetailShopInfo,
    DetailGoodInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommends,
    DetailScroll,
    DetailButBar
  },
  created(){
    this.iid = this.$route.query.iid
    //  执行请求方法
    this.getDetailData(this.iid)
  },
  destroyed(){
    //  取消这个组件图片加载监听
    this.$bus.$off('goodImgLoad', this.imgLoadListener)
  },
  methods: {
    ...mapActions(['pushShopCart']),
    /*
    *   数据请求方法
    */
    getDetailData(iid){
      getGoodDetail(iid).then(res => {
        console.log(res);
        const data = res.result
        // 获取轮播图片
        this.topImg = data.itemInfo.topImages
        // 获取商品基本信息
        this.GoodData = new Good(data.itemInfo, data.columns, data.shopInfo.services)
        // 获取店铺信息
        this.ShopData = new Shop(data.shopInfo)
        // 获取商品详情信息
        this.DetailData = data.detailInfo
        // 获取商品参数信息
        this.ParamsData = new Params(data.itemParams.info, data.itemParams.rule)
        // 获取商品评价
        if(data.rate.cRate > 0){
          this.CommentData = data.rate.list[0]
        }
      })
      // 获取详情页推荐商品列表
      getRecommends().then(res => {
        this.recommentsData = res.data.list
      })
      // 设置记录组件高度位置
      this.setTopBarPositionY = debounce(() => {
        this.topBarPositionY = []
        this.topBarPositionY.push(0)
        this.topBarPositionY.push(this.$refs.params.$el.offsetTop)
        this.topBarPositionY.push(this.$refs.comment.$el.offsetTop)
        this.topBarPositionY.push(this.$refs.recommends.$el.offsetTop)
        this.topBarPositionY.push(Number.MAX_VALUE)
        console.log(this.topBarPositionY);
      }, 200)
    },
    /*
    *   业务处理方法
    */
    // 头部导航点击
    topBarClick(currentIndex){
      this.$refs.scroll.scrollTo(0, -this.topBarPositionY[currentIndex], 200)
    },
    // 底部操作栏购物车点击
    detailAddToCart(){
      // 创建要加入购物车的商品对象
      const product = {}

      product.iid = this.iid
      product.img = this.topImg[0]
      product.title = this.GoodData.title
      product.desc = this.GoodData.desc
      product.lowNowPrice = this.GoodData.lowNowPrice

      // this.$store.dispatch('pushShopCart', product)
      // 采用vuex辅助函数映射方法
      this.pushShopCart(product).then(res => {
        this.$toast.show(res, 2000)
      })
    },
    // 商品详细图片加载调用
    detailImgLoad(){
      this.debounceRefresh()
      this.setTopBarPositionY()
    },
    // 滚动监听位置
    getScrollPos(position){
      // 记录所需组件位置
      for (let i = 0; i < this.topBarPositionY.length-1; i++) {
        if(i !== this.$refs.navbar.currentIndex && 
            (-position.y >= this.topBarPositionY[i] && 
            -position.y < this.topBarPositionY[i+1])){
          this.$refs.navbar.currentIndex = i
        }
      }
      // 判断返回顶部按钮显示属性
      this.judgeIsShowBackTop(position)
    }
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0);
    },
  }
}
</script>

<style scoped>
  .detail{
    position: relative;
    height: 100vh;
  }
  .content{
    position: absolute;
    right: 0;
    left: 0;
    top: 44px;
    bottom: 49px;
  }
</style>