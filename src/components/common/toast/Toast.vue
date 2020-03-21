<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message, duration=3000){
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  }
}
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 5px 12px;
    border-radius: 5px;
    background: rgba(0, 0, 0, .6);
  }
</style>