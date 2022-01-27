<template>
  <router-view />
  <docker-component />
</template>

<script>
import DockerComponent from "./Docker.jsx";
export default {
  name: "Index",
  components: {
    DockerComponent,
  },
};
</script>

<style></style>
