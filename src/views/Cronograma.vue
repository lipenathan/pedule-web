<template>
  <div id="wrapper">
    <navbar />
    <div id="content">
      <cronograma class="cronograma" />
      <calendar id="calendar" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/template/Navbar.vue";
import Calendar from "@/components/cronograma/CalendarWidget.vue";
import Cronograma from "@/components/cronograma/Cronograma.vue";

export default {
  components: { Navbar, Calendar, Cronograma },
};
</script>
<style scoped>
#calendar {
  margin: 8em 2em auto auto;
}

#content {
  display: flex;
}

.cronograma {
    margin-top: 3rem;
  margin-inline-start: auto;
}
</style>