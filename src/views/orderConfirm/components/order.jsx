import { computed, defineComponent, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { getCart } from "@/core/auth.js";
import style from "@/style/orderConfirm/order.module.scss";
import { pay } from "@/api/pay.js";
const Order = defineComponent({
  name: "Order",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const shopId = route.params.shopId;
    const cartList = getCart()?.[shopId];
    const { appContext } = getCurrentInstance();
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

    // 提交订单
    const submitOrder = () => {
      const $confirm = appContext.config.globalProperties.$confirm;
      const $loading = appContext.config.globalProperties.$loading;
      $confirm
        .show({
          title: "确认要离开收银台吗？",
          desc: "请尽快完成支付，否则订单将被取消",
          confirmButton: "确认支付",
          cancelButton: "取消支付",
        })
        .then(() => {
          console.log("提交订单");
          pay().then((res) => {
            setTimeout(() => {
              $loading.success("提交成功！").then((res) => {
                // 清空购物车
                store.dispatch("cart/ClearCart", { shopId: shopId });
                store.dispatch("docker/ChangeIndex", 2);
                router.push({
                  name: "OrderList",
                  params: { shopId: shopId },
                });
              });
            }, 1100);
          });
        })
        .catch(() => {
          console.log("取消支付");
        });
    };
    return () => {
      return (
        <div class={style.order}>
          <div class={style.order_price}>
            实付金额 <b>￥{allPrice.value}</b>
          </div>
          <div class={style.order_btn} onClick={() => submitOrder()}>
            提交订单
          </div>
        </div>
      );
    };
  },
});

export default Order;
