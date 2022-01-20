import service from "@/core/request";

export function getDetail(id) {
  return service({
    url: "/shop/detail.json",
    method: "get",
    params: id,
  });
}

export function getShopList(id) {
  return service({
    url: "https://www.fastmock.site/mock/45255cefa909d88c879583f763b65f1a/jingdong/shop/list",
    method: "get",
    params: id,
  });
}
