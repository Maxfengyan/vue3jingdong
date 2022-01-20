import { createApp, reactive } from "vue";
import loading from "./index.jsx";
const msg = reactive({
  title: "加载中",
  show: false,
});

const $loading = createApp(loading, { msg }).mount(document.createElement("div"));
const load = {
  show(title) {
    // 如果已经处于加载中，就不继续叠加遮罩了
    if (!msg.show) {
      msg.title = title;
      msg.show = true;
      document.body.appendChild($loading.$el);
    }
  },

  hide() {
    msg.show = false;
  },
};

const LoadingPlugin = (app, option) => {
  app.config.globalProperties.$loading = load;
};

export default LoadingPlugin;
