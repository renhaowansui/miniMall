<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #tabbar{
    height: 49px;
    padding-top: 4px;
    box-shadow: 0 -2px 0 rgba(0, 0, 0, .3);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center
  }
</style>