<template>
  <div>
    <div>
      <navbar />
    </div>
    <body>
      <div class="atividades_list">
        <div class="header_atividade">
          <ul>
            <li>Atividades</li>
            <li>Prazo</li>
            <li>Prioridade</li>
            <li>Excluir</li>
          </ul>
        </div>

        <atividade-item
          v-for="item in atividades"
          @itemClicked="openUpdateDialog(item)"
          @delete="deleteAtividade(item)"
          :key="item.id"
          :atividade="item"
        ></atividade-item>
      </div>
    </body>

    <p-button @click="openDialog()" class="btn-new-activity"
      >Nova Atividade</p-button
    >

    <atividade-dialog
      @closedDialog="showDialog = false"
      :show="showDialog"
      :update="updateDialog"
      :atividade="atividadeUpdate"
    ></atividade-dialog>
  </div>
</template>
<script>
import AtividadeItem from "@/components/atividades/AtividadeItem.vue";
import Navbar from "@/components/template/Navbar.vue";
import PButton from "primevue/button";
import AtividadeDialog from "@/components/atividades/AtividadeDialog.vue";
import api from "@/services/API";
export default {
  components: { Navbar, AtividadeDialog, PButton, AtividadeItem },
  data() {
    return {
      showDialog: false,
      updateDialog: false,
      atividades: [],
      atividadeUpdate: null,
    };
  },
  methods: {
    openDialog() {
      // this.updateDialog = dialogUpdate;
      this.showDialog = !this.showDialog;
    },
    getAtividades() {
      api()
        .get("/atividade/listar/3")
        .then((res) => {
          this.atividades = res.data;
        });
    },

    openUpdateDialog(item) {
      this.atividadeUpdate = item;
      this.openDialog(true);
    },
    deleteAtividade(item){
      alert(`${item.id} ${item.titulo} `)
    }
  },
  created() {
    this.getAtividades();
  },
  
};
</script>

<style scoped>

body{
  display: flex;
  justify-content: center;
}

.atividades_list {
  height: 25rem;
  width: 55rem;
  overflow: auto;
  overflow-x: none; 
  border: solid 1px gray;
  border-radius: 10px;
}

.header_atividade {
  background-color: #b9b9b9;
  width: 100%;
  display: flex;
  /* margin: auto; */
}

ul {
  display: flex;
  list-style-type: none;
  width: 100vw;
  padding: 0;
  justify-content: space-around;
}
li {
  font-weight: bold;
  font-size: 18px;
  color: #3d3939;
}
.btn-new-activity {
  margin-left: -1140px;
  margin-top: -700px;
}
</style>