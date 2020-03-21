import {Instance} from './axios';

//  获取商品信息
export function getGoodDetail(iid){
  return Instance({
    url: '/detail',
    params: {
      iid
    }
  })
}
//  获取推荐部分商品信息
export function getRecommends(){
  return Instance({
    url: 'recommend'
  })
}
//  定义商品类属性数据
export class Good{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.lowNowPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}
//  定义店铺属性数据
export class Shop{
  constructor(shopInfo){
    this.name = shopInfo.name
    this.goodNum = shopInfo.cGoods
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.logo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl
  }
}
//  定义商品参数数据
export class Params{
  constructor(info, rule){
    this.set = info.set
    this.tables = rule.tables
  }
}