import Cookies from "js-cookie";

// 操作登录token
const Token = "vue3jingdong";

export function getToken() {
  return Cookies.get(Token);
}

export function setToken(token) {
  return Cookies.set(Token, token);
}

export function removeToken() {
  return Cookies.remove(Token);
}

// 操作购物车

const Cart = "vue3CartList";
export function getCart() {
  const cartList = JSON.parse(Cookies.get(Cart) || "{}") || JSON.parse(localStorage.getItem(Cart) || "{}") || {};
  return cartList;
}

export function setCart(data) {
  localStorage.setItem(Cart, JSON.stringify(data));
  Cookies.set(Cart, JSON.stringify(data));
  return localStorage.setItem(Cart, JSON.stringify(data));
}

export function removeCart() {
  localStorage.removeItem(Cart);
  Cookies.remove(Cart);
}
