const state = {
  cartList: {},
  allPrice: 0,
};

const mutations = {
  SET_CARTLISTAdd: (state, data) => {
    let count = state?.cartList?.[data.shopId]?.[data.productId]?.count;
    if (!count) {
      if (!state.cartList[data.shopId]) {
        state.cartList[data.shopId] = {};
      }
      if (!state.cartList[data.shopId][data.productId]) {
        state.cartList[data.shopId][data.productId] = {};
      }
      if (!state.cartList[data.shopId][data.productId].count) {
        state.cartList[data.shopId][data.productId].count = 0;
      }
      if (!state.cartList[data.shopId][data.productId].price) {
        state.cartList[data.shopId][data.productId].price = data.price;
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
        state.cartList[data.shopId][data.productId] = {};
      }
      if (!state.cartList[data.shopId][data.productId].count) {
        state.cartList[data.shopId][data.productId].count = 0;
      }
      if (!state.cartList[data.shopId][data.productId].price) {
        state.cartList[data.shopId][data.productId].price = data.price;
      }
    } else {
      state.cartList[data.shopId][data.productId].count = state.cartList[data.shopId][data.productId].count - 1;
    }
  },
  SET_CHANGEALLPRICE: (state, data) => {
    state.allPrice = data;
  },
};

const actions = {
  ChangeAllPrice(context, data) {
    var allPrice = 0;
    for (let key in state.cartList) {
      let shopItem = state.cartList[key];
      if (shopItem) {
        for (let product in shopItem) {
          let count = shopItem[product]?.count;
          let price = shopItem[product]?.price;
          if (count) {
            allPrice = allPrice + price * count;
          }
        }
      }
    }
    context.commit("SET_CHANGEALLPRICE", allPrice);
  },
  ChangeCartListAdd(context, data) {
    context.commit("SET_CARTLISTAdd", data);
    actions.ChangeAllPrice(context);
  },
  ChangeCartListReduce(context, data) {
    context.commit("SET_CARTLISTREDUCE", data);
    actions.ChangeAllPrice(context);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
