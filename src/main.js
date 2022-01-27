import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons";
import "normalize.css";
import "animate.css";
import "./style/index.scss";
import "./core/permission";
import SvgIcon from "./components/SvgIcon";
import LoadingPlugin from "./components/Loading/LoadingPlugin";
import ToastPlugin from "./components/Toast/ToastPlugin";
import ConfirmPlugin from "./components/Confirm/ConfirmPlugin";

const app = createApp(App);
app.config.globalProperties.$bus = new mitt();
app.component("svg-icon", SvgIcon);
app.use(store);
app.use(router);
app.use(LoadingPlugin);
app.use(ToastPlugin);
app.use(ConfirmPlugin);
app.mount("#app");

export default app;
