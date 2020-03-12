<template>
  <div class="nav">
    <div class="nav-left">
      <slot name="navbar-left"></slot>
    </div>
    <div class="nav-center">
      <slot name="navbar-center"></slot>
    </div>
    <div class="nav-right">
      <slot name="navbar-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.nav{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  z-index: 1;
}
.nav-left{
  width: 60px;
}
.nav-right{
  width: 60px;
}
.nav-center{
  flex: 1;
}
</style>