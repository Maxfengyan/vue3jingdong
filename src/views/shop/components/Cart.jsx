import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import style from "@/style/shop/cart.module.scss";
import basket from "@/assets/basket.png";
const Cart = defineComponent({
  name: "Cart",
  setup() {
    const store = useStore();
    const route = useRoute();
    const shopId = route.params.id;
    const cartList = store.getters.cartList;
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

    // 获取总数量
    const total = computed(() => {
      let totalItem = 0;
      for (let key in cartList?.[shopId]) {
        let item = cartList?.[shopId][key];
        if (item.count && item.checked) {
          totalItem = totalItem + item.count;
        }
      }
      return totalItem;
    });
    // 获取总价格
    const allPrice = computed(() => {
      let priceItem = 0;
      for (let key in cartList?.[shopId]) {
        let item = cartList?.[shopId][key];
        if (item.count && item.checked) {
          priceItem = priceItem + item.count * item.price;
        }
      }
      return priceItem.toFixed(2);
    });

    // 获取购物车内容
    const currentCarList = computed(() => {
      let buyList = [];
      for (let key in cartList?.[shopId]) {
        buyList.push(cartList?.[shopId][key]);
      }
      return buyList;
    });

    // 选择购物车商品结算
    const handleChecked = (productId) => {
      store.dispatch("cart/CartChecked", { shopId: shopId, productId: productId });
    };
    return () => {
      let tracess = cartList[shopId]?.selectAll + "";
      return (
        <div class={style.cart}>
          <div class={style.product}>
            <div class={style.productHeader}>
              <svg-icon onClick={() => handleChecked()} icon-class={cartList[shopId]?.selectAll ? "checked" : "sq-checked"} />
              <span>全选</span>
              <div class={style.clearCart}>清空购物车</div>
            </div>
            {currentCarList.value.map((item) => {
              return (
                <div class={style.productItem} v-show={item.count > 0}>
                  <svg-icon onClick={() => handleChecked(item.id)} icon-class={item.checked ? "checked" : "sq-checked"} />
                  <img src={item.imgUrl} />
                  <div class={style.productItemDetail}>
                    <h4 class={style.productTitle}>{item.name}</h4>
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
                    <span class={style.productNumber_number}>{item.count}</span>
                    <span class={style.productNumber_plus} onClick={() => handleShopAdd(item.id, item.price, item)}>
                      +
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div class={style.check}>
            <div class={style.check_icon}>
              <img src={basket} />
              <div class={style.check_icon_tag}>{total.value}</div>
            </div>
            <div class={style.check_info}>
              总计: <span class={style.check_info_price}>&yen; {allPrice.value}</span>
            </div>
            <div class={style.check_btn}>去结算</div>
          </div>
        </div>
      );
    };
  },
});

export default Cart;
