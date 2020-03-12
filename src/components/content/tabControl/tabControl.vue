<template>
  <div id="tab-Control">
    <div class="tab-Control-item" 
        :class="{active: currentIndex === index}" 
        v-for="(item, index) in titles" :key="index" 
        @click="tabItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabItemClick(index){
      this.currentIndex = index
      this.$emit('tabControlClick', index)
    }
  }
}
</script>

<style>
  #tab-Control{
    display: flex;
    text-align: center;
    height: 35px;
    line-height: 35px;
    font-size: 15px;
    background: #fff;
    z-index: 1;
  }
  .tab-Control-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    padding: 4px;
    border-bottom: 2px solid var(--color-high-text);
  }
</style>