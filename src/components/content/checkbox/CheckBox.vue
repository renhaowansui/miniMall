<template>
  <div class="checkbox" :class="{checked: isChecked}" >
    <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .checkbox{
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid gainsboro;
  }
  .checkbox img{
    display: block;
  }
  .checked{
    border: none;
    background: var(--color-tint);
  }
</style>