import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import style from "@/style/orderConfirm/buyList.module.scss";
import product from "@/style/shop/content.module.scss";
import { getCart } from "@/core/auth.js";
const BuyList = defineComponent({
  name: "BuyList",
  setup() {
    const route = useRoute();
    const shopId = route.params.shopId;

    const name = computed(() => {
      return getCart()?.[shopId]?.name || "";
    });
    const cartList = computed(() => {
      const cartObj = getCart()?.[shopId];
      const cartResult = [];
      for (let key in cartObj) {
        if (cartObj[key].count > 0 && cartObj[key].checked) {
          cartResult.push(cartObj[key]);
        }
      }
      return cartResult;
    });
    return () => {
      return (
        <div class={style.product}>
          <div class={style.product_title}>{name.value}</div>
          {cartList.value.map((item) => {
            return (
              <div class={style.productItem}>
                <img src={item.imgUrl} />
                <div class={product.productItemDetail}>
                  <h4 class={product.productTitle}>{item.name}</h4>
                  <p class={style.productPrice}>
                    <span class={product.productPriceYen}>
                      &yen;{item.price} * {item.count}
                    </span>
                    <span class={style.productAllPrice}>&yen;{(item.price * item.count).toFixed(2)}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  },
});
export default BuyList;
