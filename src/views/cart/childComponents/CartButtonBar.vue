<template>
  <div class="bottonBar">
    <div class="allChecked">
      <check-box class="checkbox" 
                 :is-checked="isAllChecked"
                 @click.native="clickAllChecked" 
                 v-model="isAllChecked" />
      <span>全选</span>
    </div>
    <div class="totalPrice">
      <p>合计: ￥{{getTotalPrice}}</p>
    </div>
    <div class="buy" @click="clickBuy">
      购买({{getTotalNum}})
    </div>
  </div>
</template>

<script>
import CheckBox from 'components/content/checkbox/CheckBox'
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCartList']),

    getTotalPrice(){
      let cartList = this.getCartList
      if(!cartList.length) return
      return cartList.filter(item => item.checked)
      .reduce((prevTotal, item) => {
        return prevTotal + (item.count * item.lowNowPrice)
      }, 0).toFixed(2)
    },
    getTotalNum(){
      let cartList = this.getCartList
      if(!cartList.length) return 0
      return cartList.filter(item => item.checked).length
    },
    isAllChecked: function(){
      // 判断是否有商品
      if(!this.getCartList.length) return false
      // 判断是否存在未勾选商品
      return !this.getCartList.find(item => item.checked === false)
    }
  },
  components: {
    CheckBox
  },
  methods: {
    clickAllChecked(){ 
      if(this.isAllChecked){
        this.getCartList.forEach(item => item.checked = false)
      }else{
        this.getCartList.forEach(item => item.checked = true)
      }
    },
    clickBuy(){
      if(!this.getTotalNum){
        this.$toast.show("请选择商品", 2000)
      }
    }
  }
}
</script>

<style scoped>
  .bottonBar{
    position: relative;
    display: flex;
    font-size: 13px;
    height: 40px;
    background: #fff;
    justify-content: space-between;
  }
  .bottonBar>div{
    height: 100%;
    line-height: 40px;
  }
  .allChecked{
    display: flex;
    width: 80px;
    padding-left: 10px;
    align-items: center;
  }
  .allChecked span{
    margin-left: 5px;
  }
  .totalPrice{
    flex: 1;
    text-align: right;
  }
  .buy{
    color: #fff;
    width: 80px;
    text-align: center;
    background: var(--color-tint);
  }
</style>