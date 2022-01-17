import service from "@/core/request";

export function login(data) {
  return service({
    url: "/user/login.json",
    method: "get",
    params: data,
  });
}

export function register(data) {
  return service({
    url: "/user/register.json",
    method: "get",
    params: data,
  });
}
