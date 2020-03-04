<template>
  <div id="mainTabBar">
    <tab-bar>
      <tab-bar-item path="/home" activeFontColor="#ff5777">
        <img slot="tabbar-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="tabbar-icon-active" src="~assets/img/tabbar/home_active.svg" >"
        <p slot="tabbar-font">首页</p>
      </tab-bar-item>
      <tab-bar-item path='/category' activeFontColor="#ff5777">
        <img slot="tabbar-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="tabbar-icon-active" src="~assets/img/tabbar/category_active.svg" >"
        <p slot="tabbar-font">分类</p>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeFontColor="#ff5777">
        <img slot="tabbar-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="tabbar-icon-active" src="~assets/img/tabbar/cart_active.svg" >"
        <p slot="tabbar-font">购物车</p>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeFontColor="#ff5777">
        <img slot="tabbar-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="tabbar-icon-active" src="~assets/img/tabbar/profile_active.svg" >"
        <p slot="tabbar-font">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>