<template>
  <div class="cartList">
    <cart-list-item  v-for="(item, index) in cartList" 
                    :key="index" :product='item' :index='index+1' />
  </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  props: {
    cartList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style scoped>
</style>