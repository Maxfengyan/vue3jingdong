<template>
  <div class="wrapper">
    <info-component />
    <buy-component />
    <order-component />
  </div>
</template>
<script>
import InfoComponent from "./components/Info.jsx";
import BuyComponent from "./components/buyList.jsx";
import OrderComponent from "./components/order.jsx";
export default {
  components: {
    InfoComponent,
    BuyComponent,
    OrderComponent,
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: #eee;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
}
</style>
