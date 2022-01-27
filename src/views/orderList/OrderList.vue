<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div class="order">
        <div class="order_title">
          沃尔玛
          <span class="order_status">已取消</span>
        </div>
        <div class="order_content">
          <div class="order_content_imgs">
            <img src="" />
          </div>
          <div class="order_content_info">
            <div class="order_content_price">￥36.88</div>
            <div class="order_content_count">共两件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
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
  color: #333;
  line-height: 0.44rem;
  background: #fff;
  font-size: 0.16rem;
  text-align: center;
}
.orders {
  display: flex;
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
    .order_status {
      float: right;
      font-size: 0.14rem;
      color: #999;
    }
  }
}
</style>
