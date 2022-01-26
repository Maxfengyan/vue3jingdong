import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { getCart } from "@/core/auth.js";
import style from "@/style/orderConfirm/order.module.scss";
const Order = defineComponent({
  name: "Order",
  setup() {
    const route = useRoute();
    const shopId = route.params.shopId;
    const cartList = getCart()?.[shopId];
    // 获取总价格
    const allPrice = computed(() => {
      let priceItem = 0;
      for (let key in cartList) {
        let item = cartList[key];
        if (item && item.count && item.checked) {
          priceItem = priceItem + item.count * item.price;
        }
      }
      return priceItem.toFixed(2);
    });
    return () => {
      return (
        <div class={style.order}>
          <div class={style.order_price}>
            实付金额 <b>￥{allPrice.value}</b>
          </div>
          <div class={style.order_btn}>提交订单</div>
        </div>
      );
    };
  },
});

export default Order;
