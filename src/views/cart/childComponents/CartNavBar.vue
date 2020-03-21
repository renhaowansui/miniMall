<template>
  <nav-bar class="navBar">
    <div slot="navbar-center">
      购物车({{cartLength}})
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  props: {
    cartLength: {
      type: Number,
      default: 0
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .navBar{
    color: white;
    background: var(--color-tint);
  }
</style>