<template>
  <div class="div_atividade_pai">
    <div class="div_atividade">
      <input type="checkbox" name="" id="inp_check" />
      <h3 class="nome_atividade" @click="openUpdateDialog(item)">{{ atividade.titulo }}</h3>
      <span class="data_atividade">{{ atividade.dataHorarioEntrega }}</span>
      <label class="check_prioridade">
        <input
          v-model="prioridadeForm"
          type="checkbox"
          @click="changeCheck()"
        />
        <span></span>
      </label>
      <span class="icon_trash" @click="openDialog()"
        ><i class="fa-solid fa-trash-can"></i
      ></span>
    </div>
    <div class="titulo_drescricao">
      <h4>Descrição</h4>
    </div>
    <div class="dv_descricao">
      <p>
        {{ atividade.descricao }}
      </p>
    </div>
    <PDialog
      v-model:visible="showEDialog"
      @after-hide="showEDialog = false"
      modal
      :draggable="false"
    >
      <template #header>
        <h3>Confirmação</h3>
      </template>

      <div>
        {{ mensagemExcluir }}
      </div>

      <template #footer>
        <PButton
          label="Não"
          icon="pi pi-times"
          class="p-button-text"
          @click="showEDialog = false"
        />
        <PButton label="Sim" icon="pi pi-check" autofocus @click="excluir"  />
      </template>
    </PDialog>
  </div>
  <atividade-dialog
      @closedDialog="showDialog = false"
      :show="showDialog"
      :update="updateDialog"
      :atividade="atividadeUpdate"
    ></atividade-dialog>
</template>

<script>
import api from "@/services/API";
import PButton from "primevue/button";
import PDialog from "primevue/dialog";
import AtividadeDialog from "@/components/atividades/AtividadeDialog.vue";

export default {
  components: {PButton, PDialog, AtividadeDialog },
  data() {
    return {
      prioridadeForm: false,
      showDialog: false,
      showEDialog:false,
      updateDialog: false,
      mensagemExcluir: "Deseja realmente excluir?",
    };
  },
  props: {
    atividade: {
      id: 0,
      titulo: "",
      descricao: "",
      dataHorarioEntrega: "",
      prioridade: false,
      categoria: "",
      entregue: false,
    },
  },
  methods: {
    openDialog() {
      this.showEDialog = !this.showEDialog;
    },

    openUpdateDialog(){
      this.showDialog = !this.showDialog;
      this.updateDialog = !this.updateDialog;
    },
    

    changeCheck() {
      api().post("/atividade/atualizar", {
        id: this.atividade.id,
        titulo: this.atividade.titulo,
        descricao: this.atividade.descricao,
        prioridade: this.prioridadeForm,
        dataHorarioEntrega: this.atividade.dataHorarioEntrega,
        usuario: { id: this.atividade.usuario.id },
      });
    },

    setAtividade() {
      this.prioridadeForm = this.atividade.prioridade;
    },

    excluir() {
      this.$emit("delete", true)
      this.showEDialog = false
    },
  },
  created() {
    this.setAtividade();
  },
};
</script>

<style scoped>
.titulo_drescricao {
  display: flex;
  align-items: center;
  margin-left: 18px;
  height: 20px;
}

.dv_descricao {
  display: flex;
  height: 40px;
  margin-left: 18px;
}

.dv_descricao p {
  display: flex;
  text-align: left;
  font-size: 13px;
  margin: 0;
  width: auto;
  height: 40px;
}

.div_atividade {
  display: flex;
  height: 40px;
  align-items: center;
}
.div_atividade_pai {
  display: flex;
  flex-direction: column;
  width: 54rem;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 8px;
  /* margin-left: 250px; */
  height: 100px;
}

.nome_atividade {
  display: flex;
  height: 30px;
  width: 170px;
  margin-left: 37px;
  border-radius: 6px;
  background-color: rgba(137, 43, 226, 0.616);
  border: none;
  padding-left: 3px;
  cursor: pointer;
  font-size: 14px;
  align-items: center;
}

.data_atividade {
  height: 30px;
  width: 170px;
  margin-left: 63px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  background-color: rgba(233, 233, 157, 0.801);
  border: 1px solid rgb(126, 125, 125);
}

#inp_check {
  margin-left: 18px;
  width: 18px;
  height: 18px;
}

.check_prioridade input {
  display: none;
}

.check_prioridade span {
  width: 18px;
  height: 18px;
  display: block;
  background-color: #8bffa5;
  margin-left: 65px;
  border-radius: 15px;
}

.check_prioridade input:checked + span {
  background-color: #ff8b8b;
}

input[type="button"] {
  margin-left: 185px;
  border: none;
}
.icon_trash {
  margin-left: 196px;
  opacity: 0.6;
  font-size: 20px;
  cursor: pointer;
}
</style>