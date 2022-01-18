import service from "@/core/request";

export function getDetail(id) {
  return service({
    url: "/shop/detail.json",
    method: "get",
    params: id,
  });
}
