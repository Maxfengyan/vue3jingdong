const getters = {
  cartList: (state) => state.cart.cartList,
  allPrice: (state) => state.cart.allPrice,
  total: (state) => state.cart.total,
  activeIndex: (state) => state.docker.activeIndex,
};

export default getters;
