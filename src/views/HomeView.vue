<template>
<navbar></navbar>
  <div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/template/Navbar.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navbar,
    
  },
};
</script>
