import { createStore } from "vuex";
import cart from "./modules/cart";
import docker from "./modules/docker";
import getters from "./getters";
export default createStore({
  modules: {
    cart,
    docker,
  },
  getters,
});
