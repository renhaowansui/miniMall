<template>
  <div id="home-swiper" >
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator" v-if="showDot && slideCount>1">
      <slot name="indicator">
        <div class="dot" :class="{active: currentIndex-1 == index}" v-for="(item, index) in slideCount" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    duration: {
      type: Number,
      default: 800
    },
    showDot: {
      type: Boolean,
      default: true
    },
    touchDistanceScaleX: {
      type: Number,
      default: 0.25
    }
  },
  data(){
    return{
      slideCount: 0,
      slideStyle: {},
      slideWidth: 0,
      totalWidth: 0,
      currentIndex: 1,
      isScrolling: false,
    }
  },
  components: {
    
  },
  computed: {

  },
  created: function(){
    
  },
  mounted: function(){
    setTimeout(() => {
      this.initHandle()
      this.ScrollStart()
    }, 100)
  },
  methods: {
    initHandle(){
      // 获取要操作的DOM元素
      let swiperEl = document.querySelector('.swiper');
      let slideEls = swiperEl.getElementsByClassName('slide');

      this.slideCount = slideEls.length;
      // 轮播图前后多放一张重复图片，避免轮播不流畅
      if(this.slideCount > 1){
        let cloneFirstSlide = slideEls[0].cloneNode(true)
        let cloneLastSlide = slideEls[slideEls.length - 1].cloneNode(true)
        swiperEl.appendChild(cloneFirstSlide)
        swiperEl.insertBefore(cloneLastSlide, slideEls[0])
        this.slideWidth = slideEls[0].offsetWidth
        this.totalWidth = slideEls.length * this.slideWidth
        // 处理轮播样式
        this.slideStyle = swiperEl.style
      }
      // 重置起始位置
      this.ScrollPosition(-this.slideWidth)
    },
    ScrollPosition(position){
      this.slideStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.slideStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.slideStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },
    ScrollComplete(currentposition){
      // 滚动开始
      this.isScrolling = true
      this.ScrollPosition(currentposition)
      this.slideStyle.transition = 'all ' + this.duration + 'ms'
      // 检查滚动位置   
      this.ScrollCheck()
      // 滚动完成
      this.isScrolling = false
    },
    ScrollStart(){
      console.log("开始了");
      
      window.timer = window.setInterval(() => {
        this.currentIndex++
        this.ScrollComplete(-this.currentIndex * this.slideWidth)
      }, this.interval);
    },
    ScrollCheck(){
      window.setTimeout(() => {
        // 轮播图至最后一张处理
        if(this.currentIndex > this.slideCount){
          this.currentIndex = 1
          this.ScrollComplete(-this.slideWidth)
        }
        if(this.currentIndex < 1){
          this.currentIndex = this.slideCount 
          this.ScrollComplete(-this.slideWidth * this.currentIndex)
        }
        this.slideStyle.transition = '0ms'      
      },this.duration)
    },
    ScrollStop(){
      window.clearInterval(window.timer);
    },
    touchStart(e){
      if(this.isScrolling) return
      this.ScrollStop()
      this.startX = e.touches[0].pageX
    },
    touchMove(e){
      this.endX = e.touches[0].pageX
      this.distanceX = this.endX - this.startX
      this.distanceScaleX = this.distanceX / this.slideWidth
      // 获取轮播组偏移的X坐标位置
      let currentPosition = -this.slideWidth * this.currentIndex + this.distanceX
      this.ScrollPosition(currentPosition)
    },
    touchEnd(e){
      if(Math.abs(this.distanceScaleX) > this.touchDistanceScaleX){
        if(this.distanceScaleX > 0){
          this.prevSlide()
        }else{
          this.nextSlide()
        }
      }
      this.ScrollComplete(-this.currentIndex * this.slideWidth)
      this.ScrollStart()
    },
    prevSlide(){      
      this.currentIndex--
    },
    nextSlide(){
      this.currentIndex++
    }
  },
}
</script>

<style scoped>
  #home-swiper{
    position: relative;
    overflow: hidden;
  }
  .swiper{
    display: flex;
    position: relative;
  }
  .indicator{
    position: absolute;
    width: 100px;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
  }
  .indicator .dot{
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: rgba(0, 0, 0, .3);
  }
  .indicator .active{
    background: var(--color-high-text);
  }
</style>