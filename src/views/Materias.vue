<template>
  <div>
    <navbar />
    <h1>Tela a ser Implementada</h1>
  </div>
  <div class="dialog">
    <p-button @click="showDialog = !showDialog">Show Materia Dialog</p-button>
    <dialog-materia :show="showDialog" @closedDialog="showDialog=false" :update="false"></dialog-materia>
  </div>
</template>
<script>
import Navbar from "@/components/template/Navbar.vue";
import DialogMateria from "@/components/materias/MateriaDialog.vue";
import PButton from "primevue/button";

export default {
  components: { Navbar, DialogMateria, PButton },
  data() {
    return {
      showDialog: false
    }
  }
};
</script>
<style lang="scss" scoped>

.dialog {
  margin-top: 4rem;
}
</style>