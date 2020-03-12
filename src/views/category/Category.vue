<template>
  <div class="ul">
    <ul>
      <button @click="butClick">dianji</button>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>99</li>
      <li>100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data(){
    return{
      Scroll: null
    }
  },
  mounted(){
    let Scroll = new BScroll('.ul', {
      // probeTypew为0或1支持滚动记录，为2记录滚动位置但不记录惯性滚动位置，为3则都记录
      probeType: 3,
      click: false,
      pullUpLoad: true
    })
    Scroll.on('scroll', res => {
      console.log(res)
    })
    Scroll.on('pullingUp', function(){
      console.log("上拉加载");
      setTimeout(res => {
        // 如没有这个语句，则只会回调加载一次
        Scroll.finishPullUp()
      }, 2000)
    })
  },
  methods: {
    butClick(){
      console.log("1");
    }
  }
}
</script>

<style>
  .ul{
    height: 150px;
    background: gray;
    overflow: hidden;
    /* overflow-y: scroll; */
  }
</style>