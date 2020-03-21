import {debounce} from './utils'

export const imgLoadListener = {
  data(){
    return {
      imgLoadListener: null
    }
  },
  mounted(){
    this.debounceRefresh = debounce(this.$refs.scroll.scrollRefresh, 200)
    this.imgLoadListener = res => {
      this.debounceRefresh()
    }
    this.$bus.$on('goodImgLoad', this.imgLoadListener)
  }
}

import BackTop from 'components/content/backTop/BackTop'

export const backTop = {
  data(){
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    //  点击返回顶部按钮
    BackTopClick(){
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    //  判断返回顶部按钮显示属性
    judgeIsShowBackTop(position){
      this.isShowBackTop = -position.y > 1000
    }
  }
}