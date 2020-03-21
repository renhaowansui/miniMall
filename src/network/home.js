import {Instance} from './axios';

// 请求首页数据方法
export function getHomeMultData(){
  return Instance({url :'/home/multidata'})
}
// 请求首页商品数据方法
export function getHomeGoods(type, page){
  return Instance({
    url :'/home/data',
    params: {
      type,
      page
    }
  })
}