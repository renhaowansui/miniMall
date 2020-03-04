<template>
  <div id="tabbatitem" :style="getFontColor" @click='itemClick'>
    <slot v-if='!isActive' name='tabbar-icon'></slot>
    <slot v-else name='tabbar-icon-active'></slot>
    <slot name='tabbar-font'></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeFontColor: {
      type: String,
      default: '#ff5777' 
    }
  },
  data(){
    return {
      // isActive: false
    }
  },
  computed: {
    isActive(){
      // 重点！$route是每日激活的路由对象，所以可以实现动态
      return this.$route.path.indexOf(this.path) !== -1
    },
    getFontColor(){
      return  this.isActive? {'color': this.activeFontColor} : {}
    }
  },
  methods: {
    itemClick(){
      if(this.$route.path !== this.path){
        // 修改路由路径
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style>
  #tabbatitem{
    flex: 1;
    font-size: 12px
  }
  #tabbatitem img{
    width: 23px;
    height: 23px;
  }
  /* .active{
    color: #ff5777;
  } */
</style>