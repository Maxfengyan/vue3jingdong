<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders" v-if="orderLists.length > 0">
      <div v-for="shop in orderLists" :key="shop.shopId" class="order">
        <div class="order_title">
          {{ shop.shopName }}
          <span class="order_status">{{ shop.isCancel ? "已取消" : "已下单" }}</span>
        </div>
        <div class="order_content">
          <div class="order_content_imgs">
            <img v-for="item in shop.shopList" :key="item.id" :src="item.imgUrl" />
          </div>
          <div class="order_content_info">
            <div class="order_content_price">￥{{ shop.allPrice.toFixed(2) }}</div>
            <div class="order_content_count">共{{ shop.total }}件</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="noOrders">暂无订单</div>
  </div>
</template>
<script>
import { ref } from "vue";
import { orderList } from "@/api/orderList.js";
export default {
  name: "Order",
  setup() {
    const orderLists = ref([]);
    orderList().then((res) => {
      console.log(res);
      if (res.dataCode === "0000") {
        orderLists.value = res.data;
      }
    });
    return { orderLists };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/variable.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  // padding: 0 0.18rem 0.3rem 0.18rem;
  overflow-y: auto;
  background: rgb(248, 248, 248);
}
.title {
  color: $content-fontcolor;
  line-height: 0.44rem;
  background: #fff;
  font-size: 0.16rem;
  text-align: center;
}
.orders {
  display: flex;
  flex-direction: column;
}
.order {
  flex: 1;
  padding: 0.16rem;
  background: #fff;
  margin: 0.16rem 0.18rem;
  .order_title {
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: #333;
    margin-bottom: 0.16rem;
    .order_status {
      float: right;
      font-size: 0.14rem;
      color: #999;
    }
  }
  .order_content {
    display: flex;
    .order_content_imgs {
      flex: 1;
      img {
        width: 0.44rem;
        height: 0.44rem;
        margin-right: 0.12rem;
        border-radius: 0.04rem;
      }
    }
    .order_content_info {
      width: 0.7rem;
      .order_content_price {
        font-size: 0.14rem;
        color: $number-fontcolor;
        text-align: right;
        line-height: 0.2rem;
        margin-bottom: 0.04rem;
      }
      .order_content_count {
        color: #333;
        font-size: 0.12rem;
        text-align: right;
        line-height: 0.14rem;
      }
    }
  }
}
.noOrders {
  font-size: 0.16rem;
  text-align: center;
  padding-top: 1rem;
  color: #333;
}
</style>
