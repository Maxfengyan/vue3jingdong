import { defineComponent } from "vue";
import style from "@/style/home/banner.module.scss";
import banner from "@/assets/banner.jpg";
const Banner = defineComponent({
  name: "Banner",
  setup() {
    return () => {
      return (
        <div class={style.banner}>
          <img src={banner} alt="banner" />
        </div>
      );
    };
  },
});

export default Banner;
