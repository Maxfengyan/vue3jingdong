import { defineComponent } from "vue";
import style from "./shopInfo.module.scss";
const ShopInfo = defineComponent({
  name: "ShopInfo",
  props: {
    shopItem: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return (
        <div class={style.shop_item}>
          <img src={props.shopItem.imgUrl} />
          <div class={style.shop_content}>
            <div class={style.shop_content_title}>{props.shopItem.name}</div>
            <div class={style.shop_content_tags}>
              <span class={style.shop_content_tag}>月售{props.shopItem.sales}</span>
              <span class={style.shop_content_tag}>起送￥{props.shopItem.expressLimit}</span>
              <span class={style.shop_content_tag}>基础运费{props.shopItem.expressPrice}元</span>
            </div>
            <p class={style.shop_content_heighlight}>{props.shopItem.slogan}</p>
          </div>
        </div>
      );
    };
  },
});

export default ShopInfo;
