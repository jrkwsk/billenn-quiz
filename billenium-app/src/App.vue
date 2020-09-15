<template>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    this.$store.dispatch("initUsers");
  }
};
</script>

<style lang="scss">
$font-stack: Helvetica, sans-serif;
$primary-color: #333;
$color-of-background: #fff;
$corporate-orange: #f15a23;

.btn-bille {
  background-color: $corporate-orange;
  color: white;
  min-width: 8vw;
  text-transform: uppercase;
}
a {
  color: black;
  text-decoration: underline;
}
</style>
