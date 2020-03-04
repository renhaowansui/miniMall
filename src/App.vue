<template>
  <div id="app">
    <router-view/>
    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
import TabBarMain from 'components/content/mainTaBar/MainTabBar'

export default {
  name: 'app',
  components: {
    TabBarMain
  }
}
</script>
<style>
@import url('assets/css/base.css');
</style>
