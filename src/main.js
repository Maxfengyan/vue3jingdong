import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./style/index.scss";
import "./icons";
import SvgIcon from "./components/SvgIcon";
import "./core/permission";

const app = createApp(App);
app.component("svg-icon", SvgIcon);
app.use(store);
app.use(router);
app.mount("#app");
