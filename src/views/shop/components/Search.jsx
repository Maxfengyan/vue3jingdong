import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import style from "@/style/shop/search.module.scss";
const Search = defineComponent({
  name: "ShopSearch",
  setup() {
    const router = useRouter();
    const handleBack = () => {
      router.back();
    };
    return () => {
      return (
        <div class={style.search}>
          <svg-icon onClick={() => handleBack()} class={style.search_back} icon-class="back" />
          <div class={style.search_content}>
            <svg-icon icon-class="search" />
            <input class={style.search_input} placeholder="请输入商品名称" />
          </div>
        </div>
      );
    };
  },
});

export default Search;
