<template>
  <div class="wrapper">
    <search-component />
    <shop-info :shop-item="state.itemShop" v-show="state.itemShop.imgUrl" />
    <content-component />
    <cart-component v-if="state.itemShop.name" :shop-name="state.itemShop.name" />
  </div>
</template>
<script>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import ShopInfo from "../../components/ShopInfo";
import { getDetail } from "../../api/shop";
import SearchComponent from "./components/Search";
import ContentComponent from "./components/Content";
import CartComponent from "./components/Cart";
export default {
  name: "Shop",
  components: {
    ShopInfo,
    SearchComponent,
    ContentComponent,
    CartComponent,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const state = reactive({
      itemShop: {},
    });
    getDetail({ id }).then((res) => {
      if (res.dataCode === "0000") {
        state.itemShop = res.data;
      }
    });
    return { state };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
  height: 100%;
  width: 100%;
}
</style>
