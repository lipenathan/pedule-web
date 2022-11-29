<template>
  <custom-template>
    <template v-slot:content>
      <Anotacoes />
    </template>
  </custom-template>
  <div><Lembrete/></div>
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
import PButton from "primevue/button";
import Anotacoes from "@/components/anotacoes/Anotacoes.vue";
import CustomTemplate from "@/components/template/Template.vue";

export default {
  components: { Navbar, PButton, Anotacoes, CustomTemplate },
  data() {
    return {
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
  props: {
    anotacao: {
      id: Number,
      titulo: String,
      descricao: String,
      lembrete: Boolean,
      dataHorario: String,
      link: Array,
    },
    update: false,
  },
};
</script>
<style lang="scss" scoped>
.dialog {
  margin-top: 4rem;
}

.lembrete {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>