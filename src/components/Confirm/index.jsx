import { defineComponent } from "vue";
import style from "./confirm.module.scss";
import app from "@/main.js";
const Confirm = defineComponent({
  name: "Confirm",
  emits: ["handleCancel"],
  props: {
    msg: Object,
  },
  setup(props) {
    const handleCancel = () => {
      app.config.globalProperties.$bus.emit("HANDLECANCEL");
    };
    const handleSubmit = () => {
      app.config.globalProperties.$bus.emit("HANDLESUBMIT");
    };
    const closeConfirm = ($event) => {
      if ($event.target === $event.currentTarget) {
        app.config.globalProperties.$bus.emit("HANDLECANCEL");
      }
    };
    return () => {
      return (
        <div class={style.mask} v-show={props.msg.show} onClick={(event) => closeConfirm(event)}>
          <div class={style.mask_content}>
            <h3 class={style.mask_title}>{props.msg.title}</h3>
            <p class={style.mask_desc}>{props.msg.desc}</p>
            <div class={style.mask_content_btns}>
              <div class={`${style.mask_content_btn} ${style.first}`} onClick={() => handleCancel()}>
                {props.msg.cancelButton}
              </div>
              <div class={`${style.mask_content_btn} ${style.last}`} onClick={() => handleSubmit()}>
                {props.msg.confirmButton}
              </div>
            </div>
          </div>
        </div>
      );
    };
  },
});

export default Confirm;
