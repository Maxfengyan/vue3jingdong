import service from "@/core/request";

export function getHotList(data) {
  return service({
    url: "/index/hotList.json",
    method: "get",
    params: data,
  });
}
