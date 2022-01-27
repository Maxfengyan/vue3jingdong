import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "@/core/auth";
const routes = [
  {
    path: "/",
    name: "Index",
    redirect: "/home",
    component: () => import("@/views/docker/Index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/Home.vue"),
      },
      {
        path: "/cartList",
        name: "CartList",
        component: () => import("@/views/cartList/CartList.vue"),
      },
      {
        path: "/orderList",
        name: "OrderList",
        component: () => import("@/views/orderList/OrderList.vue"),
      },
    ],
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: () => import("@/views/shop/Shop.vue"),
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
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/register/Register.vue"),
    beforeEnter(to, from, next) {
      if (getToken()) {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/orderConfirm/:shopId",
    name: "OrderConfirm",
    component: () => import("@/views/orderConfirm/OrderConfirm.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
