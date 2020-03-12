<template>
  <div class="home">
    <nav-bar class="homeNavbar">
      <p slot="navbar-center">购物街</p>
    </nav-bar>
    <scroll class="content" ref="scroll" 
            :isProbeType='3' :isClick='true'
            :isPullUpload = 'true' 
            @getScrollPos='getScrollPos'
            @pullingUp='loadMoreGoods'>
      <main-swiper class="HomeSwiper" :banners="banners" />
      <recommend :recommends="recommends" />
      <feature />
      <tab-control class="HomeTabControl" 
                   :titles="['新品', '流行', '热卖']" 
                   @tabControlClick="tabControlClick" />
      <goods-list :goods="getGoodType" />
    </scroll>
    <back-top @click.native="BackTopClick" v-show="isShwoBackTop" />
  </div>
</template>

<script>
// 加载首页各组件
import NavBar from 'components/common/navbar/NavBar';
import tabControl from 'components/content/tabControl/tabControl';
import GoodsList from 'components/content/goodsList/GoodsList';
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import MainSwiper from './childComponents/MainSwiper';
import Recommend from './childComponents/Recommend';
import Feature from './childComponents/Feature'

// 加载封装请求文件     
import {getHomeMultData, getHomeGoods} from 'network/home.js';

export default {
  name: 'Home',
  components: {
    NavBar,
    MainSwiper,
    Recommend,
    Feature,
    tabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'new': {page: 1, list: []},
        'pop': {page: 1, list: []},
        'sell': {page: 1, list: []}
      },
      goodsType: 'new',
      isShwoBackTop: false
    }
  },
  computed: {
    getGoodType(){
      return this.goods[this.goodsType].list
    }
  },
  created(){
    this.getMultData()
    this.getGoodsData('new')
    this.getGoodsData('pop')
    this.getGoodsData('sell')
  },
  methods: {
    /*
    * 网络请求数据
    */
    // 获取首页各组件数据
    getMultData(){
      getHomeMultData().then(res => {
        this.banners = res.data.banner.list;
        this.dKeywords = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommends = res.data.recommend.list;
      })
    },
    //  获取首页商品数据
    getGoodsData(type){
      getHomeGoods(type, this.goods[type].page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })
    },
    /*
    * 业务处理方法
    */
    //  获取商品tab点击下标
    tabControlClick(index){
      switch (index) {
        case 0:
          this.goodsType = 'new'
          break;
        case 1:
          this.goodsType = 'pop'
          break;
        case 2:
          this.goodsType = 'sell'
          break;
      }
    },
    //  点击返回顶部按钮
    BackTopClick(){
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //  获取滚动位置业务操作
    getScrollPos(position){
      this.isShwoBackTop = -position.y > 1000
    },
    //  获取更多商品信息
    loadMoreGoods(){
      this.getGoodsData(this.goodsType)
      this.$refs.scroll.finishPullUp
    }
  }
}
</script>
<style scoped>
  .home{
    position: relative;
    height: 100vh;
  }
  .homeNavbar{
    color: #fff;
    background: var(--color-tint);
  }
  .HomeSwiper{
    /* margin-top: 44px; */
  }
  .HomeTabControl{
    position: sticky;
    top: 43px;
  }
  .content{
    position: absolute;
    right: 0;
    left: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
