import { defineComponent } from "vue";
import style from "./loading.module.scss";
const Loading = defineComponent({
  props: {
    msg: Object,
  },
  setup(props) {
    return () => {
      return (
        <div class={style.loading} v-show={props.msg.show}>
          <svg-icon icon-class="cart" />
          <div>{props.msg.title}</div>
        </div>
      );
    };
  },
});

export default Loading;
