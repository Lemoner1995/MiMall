/*
* 商城Vuex-mutations
*/
export default {
  saveUserName (state, username) {
    state.username = username
  },
  saveCartCount (state, cartcount) {
    state.cartCount = cartcount
  }
}
