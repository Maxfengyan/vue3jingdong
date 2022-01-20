import { defineComponent, reactive } from "vue";
import style from "@/style/shop/content.module.scss";
import { getShopList } from "@/api/shop.js";
import LoadingComponent from "@/components/Loading/index.jsx";
const Content = defineComponent({
  mounted() {
    this.$loading.show("111111");
  },
  components: {
    LoadingComponent,
  },
  setup() {
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
    });
    // 请求商品列表
    const requestShopList = (id) => {
      getShopList({ id: id }).then((res) => {
        if (res.dataCode === "0000") {
          state.productList = res.data;
        }
      });
    };
    requestShopList(0);
    return () => {
      return (
        <div class={style.content}>
          <div class={style.category}>
            {state.categoryList.map((item, index) => {
              let className = style.categoryItem + " " + (index === 0 ? style.categoryItem_active : "");
              return (
                <div onClick={() => requestShopList(item.id)} class={className}>
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
                    <span class={style.productNumber_minus}>-</span>
                    <span class={style.productNumber_number}>0</span>
                    <span class={style.productNumber_plus}>+</span>
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
