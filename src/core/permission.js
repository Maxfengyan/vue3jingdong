import router from "@/router";
import { getToken } from "./auth";
router.beforeEach((to, from, next) => {
  if (getToken() || to.name === "Login" || getToken() || to.name === "Register") {
    next();
  } else {
    next({ name: "Login" });
  }
});
