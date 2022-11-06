<template>
  <div>
    <div>
      <navbar />
    </div>
    <div class="body">
      <div class="sidebar-style">
        <sidebar />
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="calendar">
        <calendar />
      </div>
    </div>
    <div class="dialog">
      <dialog-materia
        :show="showDialog"
        @closedDialog="showDialog = false"
        @updateList="buscarMaterias()"
        :update="update"
        v-bind:materia="materia"
      ></dialog-materia>
      <p-button
        class="p-button-raised p-button-rounded button-add"
        icon="pi pi-plus"
        @click="openDialog(false)"
      />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/template/Navbar.vue";
import Sidebar from "@/components/template/Sidebar.vue";
import PButton from "primevue/button";
import Calendar from "@/components/cronograma/CalendarWidget.vue";

export default {
  components: {
    Navbar,
    PButton,
    Sidebar,
    Calendar,
  },
};
</script>
<style lang="scss" scoped>
$margin-button: 4rem;

.content {
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
}

.button-add {
  width: 3.5rem !important;
  height: 3.5rem !important;
  position: fixed;
  bottom: $margin-button;
  right: $margin-button;
}

.calendar {
  float: right;
  width: min-content;
  margin-right: 1rem;
  margin-top: auto;
  margin-bottom: auto;
}

.body {
  display: flex;
  justify-content: space-between;
}

.sidebar-style {
  width: 9rem;
}
</style>