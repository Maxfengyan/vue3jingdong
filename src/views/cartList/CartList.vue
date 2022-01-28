<template>
  <div class="wrapper">
    <div class="title">我的全部购物车</div>
    <div class="orders" v-if="Object.keys(orderLists).length > 0">
      <div v-for="shop in orderLists" :key="shop" class="order">
        <div class="order_title">
          {{ shop.name }}
        </div>
        <div class="order_content">
          <template v-for="item in shop" :key="item.id">
            <div v-if="typeof item === 'object'" class="shop_item">
              <img :src="item.imgUrl" />
              <div class="shop_content">
                <div class="shop_content_title">{{ item.name }}</div>
                <div class="shop_content_tags shop_content_margin">
                  <span class="shop_content_tag shop_content_price">￥33.6 * 3</span>
                  <span class="shop_content_tag shop_content_allPrice">￥99.9</span>
                </div>
                <p class="shop_content_heighlight">{{ item.slogan }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div v-else class="noOrders">购物车空空如也</div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { getCart } from "@/core/auth.js";
export default {
  name: "Order",
  setup() {
    const orderLists = computed(() => {
      return getCart() || {};
    });
    console.log(orderLists.value);
    return { orderLists };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/variable.scss";
@import "@/components/ShopInfo/shopInfo.module.scss";
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
  padding: 0 0.16rem;
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
    flex-direction: column;
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
.shop_content_margin {
  margin-top: 0.14rem !important;
  position: relative;
}
.shop_content_price {
  color: $number-fontcolor;
  font-size: 0.14rem;
}
.shop_content_allPrice {
  position: absolute;
  right: 0;
  font-weight: bold;
}
</style>
