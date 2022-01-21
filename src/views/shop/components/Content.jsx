import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { getShopList } from "@/api/shop.js";
import LoadingComponent from "@/components/Loading/index.jsx";
import style from "@/style/shop/content.module.scss";

const Content = defineComponent({
  name: "ShopContent",
  components: {
    LoadingComponent,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const state = reactive({
      categoryList: [
        {
          id: 0,
          name: "全部商品",
        },
        {
          id: 1,
          name: "秒杀",
        },
        {
          id: 2,
          name: "新鲜水果",
        },
        {
          id: 3,
          name: "休闲食品",
        },
        {
          id: 4,
          name: "时令蔬菜",
        },
        {
          id: 5,
          name: "肉蛋家禽",
        },
      ],
      productList: [],
      currentIndex: 0,
      cartList: store.getters.cartList,
      allPrice: store.getters.allPrice,
      id: route.params.id,
    });

    // 请求商品列表+切换
    const requestShopList = (id, index) => {
      state.currentIndex = index || 0;
      getShopList({ id: id }).then((res) => {
        if (res.dataCode === "0000") {
          state.productList = res.data;
        }
      });
    };
    requestShopList(0);

    // 商品增加购物车
    const handleShopAdd = (productId, price, item) => {
      let data = {
        shopId: route.params.id,
        productId: productId,
        price: price,
        item: item,
      };
      store.dispatch("cart/ChangeCartListAdd", data);
    };

    // 商品减少购物车
    const handleShopreduce = (productId, price, item) => {
      let data = {
        shopId: route.params.id,
        productId: productId,
        price: price,
        item: item,
      };
      store.dispatch("cart/ChangeCartListReduce", data);
    };

    return () => {
      return (
        <div class={style.content}>
          <div class={style.category}>
            {state.categoryList.map((item, index) => {
              let className = style.categoryItem + " " + (index === state.currentIndex ? style.categoryItem_active : "");
              return (
                <div onClick={() => requestShopList(item.id, index)} class={className}>
                  {item.name}
                </div>
              );
            })}
          </div>
          <div class={style.product}>
            {state.productList.map((item) => {
              return (
                <div class={style.productItem}>
                  <img src={item.imgUrl} />
                  <div class={style.productItemDetail}>
                    <h4 class={style.productTitle}>{item.name}</h4>
                    <p class={style.productSales}>月售{item.sales}件</p>
                    <p class={style.productPrice}>
                      <span class={style.productPriceYen}>&yen;</span>
                      {item.price}
                      <span class={style.productPriceOrigin}>&yen;{item.origin}</span>
                    </p>
                  </div>
                  <div class={style.productNumber}>
                    <span
                      class={style.productNumber_minus}
                      onClick={() => {
                        handleShopreduce(item.id, item.price, item);
                      }}
                    >
                      -
                    </span>
                    <span class={style.productNumber_number}>{state?.cartList?.[state.id]?.[item.id]?.count || 0} </span>
                    <span class={style.productNumber_plus} onClick={() => handleShopAdd(item.id, item.price, item)}>
                      +
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };
  },
});
export default Content;
