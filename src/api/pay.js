import service from "@/core/request";

export function pay(data) {
  return service({
    url: "/pay/pay.json",
    method: "get",
    params: data,
  });
}
