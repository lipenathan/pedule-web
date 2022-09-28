<template>
  <agenda></agenda>
  <router-view/>
</template>
<script>
import Agenda from '../src/views/Agenda.vue'

export default {
  template: {Agenda}
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap');

#app {
  font-family: Quicksand, Helvetica, Arial, sans-serif;
  text-align: center;
}

body {
  background-color: #EEEEF8;
}
</style>