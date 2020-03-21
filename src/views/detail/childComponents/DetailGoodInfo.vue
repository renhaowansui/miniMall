<template>
  <div class="detailInfo" v-if="Object.keys(detailData).length">
    <div class="start"></div>
    <div class="desc">{{detailData.desc}}</div>
    <div class="end"></div>
    <div class="detailImage">
      <p>{{detailData.detailImage[0].key}}</p>
      <div class="img">
        <img :src="item" alt="" v-for="(item, index) in detailData.detailImage[0].list"
             :key="index" @load="imageLoad" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailData: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      imgCount: 0
    }
  },
  methods: {
    imageLoad(){
      console.log("detailImgLoad");
      this.$emit("detailImgLoad")
    }
  }
}
</script>

<style>
  .desc, .detailImage p{
    padding: 15px 10px;
    font-size: 14px;
  }
  .img{
    font-size: 0;
  }
  .img img{
    display: block;
    width: 100%;
  }
</style>