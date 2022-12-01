<template>
  <router-view />
  <cronograma></cronograma>
</template>
<script>
import Cronograma from "@/views/Cronograma.vue";
export default {
  template: { Cronograma },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap");
@import url("reset.css");



#app {
  font-family: Quicksand, Helvetica, Arial, sans-serif;
}
body {
  background-color: #eeeef8;
}
</style>