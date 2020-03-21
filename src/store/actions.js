const actions = {
  pushShopCart(context, product){
    return new Promise((resolve, reject) => {
      product.checked = true
      // 判断购物车是否存在该商品
      const isHave = context.state.shopCartList.find(item => { return item.iid === product.iid })
      if(isHave){
        context.commit('addCount', isHave)
        resolve("商品数量增加")
      }else{
        context.commit('addProduct', product)
        resolve("已添加购物车")
      }
    })
  }
}

export default actions