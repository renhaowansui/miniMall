<template>
  <div class="comment" v-if="Object.keys(commentData).length">
    <div class="title clear-fix">
      <div class="title-left left">用户评价</div>
      <div class="title-right right"><a href="">更多</a></div>
    </div>
    <div class="content">
      <div class="user">
        <img :src="commentData.user.avatar" alt="">
        <span>{{commentData.user.uname}}</span>
      </div>
      <div class="user-comment">
        <p>{{commentData.content}}</p>
        <div class="commit">
          <span>{{commentData.created | format}} </span>
          <span>{{commentData.style}}</span>
        </div>
        <div class="commitImg" v-if="commentData.images">
          <img v-for="(item, index) in commentData.images" :key="index" :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  引入调整时间格式文件
import {formatDate} from "@/common/utils";

export default {
  props: {
    commentData: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    format(value){
      const date = new Date(value * 1000)
      return formatDate(date, "yyyy-MM-dd")
    }
  }
}
</script>

<style scoped>
  .comment{
    color: black;
    padding: 10px 15px;
    border-bottom: 2px solid gainsboro;
  }
  .title{
    padding-bottom: 10px;
    border-bottom: 2px solid gainsboro;
  }
  .title-left{
    font-size: 15px;
  }
  .title-right{
    font-size: 13px;
  }
  .user{
    line-height: 40px;
    padding: 10px 0;
    font-size: 13px;
  }
  .user img{
    float: left;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .user-comment{
    font-size: 12px;
  }
  .commit{
    padding: 10px 0;
    color: #666;
  }
  .commitImg img{
    width: 50px;
    height: 50px;
    margin-right: 3px;
  }
</style>