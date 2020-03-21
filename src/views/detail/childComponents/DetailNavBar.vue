<template>
    <nav-bar class="navbar">
      <div class="navbar-left" slot="navbar-left" @click="clickBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="navbar-center" slot="navbar-center">
        <div v-for="(item, index) in navbarCenter" 
             :key="index" @click="navbarClick(index)"
             :class="{active: currentIndex === index}" >{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
  props: {
    navbarCenter: {
      type: Array,
      defualt(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    clickBack(){
      this.$router.back()
    },
    navbarClick(index){
      console.log(index)
      this.currentIndex = index
      console.log(this.currentIndex);
      this.$emit("topBarClick", this.currentIndex)
    }
  }
}
</script>

<style>
  .navbar{
    background: var(--color-background);
  }
  .navbar-left img{
    width: 25px;
    margin-top: 10px
  }
  .navbar-center{
    display: flex;
    font-size: 13px;
  }
  .navbar-center > div{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
</style>