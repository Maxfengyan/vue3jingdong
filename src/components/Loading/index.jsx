import { defineComponent } from "vue";
import style from "./loading.module.scss";
import "@/icons";
import SvgIcon from "@/components/SvgIcon";
const Loading = defineComponent({
  name: "Loading",
  props: {
    msg: Object,
  },
  components: {
    SvgIcon,
  },
  setup(props) {
    return () => {
      return (
        <div class={style.loading} v-show={props.msg.show}>
          <div>
            <svg-icon icon-class={props.msg.icon} />
            <span>{props.msg.title}</span>
          </div>
        </div>
      );
    };
  },
});

export default Loading;
