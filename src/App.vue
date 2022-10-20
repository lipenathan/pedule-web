<template>
  <cronograma></cronograma>
  <router-view/>
  <Toast/>
</template>
<script>
import Cronograma from '../src/views/Cronograma.vue'
import Toast from "vue-toastification";
export default {
    template: { Cronograma, Toast },
}

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap');

#app {
  font-family: Quicksand, Helvetica, Arial, sans-serif;
  text-align: center;
  
}
*,
   *::after,
   *::before {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       text-decoration: none;
       font-family: 'Open Sans', sans-serif;
       
   }   
body {
  background-color: #EEEEF8;
}
</style>