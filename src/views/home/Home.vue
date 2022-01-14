<template>
  <div class="wrapper">
    <position-component />
    <search-component />
    <banner-component />
    <icons-component />
    <div class="gap"></div>
    <nearby-component />
  </div>
  <docker-component />
</template>
<script>
import Components from "./component/index";
export default {
  name: "Home",
  components: Components,
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
  padding: 0 0.18rem 0.3rem 0.18rem;
  overflow-y: auto;
}

.gap {
  height: 0.1rem;
  background: $content-bgColor;
  margin: 0 -0.18rem;
}
</style>
