<template>
  <!-- <router-view /> -->
  <div class="docker">
    <span class="docker_item"> 首页</span>
    <span class="docker_item">
      <svg-icon icon-class="eye" />
      购物车</span
    >
    <span class="docker_item">订单</span>
    <span class="docker_item">我的</span>
  </div>
</template>
<style lang="scss">
.docker {
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #f1f1f1;
  height: 0.49rem;
  background: green;
  padding: 0 18px;
  box-sizing: border-box;
}
.docker_item {
  flex: 1;
  text-align: center;
}
</style>
