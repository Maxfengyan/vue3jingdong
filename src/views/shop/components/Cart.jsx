import { defineComponent } from "vue";
import style from "@/style/shop/cart.module.scss";
import basket from "@/assets/basket.png";
const Cart = defineComponent({
  name: "Cart",
  setup() {
    return () => {
      return (
        <div class={style.cart}>
          <div class={style.check}>
            <div class={style.check_icon}>
              <img src={basket} />
              <div class={style.check_icon_tag}>1</div>
            </div>
            <div class={style.check_info}>
              总计: <span class={style.check_info_price}>&yen;127</span>
            </div>
            <div class={style.check_btn}>去结算</div>
          </div>
        </div>
      );
    };
  },
});

export default Cart;
