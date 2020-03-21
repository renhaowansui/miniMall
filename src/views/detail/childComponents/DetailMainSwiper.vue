<template>
  <swiper class="detail-swiper" v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a href="">
        <img :src="item" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper';
import SwiperItem from 'components/common/swiper/SwiperItem';

export default {
  props:{
    banners: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
  .detail-swiper{
    height: 300px;
  }
</style>