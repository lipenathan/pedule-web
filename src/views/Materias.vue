<template>
  <div>
    <custom-template>
      <template v-slot:content>
        <div class="materias">
          <materia-item
            v-for="item in materias"
            :key="item.id"
            :materia="item"
            @edit="openUpdateDialog(item)"
          ></materia-item>
        </div>
      </template>
    </custom-template>
    <p-button
      class="p-button-raised p-button-rounded button-add"
      icon="pi pi-plus"
      @click="openDialog(false)"
    />
    <dialog-materia
      :show="showDialog"
      @closedDialog="showDialog = false"
      @updateList="buscarMaterias()"
      :update="update"
      v-bind:materia="materia"
    ></dialog-materia>
  </div>
</template>
<script>
import DialogMateria from "@/components/materias/MateriaDialog.vue";
import MateriaItem from "@/components/materias/MateriaItem.vue";
import PButton from "primevue/button";
import PDataTable from "primevue/datatable";
import CustomTemplate from "@/components/template/Template.vue";

import api from "@/services/API";

export default {
  components: {
    DialogMateria,
    PButton,
    PDataTable,
    MateriaItem,
    CustomTemplate,
  },
  data() {
    return {
      showDialog: false,
      update: false,
      usuario: {
        id: 16,
      },
      materias: [
        {
          id: null,
          titulo: "",
          professor: "",
          descricao: "",
          cor: "",
          usuario: {},
          semanaHorario: [],
        },
      ],
      materia: {},
    };
  },
  methods: {
    buscarMaterias() {
      api()
        .get(`/materia/listar/${this.usuario.id}`)
        .then((res) => {
          this.materias = res.data;
        });
    },
    openDialog(update) {
      this.showDialog = true;
      this.update = update;
    },
    openUpdateDialog(materia) {
      this.materia = materia;
      this.openDialog(true);
    },
  },
  created() {
    this.buscarMaterias();
  },
};
</script>
<style lang="scss" scoped>
$margin-button: 4rem;

dialog-materia {
  margin-top: 4rem;
}

.materias {
  height: 25rem;
  width: 65rem;
  overflow: auto;
  overflow-x: none;
  border: solid 1px gray;
  border-radius: 10px;
}

.button-add {
  width: 3.5rem !important;
  height: 3.5rem !important;
  position: fixed;
  bottom: $margin-button;
  right: $margin-button;
}
</style>