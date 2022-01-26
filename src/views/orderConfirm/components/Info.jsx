import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import style from "@/style/orderConfirm/info.module.scss";
const Info = defineComponent({
  name: "Info",
  setup() {
    const router = useRouter();
    const handleBackClick = () => {
      router.back();
    };
    return () => {
      return (
        <div class={style.top}>
          <div class={style.top_header}>
            <svg-icon icon-class="back" onClick={() => handleBackClick()} />
            <span>确认订单</span>
          </div>
          <div class={style.top_receiver}>
            <div class={style.top_receiver_title}>收货地址</div>
            <div class={style.top_receiver_address}>北京理工大学国防科技园2号楼10层</div>
            <div class={style.top_receiver_info}>
              <span class={style.top_receiver_info_name}>瑶妹先生</span>
              <span class={style.top_receiver_info_number}>18911024266</span>
            </div>
            <svg-icon icon-class="back" />
          </div>
        </div>
      );
    };
  },
});
export default Info;
