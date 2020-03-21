const getters = {
  getCartList(state){
    return state.shopCartList
  },
  getCartListLength(state){
    return state.shopCartList.length
  }
}

export default getters