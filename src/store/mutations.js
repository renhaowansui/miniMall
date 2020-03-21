const mutations = {
  addProduct(state, product){
    product.count = 1
    product.checked = true
    state.shopCartList.push(product)
  },
  addCount(state, product){
    product.count++
  }
}

export default mutations

