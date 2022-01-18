import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import style from "@/style/home/nearby.module.scss";
import ShopInfo from "../../../components/ShopInfo";
import { getHotList } from "@/api/index.js";

const Nearby = defineComponent({
  name: "Nearby",
  components: {
    ShopInfo,
  },
  setup() {
    const nearbyList = ref([]);
    const router = useRouter();
    getHotList().then((res) => {
      if (res.dataCode === "0000") {
        nearbyList.value = res.data;
      }
    });

    const handleClickDetail = (id) => {
      router.push({
        name: "Shop",
        params: { id },
      });
    };

    return () => {
      return (
        <div class={style.nearby}>
          <h3 class={style.nearby_title}>附近店铺</h3>
          {nearbyList.value.map((item) => {
            return <ShopInfo onClick={() => handleClickDetail(item._id)} shop-item={item} />;
          })}
        </div>
      );
    };
  },
});

export default Nearby;
