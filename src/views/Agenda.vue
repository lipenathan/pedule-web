<template>
      <div>
        <navbar/>
        <calendar id="calendar"/>
      </div>
</template>

<script>
import Navbar from '@/components/template/Navbar.vue'
import Calendar from '@/components/agenda/CalendarWidget.vue'



export default {
  components: { Navbar, Calendar}
}
</script>
<style scoped>
#calendar {
  margin: 8em 2em auto auto;
}
</style>