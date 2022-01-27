import { createApp, reactive } from "vue";
import loading from "./index.jsx";
const msg = reactive({
  title: "加载中",
  show: false,
  icon: "load",
  number: 0,
});

const $loading = createApp(loading, { msg }).mount(document.createElement("div"));
const load = {
  show(title) {
    // 如果已经处于加载中，就不继续叠加遮罩了
    msg.title = title;
    msg.show = true;
    msg.number = msg.number + 1;
    document.body.appendChild($loading.$el);
  },
  success(title) {
    // 如果已经处于加载中，就不继续叠加遮罩了
    msg.title = title;
    msg.show = true;
    msg.icon = "success";
    document.body.appendChild($loading.$el);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        msg.show = false;
        msg.icon = "load";
        resolve();
      }, 1000);
    });
  },
  hide() {
    // 秒啊，神之一笔
    msg.number = msg.number - 1;
    if (msg.number === 0) {
      msg.show = false;
    }
  },
};

const LoadingPlugin = (app, option) => {
  app.config.globalProperties.$loading = load;
};

export default LoadingPlugin;
