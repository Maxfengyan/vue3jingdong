import { defineComponent } from "vue";
import style from "./toast.module.scss";
const Toast = defineComponent({
  name: "Toast",
  props: {
    msg: Object,
  },
  setup(props) {
    return () => {
      return (
        <div id={style.toast} v-show={props.msg.showStatus}>
          {props.msg.showMessage}
        </div>
      );
    };
  },
});
/* export const useToastEffect = () => {
  const toastData = reactive({
    showStatus: false,
    showMessage: "",
    time: null,
  });
  const openToast = (text) => {
    clearTimeout(toastData.time);
    toastData.showStatus = true;
    toastData.showMessage = text;
    toastData.time = setTimeout(() => {
      toastData.showStatus = false;
      toastData.showMessage = "";
    }, 1500);
  };
  return {
    toastData,
    openToast,
  };
}; */

export default Toast;
