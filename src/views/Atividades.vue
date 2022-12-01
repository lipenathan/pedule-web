<template>
  <div>
    <custom-template>
      <template v-slot:content>
        <div class="atividades_list">
          <div class="header_atividade">
            <ul>
              <li>Atividades</li>
              <li>Prazo</li>
              <li>Prioridade</li>
              <li>Excluir</li>
            </ul>
          </div>
          <div class="list">
            <atividade-item
              v-for="item in atividades"
              @itemClicked="openUpdateDialog(item)"
              @delete="deleteAtividade(item)"
              :key="item.id"
              :atividade="item"
            ></atividade-item>
            <template v-if="atividades.length == 0">
              <h4 class="empty-list">
                As suas atividades aparecerão aqui
              </h4>
            </template>
          </div>
        </div>
      </template>
    </custom-template>
    <p-button
      class="p-button-raised p-button-rounded button-add"
      icon="pi pi-plus"
      @click="openDialog(false)"
    />

    <atividade-dialog
      @closedDialog="showDialog = false"
      @itemSaved="getAtividades()"
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
import { useToast } from "vue-toastification";
import { POSITION } from "vue-toastification";
import CustomTemplate from "@/components/template/Template.vue";
import api from "@/services/API";
import { mapGetters } from "vuex";
export default {
  components: {
    Navbar,
    AtividadeDialog,
    PButton,
    AtividadeItem,
    CustomTemplate
  },
  data() {
    return {
      showDialog: false,
      updateDialog: false,
      atividades: [],
      atividadeUpdate: null,
      toast: useToast(),
    };
  },
  methods: {
    getAtividades() {
      api
        .get(`/atividade/listar/${this.usuario.id}`)
        .then((res) => {
          let resData = res.data;
          this.atividades = resData.sort((a, b) => Number(b.bool) - Number(a.bool))
        });
    },
    openDialog(update) {
      this.updateDialog = update
      this.showDialog = !this.showDialog;
    },
    openUpdateDialog(item) {
      this.atividadeUpdate = item;
      this.openDialog(true);
    },
    async deleteAtividade(item) {
      api
        .delete(`/atividade/deletar/${item.id}`)
        .then((res) => {
          this.getAtividades();
          this.toast.success("Atividade deletada com sucesso", {
            position: POSITION.TOP_CENTER,
          });
        })
        .catch((error) => {
          this.toast.error("Erro ao excluir atividade", {
            position: POSITION.TOP_CENTER,
          });
        });
    },
  },
  created() {
    this.getAtividades();
  },
  computed: {
    ...mapGetters(["usuario"]),
  },
};
</script>

<style lang="scss" scoped>
$margin-button: 4rem;

body {
  display: flex;
  justify-content: center;
}

.atividades_list {
  height: 25rem;
  width: 65rem;
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

.list {
  text-align: center;
}

.empty-list {
  height: 100%;
  float: none;
  margin-top: auto;
  margin-bottom: auto;
}

.button-add {
  width: 3.5rem !important;
  height: 3.5rem !important;
  position: fixed;
  bottom: $margin-button;
  right: $margin-button;
}
</style>