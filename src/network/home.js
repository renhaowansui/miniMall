import {HomeInstance} from './axios';

// 请求首页数据方法
export function getHomeMultData(){
  return HomeInstance({url :'/home/multidata'})
}
// 请求首页商品数据方法
export function getHomeGoods(type, page){
  return HomeInstance({
    url :'/home/data',
    params: {
      type,
      page
    }
  })
}