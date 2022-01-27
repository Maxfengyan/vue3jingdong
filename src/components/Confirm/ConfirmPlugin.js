import { createApp, reactive } from "vue";
import confirmComponent from "./index.jsx";
import app from "@/main.js";
const msg = reactive({
  title: "",
  desc: "",
  confirmButton: "",
  cancelButton: "",
  show: false,
});

const $confirm = createApp(confirmComponent, { msg }).mount(document.createElement("div"));
const confirm = {
  show(data) {
    msg.title = data.title || "提示";
    msg.desc = data.desc || "描述";
    msg.confirmButton = data.confirmButton || "确定";
    msg.cancelButton = data.cancelButton || "取消";
    msg.show = true;
    document.body.appendChild($confirm.$el);
    return new Promise((resolve, reject) => {
      app.config.globalProperties.$bus.on("HANDLESUBMIT", () => {
        msg.show = false;
        resolve();
      });
      app.config.globalProperties.$bus.on("HANDLECANCEL", () => {
        msg.show = false;
        reject();
      });
    });
  },
};

const ConfirmPlugin = (app, option) => {
  app.config.globalProperties.$confirm = confirm;
};

export default ConfirmPlugin;
