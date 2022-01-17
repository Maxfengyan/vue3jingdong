import { defineComponent } from "vue";
import style from "./toast.module.scss";
const Toast = defineComponent({
  props: {
    showStatus: {
      type: Boolean,
      default: false,
      required: true,
    },
    showMessage: {
      type: String,
      default: "",
      required: true,
    },
  },
  setup(props) {
    return () => {
      return (
        <div id={style.toast} v-show={props.showStatus}>
          {props.showMessage}
        </div>
      );
    };
  },
});

export default Toast;
