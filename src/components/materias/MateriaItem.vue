<template>
  <div class="item" :style="{ background: '#' + materia.cor }">
    <h3>{{ materia.titulo }}</h3>
    <p-button @click="edit()" class="edit" icon="pi pi-pencil"></p-button>
    <p-button
      class="delete"
      icon="pi pi-trash"
      @click="dialog = true"
    ></p-button>
    <p-dialog v-model:visible="dialog" @after-hide="dialog = false">
      <template #header>
        <h3>Confirmação</h3>
      </template>
      <p>Deseja realmente excluir está matéria?</p>
      <template #footer>
        <p-button
          label="Sim"
          icon="pi pi-times"
          class="p-button-text"
          @click="deletar()"
        />
        <p-button label="Não" icon="pi pi-check" @click="dialog = false" />
      </template>
    </p-dialog>
  </div>
</template>
<script>
import PButton from "primevue/button";
import PDialog from "primevue/dialog";
import api from "@/services/API";
import { useToast } from "vue-toastification";
import { POSITION } from "vue-toastification";

export default {
  components: { PButton, PDialog },
  data() {
    return {
      dialog: false,
      toast: useToast(),
    };
  },
  props: {
    materia: {
      id: null,
      titulo: "",
      professor: "",
      descricao: "",
      cor: "",
      usuario: {},
      semanaHorario: [],
    },
  },
  methods: {
    edit() {
      this.$emit("edit", true);
    },
    deletar() {
      api
        .delete(`/materia/deletar/${this.materia.id}`)
        .then((res) => {
          this.toast.success("Matéria deletada com sucesso", {
            position: POSITION.TOP_CENTER,
            timeout: 2500,
          });
          this.$emit("itemSaved", true);
          this.dialog = false;
        })
        .catch((error) => {
          this.toast.error("Erro ao deletar matéria", {
            position: POSITION.TOP_CENTER,
            timeout: 2500,
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$button-size: 3rem;

.item {
  width: 98%;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 10px;
  border: 1px solid;
  height: 3rem;
  display: flex;
  align-items: center;
}

.item > h3 {
  margin-left: 1rem;
  width: fit-content;
}

.item > .edit {
  width: min-content;
  margin-right: 1rem;
  margin-left: auto;
}

.item > .delete {
  margin-right: 1rem;
  width: min-content;
}

.p-button {
  background-color: transparent;
  border: none;
  color: black;
}

.p-button:enabled:hover {
  background: transparent;
  color: #ffffff;
  border-color: none;
}

.p-button,
p-button:enabled:hover {
  border-radius: 50px;
  width: $button-size;
  height: $button-size;
}
</style>