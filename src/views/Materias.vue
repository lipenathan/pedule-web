<template>
  <div>
    <navbar />
    <h1>Tela a ser Implementada</h1>
  </div>
  <div class="dialog">
    <!-- <p-button @click="showDialog = !showDialog">Show Materia Dialog</p-button> -->
    <dialog-materia
      :show="showDialog"
      @closedDialog="showDialog = false"
      :update="false"
      :materia="materia"
    ></dialog-materia>
    <p-button
      id="plus"
      class="p-button-raised p-button-rounded button-add"
      icon="pi pi-plus"
      @click="showDialog = !showDialog"
    />
    <materia-item v-for="item in materias" :key="item.id" :materia="item"></materia-item>
  </div>
</template>
<script>
import Navbar from "@/components/template/Navbar.vue";
import DialogMateria from "@/components/materias/MateriaDialog.vue";
import MateriaItem from '@/components/materias/MateriaItem.vue'

import PButton from "primevue/button";
import PDataTable from 'primevue/datatable'

import api from '@/services/API'

export default {
  components: { Navbar, DialogMateria, PButton, PDataTable, MateriaItem },
  data() {
    return {
      showDialog: false,
      usuario: {
        id: 16
      },
      materias: [{
        id: null,
        titulo: "",
        professor: "",
        descricao: "",
        cor: "",
        usuario: {},
        semanaHorario: []
      }]
    };
  },
  methods: {
    buscarMaterias() {
      api().get(`/materia/listar/${this.usuario.id}`).then((res) => {
        this.materias = res.data
        console.log(this.materias)
      })
    }
  },
  created() {
    this.buscarMaterias()
  }
};
</script>
<style lang="scss" scoped>
.dialog {
  margin-top: 4rem;
}

.button-add{
  width: 3.5rem!important;
  height: 3.5rem!important;
  position: absolute;

}
</style>