<template>
  <div class="home">
    <nav-bar class="homeNavbar">
      <p slot="navbar-center">购物街</p>
    </nav-bar>
    <tab-control ref="tabControlEl2" class="HomeTabControl" 
                   :titles="['新品', '流行', '热卖']" 
                   @tabControlClick="tabControlClick"
                   v-show="isTabControlTop" />
    <scroll class="content" ref="scroll" 
            :isProbeType='3' :isClick='true'
            @getScrollPos='getScrollPos'
            :isPullUpload = 'true' 
            @pullingUp='loadMoreGoods'>
      <main-swiper class="HomeSwiper" :banners="banners" 
                   @swiperImgLoad='getTabControlPosY' />
      <recommend :recommends="recommends" />
      <feature />
      <tab-control ref="tabControlEl1" class="HomeTabControl" 
                   :titles="['新品', '流行', '热卖']" 
                   @tabControlClick="tabControlClick" />
      <goods-list :goods="getGoodType" />
    </scroll>
    <back-top @click.native="BackTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 加载首页各组件
import NavBar from 'components/common/navbar/NavBar';
import tabControl from 'components/content/tabControl/tabControl';
import GoodsList from 'components/content/goodsList/GoodsList';
import Scroll from 'components/common/scroll/Scroll'

import MainSwiper from './childComponents/MainSwiper';
import Recommend from './childComponents/Recommend';
import Feature from './childComponents/Feature'

// 加载封装请求文件     
import {getHomeMultData, getHomeGoods} from 'network/home.js';
// 加载公用方法
import {imgLoadListener, backTop} from '@/common/mixins.js';

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
      count: 1,
      tabControlPosY: 0,
      isTabControlTop: false,
      positionY: 0,
    }
  },
  mixins: [imgLoadListener ,backTop],
  computed: {
    getGoodType(){
      return this.goods[this.goodsType].list
    }
  },
  created() {
    this.getMultData()
    this.getGoodsData('new')
    this.getGoodsData('pop')
    this.getGoodsData('sell')
  },
  //  使用keep-alive缓存才能使用activated函数
  activated() {
    this.$refs.scroll.scrollRefresh()
    this.$refs.scroll.scrollTo(0, this.positionY, 0)
  },
  deactivated() {
    // 切换其他组件记录这个页面位置
    this.positionY = this.$refs.scroll.getScrollPosY()
    // 取消这个组件图片加载监听
    this.$bus.$off('goodImgLoad', this.imgLoadListener)
  },
  methods: {
    /*
    * 网络请求数据
    */
    // 获取首页各组件数据
    getMultData(){
      getHomeMultData().then(res => {
        this.banners = res.data.banner.list;
        console.log("加载了");
        
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
      this.$refs.tabControlEl1.currentIndex = index
      this.$refs.tabControlEl2.currentIndex = index
    },
    //  获取滚动位置业务操作
    getScrollPos(position){
      //  判断返回顶部按钮显示属性
      this.judgeIsShowBackTop(position)
      //  判断tabControl是否吸顶显示属性
      this.isTabControlTop = -position.y > this.tabControlPosY
    },
    //  获取更多商品信息
    loadMoreGoods(){
      this.getGoodsData(this.goodsType)
      this.$refs.scroll.finishPullUp()
    },
    //  轮播图加载后执行函数获取TabControlPosY位置
    getTabControlPosY(){
      this.tabControlPosY = this.$refs.tabControlEl1.$el.offsetTop
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
  /* .HomeSwiper{
    margin-top: 44px;
  } */
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
  .fixed{
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
  }
</style>
