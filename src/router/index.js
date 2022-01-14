import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "@/core/auth";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
    beforeEnter(to, from, next) {
      if (getToken()) {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
