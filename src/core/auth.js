import Cookies from "js-cookie";

const Token = "vue3jingdong";

export function getToken() {
  Cookies.get(Token);
}

export function setToken(token) {
  Cookies.set(Token, token);
}

export function removeToken() {
  Cookies.remove(Token);
}
