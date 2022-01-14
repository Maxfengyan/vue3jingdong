<template>
  <div class="wrapper">
    <img :src="user" />
    <div class="wrapper_input">
      <input placeholder="请输入手机号" class="wrapper_input_content" />
    </div>
    <div class="wrapper_input">
      <input type="password" placeholder="请输入密码" class="wrapper_input_content" />
    </div>
    <div class="wrapper_login_button" @click="handleLogin">登录</div>
    <div class="wrapper_login_link">立即注册</div>
  </div>
</template>
<script>
import user from "@/assets/user.png";
import { setToken } from "../../core/auth";
export default {
  name: "Login",
  setup() {
    const handleLogin = () => {
      setToken("MMMMM");
    };
    return { user, handleLogin };
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
  .wrapper_login_button {
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    font-size: 0.16rem;
    line-height: 0.48rem;
    text-align: center;
  }
  .wrapper_login_link {
    font-size: 0.14rem;
    text-align: center;
    color: $content-notice-fontcolor;
  }
}
</style>
