<template>
  <div class="wrapper">
    <navbar />
    <sidebar/>
    <div class="content">
      <cronograma class="cronograma" />
      <calendar class="calendar" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/template/Navbar.vue";
import Calendar from "@/components/cronograma/CalendarWidget.vue";
import Cronograma from "@/components/cronograma/Cronograma.vue";
import Sidebar from "@/components/template/Sidebar.vue"

export default {
  components: { Navbar, Calendar, Cronograma, Sidebar },
};
</script>
<style scoped>

.calendar {
  margin: 5rem auto auto 2rem;
}

.content {
  margin-left: 200px;
  padding: 1px 16px;
  display: flex;
  justify-content: space-between;
}

.cronograma {
  margin-top: 3rem;
  margin-inline-start: auto;
  margin-inline-end: auto;
}
</style>