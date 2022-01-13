import { defineComponent } from "vue";
import style from "@/style/home/position.module.scss";
const Position = defineComponent({
  setup() {
    return () => {
      return (
        <div class={style.position}>
          <svg-icon icon-class="position" />
          北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
          <svg-icon icon-class="bell" />
        </div>
      );
    };
  },
});

export default Position;
