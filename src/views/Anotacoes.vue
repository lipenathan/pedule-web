<template>
  <div>
    <navbar />
    <Anotacoes />
  </div>
  
  <!-- <div class="dialog">
    <p-button @click="showDialog = !showDialog">Show Materia Dialog</p-button>
    <dialog-anotacoes
      :show="showDialog"
      @closedDialog="showDialog = false"
      :update="false"
      :materia="materia"
    ></dialog-anotacoes>
  </div>  -->
</template>
<script>

import Navbar from "@/components/template/Navbar.vue";
import DialogAnotacoes from "@/components/anotacoes/AnotacoesDialog.vue";
import PButton from "primevue/button";
import Anotacoes from "@/components/anotacoes/Anotacoes.vue"

export default {
  components: { Navbar, DialogAnotacoes, PButton, Anotacoes },
  data() {
    return {
      showDialog: false,
      /**
       *exemplo de objeto de matéria que na verdade deverá ser pego da lista
       *que está sendo exibida ao usuário e que foi recebida via api
       */
      materia: {
        titulo: "Materia Exemplo",
        descricao:
          "matéria de teste passada de um componente pai para um componente filho",
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