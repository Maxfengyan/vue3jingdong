import { createStore } from "vuex";
import cart from "./modules/cart";
import getters from "./getters";
export default createStore({
  modules: {
    cart,
  },
  getters,
});
