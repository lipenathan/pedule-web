<template>
  <div>
    <p-dialog
      v-model:visible="show"
      :draggable="false"
      modal
      @after-hide="closeDialog"
      :style="{ width: '50rem' }"
    >
      <template #header>
        <h3 v-if="!update">Nova Atividade</h3>
        <!-- v-if para mudar o título para novo caso seja update == false -->
        <h3 v-else>Editar Atividade</h3>
        <!-- v-if para mudar o título para edição caso seja update == true -->
      </template>
      <div class="content">
        <div class="inputtext">
          <span class="p-float-label p-input-icon-left">
            <i class="pi pi-search" />
            <p-input-text
              :style="{ width: '45rem' }"
              id="inputtext-left"
              type="text"
              v-model="tituloForm"
            />
            <label for="inputtext-left">Título atividade</label>
          </span>
          <small
            v-if="
              (v$.tituloForm.$invalid && submitted) ||
              v$.tituloForm.$pending.$response
            "
            class="p-error"
            >{{ tituloAtividadeRequired }}</small
          >
        </div>
        <div class="inputtext2">
          <span class="p-float-label p-input-icon-left">
            <i class="fa-regular fa-pen-to-square"></i>
            <p-text-area
              :style="{ width: '45rem' }"
              id="inputtext-left2"
              type="text"
              v-model="descricaoForm"
            />
            <label for="inputtext-left">Descrição</label>
          </span>
        </div>

        <div>
          <h4>Prioridade?</h4>
          <p-toggle-button v-model="prioridadeForm" class="p-button-rounded p-button-raised" onLabel="Sim" offLabel="Não" ></p-toggle-button>
        </div>

        <div class="inputtext3">
          <span class="p-float-label p-input-icon-left">
            <!-- <i class="pi-calendar"></i> -->
            <p-calendar :stepSecond="60" :showTime="true" :showSeconds="true" :stepMinute="15"  dateFormat="dd/mm/yy" id="inputtext-left2" v-model="dataForm" />
            <label for="" id="lb_icon_calendar"
              ><i class="fa-solid fa-calendar-days"></i
            ></label>
            <label for="inputtext-left">Data de entrega</label>
          </span>
          <small
            v-if="
              (v$.dataForm.$invalid && submitted) ||
              v$.dataForm.$pending.$response
            "
            class="p-error"
            >{{ dataEntregaRequired }}</small
          >
        </div>
      </div>
      <template #footer>
        <p-button class="button-submit" v-if="!update" @click="submitForm"
          >Criar nova Atividade</p-button
        >
        <!-- v-if para mudar label do botão -->
        <p-button class="button-submit" v-else @click="submitForm"
          >Salvar</p-button
        >
      </template>
    </p-dialog>
  </div>
</template>
  <script>
import PDialog from "primevue/dialog";
import PInputText from "primevue/inputtext";
import PTextArea from "primevue/textarea";
import PButton from "primevue/button";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useToast } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
import PCalendar from "primevue/calendar";
import PToggleButton from "primevue/togglebutton";

import api from "@/services/API";
export default {
  setup: () => ({ v$: useVuelidate() }),
  components: {
    PDialog,
    PInputText,
    PTextArea,
    PButton,
    PCalendar,
    PToggleButton,
  },
  data() {
    return {
      tituloForm: "",
      descricaoForm: "",
      dataForm: null,
      prioridadeForm: false,
      feitoForm: false,
      usuario: { id: 3 },

      switchColor: true,
      submitted: false, //flag que diz se formulário já foi submetido
      tituloAtividadeRequired: "Título da atividade é obrigatório", //constante de mensagem de erro de título da matéria
      dataEntregaRequired: "Data de entrea da atividade é obrigatório",
      camposObrigatorioMessage: "Preencha os Campos obrigatórios",
      toast: useToast(),
    };
  },
  props: {
    show: Boolean,
    update: Boolean,
    atividade: {
      titulo: String,
      descricao: String,
      dataHorarioEntrega: Date,
    },
  },
  methods: {
    submitForm() {
      this.submitted = true;
      alert(this.dataForm)
      console.log(this.dataForm)
      if (!this.v$.$invalid) {
        api()
          .post("/atividade/novo", {
            titulo: this.tituloForm,
            descricao: this.descricaoForm,
            prioridade: this.prioridadeForm,
            dataHorarioEntrega: this.dataForm,
            usuario: this.usuario,
          })
          .then((res) => {
            this.toast.success("Atividade cadastrada com sucesso", {
              position: POSITION.TOP_CENTER,
            });
            this.tituloForm = "";
            this.descricaoForm = "";
            this.dataForm = null;
            this.submitted = false;
            this.closeDialog();
          });
      } else {
        this.toast.error(this.camposObrigatorioMessage, {
          position: POSITION.TOP_CENTER,
        });
      }
    },
    
    closeDialog() {
      this.$emit("closedDialog", true); //emitindo evento para quando o dialog é fechado
    },
    /**
     * lógica para ser usada no fluxo de edição:
     * Ao receber o objeto a ser editado via props e a flag de edição(update) == true
     * os campos dos formulários serão preenchidos conforme objeto recebido pelo componente pai
     */
    setAtividade() {
      if (this.update) {
        // alert("Chegou");
        // console.log(this.update);
        this.tituloForm = this.atividade.titulo;
        this.descricaoForm = this.atividade.descricao;
        this.dataForm = this.atividade.dataHorarioEntrega;
      }
    },
  },
  validations() {
    return {
      tituloForm: { required },
      dataForm: { required },
    };
  },
  created() {
    this.setAtividade();
  },
};
</script>
  
  <style lang="scss" scoped>
.inputtext {
  height: auto;
  margin-top: 2rem;
}

.inputtext2 {
  height: auto;
  margin-top: 2rem;
}

.inputtext3 {
  height: auto;
  margin-top: 2rem;
}

.p-colorpicker {
  margin-inline-start: 5rem;
}

#switch-cor {
  display: block;
}
#lb_icon_calendar {
  margin-left: -23px;
}
</style>