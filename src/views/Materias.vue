<template>
  <div>
    <navbar />
    <sidebar/>
    <div class="content">
      <div class="materias">
        <materia-item
          v-for="item in materias"
          :key="item.id"
          :materia="item"
          @edit="openUpdateDialog(item)"
        ></materia-item>
      </div>
      <calendar class="calendar" />
    </div>
  </div>
  <div class="dialog">
    <dialog-materia
      :show="showDialog"
      @closedDialog="showDialog = false"
      :update="update"
      v-bind:materia="materia"
    ></dialog-materia>
    <p-button
      class="p-button-raised p-button-rounded button-add"
      icon="pi pi-plus"
      @click="openDialog(false)"
    />
  </div>
</template>
<script>
import Navbar from "@/components/template/Navbar.vue";
import DialogMateria from "@/components/materias/MateriaDialog.vue";
import MateriaItem from "@/components/materias/MateriaItem.vue";
import Sidebar from "@/components/template/Sidebar.vue";
import PButton from "primevue/button";
import PDataTable from "primevue/datatable";

import api from "@/services/API";

export default {
  components: {
    Navbar,
    DialogMateria,
    PButton,
    PDataTable,
    MateriaItem,
    Sidebar,
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
      materia: {}
    };
  },
  methods: {
    buscarMaterias() {
      api()
        .get(`/materia/listar/${this.usuario.id}`)
        .then((res) => {
          this.materias = res.data;
          console.log(this.materias)
        });
    },
    openDialog(update) {
      this.showDialog = true
      this.update = update
    },
    openUpdateDialog(materia) {
      this.materia = materia
      this.openDialog(true)
    }
  },
  created() {
    this.buscarMaterias();
  },
};
</script>
<style lang="scss" scoped>
$margin-button: 4rem;

.content {
  margin-top: 2rem;
  margin-left: 200px;
  margin-right: auto;
  padding: 1px;
  display: flex;
}

.dialog {
  margin-top: 4rem;
}

.button-add {
  width: 3.5rem !important;
  height: 3.5rem !important;
  position: fixed;
  bottom: $margin-button;
  right: $margin-button;
}

.materias {
  height: 25rem;
  width: 65rem;
  overflow: auto;
  overflow-x: none;
  border: solid 1px gray;
  border-radius: 10px;
}
</style>