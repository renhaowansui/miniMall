<template>
  <div class="cartList-item">
    <div class="check">
      <span>{{index}}</span>
      <check-box class="checkbox" 
                 :isChecked='product.checked'
                 @click.native="checkClick" />
    </div>
    <div class="info">
      <img :src="product.img" alt="">
      <div class="content">
        <h4 class="ellipsis">{{product.title}}</h4>
        <p class="ellipsis">{{product.desc}}</p>
        <div class="price">
          <span>￥{{product.lowNowPrice}}</span>
          <span>* {{product.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from 'components/content/checkbox/CheckBox'

export default {
  props: {
    product: {
      type: Object,
      default(){
        return {}
      }
    },
    index: {
      type: Number,
      default: null
    }
  },
  components: {
    CheckBox
  },
  methods: {
    checkClick(){
      this.product.checked = !this.product.checked

    }
  }
}
</script>

<style scoped>
  .cartList-item{
    display: flex;
    border-bottom: 2px solid gainsboro;
    padding: 10px 0;
  }
  .check{
    width: 10%;
    text-align: center;
  }
  .check span{
    position: absolute;
  }
  .check .checkbox{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
  }
  .info{
    width: 90%;
  }
  .info::after{
    display: block;
    content: '';
    clear: both;
  }
  .info img{
    float: left;
    width: 25%;
    border-radius: 5px;
  }
  .content{
    overflow: hidden;
    padding: 0 10px;
  }
  .content p{
    font-size: 13px;
    line-height: 40px;
  }
  .content .price{
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
  }
  .ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>