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
  // 取消选中
  SET_CARTCHECKED: (state, data) => {
    let checked = state.cartList[data.shopId][data.productId].checked;
    state.cartList[data.shopId][data.productId].checked = !checked;
    if (!checked) {
      state.cartList[data.shopId].selectAll = false;
    } else {
      let status = true;
      for (let key in state.cartList[data.shopId]) {
        let item = state.cartList[data.shopId][key];
        if (!item.checked) {
          status = false;
        }
      }
      if (status) {
        state.cartList[data.shopId].selectAll = true;
      }
    }
  },
  /* SET_CHANGEALLPRICE: (state, data) => {
    state.allPrice = data.allPrice;
    state.total = data.total;
  }, */
};

const actions = {
  /* ChangeAllPrice(context, data) {
    var allPrice = 0;
    var total = 0;
    for (let key in state.cartList) {
      let shopItem = state.cartList[key];
      if (shopItem) {
        for (let product in shopItem) {
          let count = shopItem[product]?.count;
          let price = shopItem[product]?.price;
          if (count) {
            allPrice = allPrice + price * count;
            total = total + count;
          }
        }
      }
    }
    context.commit("SET_CHANGEALLPRICE", { allPrice: allPrice, total: total });
  }, */
  ChangeCartListAdd(context, data) {
    context.commit("SET_CARTLISTAdd", data);
  },
  ChangeCartListReduce(context, data) {
    context.commit("SET_CARTLISTREDUCE", data);
  },
  CartChecked(context, data) {
    context.commit("SET_CARTCHECKED", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
