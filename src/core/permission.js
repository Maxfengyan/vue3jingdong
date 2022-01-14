import router from "@/router";
import { getToken } from "./auth";
router.beforeEach((to, from, next) => {
  if (getToken() || to.name === "Login") {
    next();
  } else {
    next({ name: "Login" });
  }
});
