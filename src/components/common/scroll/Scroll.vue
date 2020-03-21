<template>
  <div ref="wrapper">
    <div ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    isProbeType: {
      type: Number,
      default: 0
    },
    isClick: {
      type: Boolean,
      default: false
    },
    isPullUpload: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll: null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.isProbeType,
      click: this.isClick,
      pullUpLoad: this.isPullUpload
    })
    // 监听滚动位置
    this.scroll.on('scroll', position => {
      this.$emit('getScrollPos', position)
    })
    // 监听滚动上拉
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    getScrollPosY(){
      return  this.scroll.y
    },
    scrollTo(x, y, time=300){
      this.scroll && this.scroll.scrollTo(x,y, time)
    },
    finishPullUp(){
      // 上拉回调完成，则可再次上拉回调，不然只能执行一次上拉     
      this.scroll && this.scroll.finishPullUp()
    },
    scrollRefresh(){
      console.log("scrollRefresh");
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style>

</style>