<template>
  <div>
    <navbar />
    <h1>Tela a ser Implementada</h1>
  </div>
  <div class="dialog">
    <p-button @click="showDialog = !showDialog">Show Materia Dialog</p-button>
    <dialog-materia
      :show="showDialog"
      @closedDialog="showDialog = false"
      :update="true"
      :materia="materia"
    ></dialog-materia>
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
      showDialog: false,
      /**
       *exemplo de objeto de matéria que na verdade deverá ser pego da lista
       *que está sendo exibida ao usuário e que foi recebida via api
       */
      materia: {
        titulo: "Materia POSTMAN",
        descricao: "matéria de teste via requisicao",
        semanaHorario: [
          {
            horario: "20:15:00",
            semana: {
              id: 2,
            },
          },
        ],
        usuario: {
          id: 15,
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.dialog {
  margin-top: 4rem;
}
</style>