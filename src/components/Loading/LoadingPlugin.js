import { createApp, reactive } from "vue";
import loading from "./index.jsx";
const msg = reactive({
  title: "加载中",
  show: false,
});

const $loading = createApp(loading, { msg }).mount(document.createElement("div"));
const load = {
  show(title) {
    msg.title = title;
    msg.show = true;
    document.body.appendChild($loading.$el);
  },

  hide() {
    msg.show = false;
  },
};

const LoadingPlugin = (app, option) => {
  app.config.globalProperties.$loading = load;
};

export default LoadingPlugin;
