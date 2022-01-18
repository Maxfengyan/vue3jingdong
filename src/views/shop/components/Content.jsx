import { defineComponent, reactive } from "vue";
import style from "@/style/shop/content.module.scss";
import testImg from "@/assets/near.png";
const Content = defineComponent({
  setup() {
    const state = reactive({
      categoryList: [
        {
          id: 1,
          name: "全部商品",
        },
        {
          id: 2,
          name: "秒杀",
        },
        {
          id: 3,
          name: "新鲜水果",
        },
        {
          id: 4,
          name: "休闲食品",
        },
        {
          id: 5,
          name: "时令蔬菜",
        },
        {
          id: 6,
          name: "肉蛋家禽",
        },
      ],
      productList: [
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
        {
          name: "番茄250克",
          sales: 10,
          price: 26,
          origin: 33,
        },
      ],
    });
    return () => {
      return (
        <div class={style.content}>
          <div class={style.category}>
            {state.categoryList.map((item, index) => {
              let className = style.categoryItem + " " + (index === 0 ? style.categoryItem_active : "");
              return <div class={className}>{item.name}</div>;
            })}
          </div>
          <div class={style.product}>
            {state.productList.map((item) => {
              return (
                <div class={style.productItem}>
                  <img src={testImg} />
                  <div class={style.productItemDetail}>
                    <h4 class={style.productTitle}>{item.name}</h4>
                    <p class={style.productSales}>月售{item.sales}件</p>
                    <p class={style.productPrice}>
                      <span class={style.productPriceYen}>&yen;</span>
                      {item.price}
                      <span class={style.productPriceOrigin}>&yen;{item.origin}</span>
                    </p>
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
