<template>
  <swiper v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load='swiperImgLoad'>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper';
  import SwiperItem from 'components/common/swiper/SwiperItem';

	export default {
		name: "HomeSwiper",
    components: {
		  Swiper,
      SwiperItem
    },
    props: {
		  banners: {
		    type: Array,
        default: []
      }
    },
    methods: {
		  swiperImgLoad(){
        this.$emit('swiperImgLoad')
      }
    }
	}
</script>

<style scoped>

</style>
