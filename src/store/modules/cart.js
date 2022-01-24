const state = {
  cartList: {},
};

const mutations = {
  SET_CARTLISTAdd: (state, data) => {
    let count = state?.cartList?.[data.shopId]?.[data.productId]?.count;
    if (!count) {
      if (!state.cartList[data.shopId]) {
        state.cartList[data.shopId] = {};
        state.cartList[data.shopId].selectAll = true;
      }
      if (!state.cartList[data.shopId][data.productId]) {
        state.cartList[data.shopId][data.productId] = data.item;
      }
      if (!state.cartList[data.shopId][data.productId].count) {
        state.cartList[data.shopId][data.productId].count = 0;
      }
      if (!state.cartList[data.shopId][data.productId].price) {
        state.cartList[data.shopId][data.productId].price = data.price;
      }
      if (!state.cartList[data.shopId][data.productId].checked) {
        state.cartList[data.shopId][data.productId].checked = true;
      }
    }
    state.cartList[data.shopId][data.productId].count = state.cartList[data.shopId][data.productId].count + 1;
  },
  SET_CARTLISTREDUCE: (state, data) => {
    let count = state?.cartList?.[data.shopId]?.[data.productId]?.count;
    if (!count) {
      if (!state.cartList[data.shopId]) {
        state.cartList[data.shopId] = {};
      }
      if (!state.cartList[data.shopId][data.productId]) {
        state.cartList[data.shopId][data.productId] = data.item;
      }
      if (!state.cartList[data.shopId][data.productId].count) {
        state.cartList[data.shopId][data.productId].count = 0;
      }
      if (!state.cartList[data.shopId][data.productId].price) {
        state.cartList[data.shopId][data.productId].price = data.price;
      }
      if (!state.cartList[data.shopId][data.productId].checked) {
        state.cartList[data.shopId][data.productId].checked = true;
      }
    } else {
      state.cartList[data.shopId][data.productId].count = state.cartList[data.shopId][data.productId].count - 1;
    }
  },
  // 是否选中勾选
  SET_CARTCHECKED: (state, data) => {
    let checked = state.cartList[data.shopId][data.productId].checked;
    state.cartList[data.shopId][data.productId].checked = !checked;
    if (!state.cartList[data.shopId][data.productId].checked) {
      state.cartList[data.shopId].selectAll = false;
    } else {
      let status = true;
      for (let key in state.cartList[data.shopId]) {
        let item = state.cartList[data.shopId][key];
        if (item.id) {
          if (!item.checked) {
            status = false;
          }
        }
      }
      if (status) {
        state.cartList[data.shopId].selectAll = true;
      }
    }
  },
  // 购物车全选/取消
  SET_CARTALLSELECT: (state, data) => {
    const cart = state.cartList?.[data.shopId];
    // 取消全选
    if (cart.selectAll) {
      if (cart) {
        for (let key in cart) {
          if (cart[key].checked && cart[key].id) {
            cart[key].checked = false;
          }
        }
      }
      cart.selectAll = false;
    } else {
      // 全选
      if (cart) {
        for (let key in cart) {
          if (!cart[key].checked && cart[key].id) {
            cart[key].checked = true;
          }
        }
      }
      cart.selectAll = true;
    }
  },

  // 清空购物车
  SET_CLEARCART: (state, data) => {
    let cart = state.cartList?.[data.shopId];
    if (cart) {
      for (let key in cart) {
        if (cart[key].id) {
          cart[key].count = 0;
        }
      }
    }
  },
};

const actions = {
  // 购物车新增商品
  ChangeCartListAdd(context, data) {
    context.commit("SET_CARTLISTAdd", data);
  },
  // 购物车减少商品
  ChangeCartListReduce(context, data) {
    context.commit("SET_CARTLISTREDUCE", data);
  },
  //购物车商品勾选
  CartChecked(context, data) {
    context.commit("SET_CARTCHECKED", data);
  },
  // 购物车全选/取消
  CartAllSelect(context, data) {
    context.commit("SET_CARTALLSELECT", data);
  },
  // 清空购物车
  ClearCart(context, data) {
    context.commit("SET_CLEARCART", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
