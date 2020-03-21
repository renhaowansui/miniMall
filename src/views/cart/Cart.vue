<template>
  <div class="cart">
    <cart-nav-bar :cartLength='getCartListLength' />
    <cart-scroll class="content"
                 :isClick='true'
                 :isProbeType='3'>
      <cart-list :cartList='getCartList' />
    </cart-scroll>
    <cart-button-bar class="buttonBar" />
  </div>
</template>

<script>
import CartNavBar from './childComponents/CartNavBar'
import CartList from './childComponents/CartList'
import CartButtonBar from './childComponents/CartButtonBar'

import CartScroll from 'components/common/scroll/Scroll';
// 导入mapGetters辅助函数，获取vuex的getters方法
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters([
      'getCartList',
      'getCartListLength'
    ])
  },
  components: {
    CartNavBar,
    CartList,
    CartButtonBar,
    CartScroll,
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
    position: relative;
  }
  .content{
    position: relative;
    top: 44px;
    height: calc(100% - 133px);
    overflow: hidden;
  }
  .buttonBar{
    bottom: -44px;
  }
</style>