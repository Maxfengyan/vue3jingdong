import { createApp, reactive } from "vue";
import toast from "./index.jsx";
const msg = reactive({
  showStatus: false,
  showMessage: "",
});

const $toast = createApp(toast, { msg }).mount(document.createElement("div"));
const toasting = {
  show(showMessage) {
    // 如果已经处于加载中，就不继续叠加遮罩了
    if (!msg.showStatus) {
      msg.showMessage = showMessage;
      msg.showStatus = true;
      document.body.appendChild($toast.$el);
      setTimeout(() => {
        msg.showStatus = false;
      }, 1000);
    }
  },

  hide() {
    msg.showStatus = false;
  },
};

const ToastPlugin = (app, option) => {
  app.config.globalProperties.$toast = toasting;
};

export default ToastPlugin;
