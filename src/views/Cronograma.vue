<template>
  <div>
    <custom-template>
      <template v-slot:content>
        <cronograma-cmp></cronograma-cmp>
      </template>
    </custom-template>
    <div class="div-button">
      <speeddial class="button" icon="pi pi-plus" :model="items" :radius="120" direction="up-left" type="quarter-circle"/>
    </div>
    <dialog-atividade
      :update="false"
      :show="showDialogAtividade"
      @closedDialog="showDialogAtividade = false"
    />
    <dialog-materia
      :update="false"
      :show="showDialogMateria"
      @closedDialog="showDialogMateria = false"
    />
    <dialog-anotacao
      :update="false"
      :show="showDialogAnotacao"
      @closedDialog="showDialogAnotacao = false"
    />
  </div>
</template>
<script>
import Speeddial from "primevue/speeddial";
import PButton from "primevue/button";
import CronogramaCmp from "@/components/cronograma/Cronograma.vue";
import CustomTemplate from "@/components/template/Template.vue";
import DialogAtividade from "@/components/atividades/AtividadeDialog.vue";
import DialogMateria from "@/components/materias/MateriaDialog.vue";
import DialogAnotacao from "@/components/anotacoes/AnotacaoDialog.vue";

export default {
  components: {
    CronogramaCmp,
    CustomTemplate,
    PButton,
    DialogAtividade,
    DialogMateria,
    DialogAnotacao,
    Speeddial,
  },
  data() {
    return {
      showDialogAtividade: false,
      showDialogMateria: false,
      showDialogAnotacao: false,
      items: [
        {
          label: "Atividade",
          icon: "pi pi-paperclip",
          command: () => {
            this.showDialogAtividade = true;
          },
        },
        {
          label: "Matéria",
          icon: "pi pi-bookmark-fill",
          command: () => {
            this.showDialogMateria = true;
          },
        },
        {
          label: "Anotação",
          icon: "pi pi-pencil",
          command: () => {
            this.showDialogAnotacao = true;
          },
        },
        {
          label: "Curso",
          icon: "pi pi-book",
          command: () => {},
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
$margin-button: 4rem;

cronograma {
  margin-top: 2rem;
  margin-inline-start: auto;
  margin-inline-end: auto;
}

.div-button {
  width: 3.5rem !important;
  height: 3.5rem !important;
  position: fixed;
  bottom: $margin-button;
  right: $margin-button;
}
</style>