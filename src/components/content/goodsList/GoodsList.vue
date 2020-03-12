<template>
  <div id="goods-List">
    <goods-list-item v-for="(item, index) in goods" :key="index" :good="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  props: {
    goods: {
      type: Array,
      defualt: []
    }
  },
  components: {
    GoodsListItem
  },
}
</script>

<style>
  #goods-List{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 4px;
    font-size: 12px;
    text-align: center;
  }
</style>