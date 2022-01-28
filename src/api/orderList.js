import service from "@/core/request";

export function orderList(data) {
  return service({
    url: "/shop/order.json",
    method: "get",
    params: data,
  });
}
