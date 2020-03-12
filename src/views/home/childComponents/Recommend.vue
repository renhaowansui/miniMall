<template>
    <div id="home-Recommend">
      <a class="recommend" v-for="(item, index) in recommends" :key="index" :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>
  #home-Recommend{
    display: flex;
    padding: 20px 0 30px;
    font-size: 12px;
    text-align: center;
    border-bottom: 10px solid #eee;
  }
  .recommend{
    flex: 1;
  }
  .recommend img{
    width: 65px;
    height: 65px;
  }
</style>