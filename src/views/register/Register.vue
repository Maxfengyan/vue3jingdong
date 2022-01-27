<template>
  <div class="wrapper">
    <img :src="user" />
    <div class="wrapper_input">
      <input v-model="state.userName" placeholder="请输入手机号" class="wrapper_input_content" />
    </div>
    <div class="wrapper_input">
      <input v-model="state.userPassword" autocomplete="new-password" type="password" placeholder="请输入密码" class="wrapper_input_content" />
    </div>
    <div class="wrapper_input">
      <input v-model="state.confirmPassword" autocomplete="new-password" type="password" placeholder="确认密码" class="wrapper_input_content" />
    </div>
    <div class="wrapper_register_button" @click="handleRegister">注册</div>
    <div class="wrapper_register_link" @click="handleLoginClick">已有账号去登录</div>
  </div>
</template>
<script>
import { reactive, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { register } from "@/api/user";
import { setToken } from "../../core/auth";
import user from "@/assets/user.png";

// 注册
const useRegisterEffect = (appContext) => {
  const $toast = appContext.config.globalProperties.$toast;
  const router = useRouter();
  const state = reactive({
    userName: "",
    userPassword: "",
    confirmPassword: "",
  });
  const handleRegister = () => {
    if (state.userPassword !== state.confirmPassword) {
      $toast.show("两次输入密码不一致");
      return false;
    }
    if (state.userName && state.userPassword) {
      register(state)
        .then((res) => {
          if (res.dataCode === "0000") {
            setToken(res.data.token);
            router.push({ name: "Home" });
          } else {
            $toast.show(res.dataResult);
          }
        })
        .catch((error) => {
          $toast.show("注册失败");
        });
    } else {
      $toast.show("请输入用户名密码");
    }
  };

  return { state, handleRegister };
};
export default {
  name: "Register",
  setup() {
    const router = useRouter();
    const { appContext } = getCurrentInstance();
    const { state, handleRegister } = useRegisterEffect(appContext);

    const handleLoginClick = () => {
      router.push({ name: "Login" });
    };
    return { state, user, handleRegister, handleLoginClick };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/variable";
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  .wrapper_input {
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    input {
      width: 100%;
      line-height: 0.48rem;
      background: transparent;
      border: none;
      padding: 0 0.16rem;
      box-sizing: border-box;
      outline: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  .wrapper_register_button {
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    font-size: 0.16rem;
    line-height: 0.48rem;
    text-align: center;
  }
  .wrapper_register_link {
    font-size: 0.14rem;
    text-align: center;
    color: $content-notice-fontcolor;
  }
}
</style>
