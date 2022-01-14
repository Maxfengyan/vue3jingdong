import { defineComponent } from "vue";
import style from "@/style/home/search.module.scss";
const Search = defineComponent({
  name: "Search",
  setup() {
    return () => {
      return (
        <div class={style.search}>
          <svg-icon icon-class="search" />
          山姆会员商店优惠商品
        </div>
      );
    };
  },
});

export default Search;
