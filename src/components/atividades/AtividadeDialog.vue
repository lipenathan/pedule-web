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
              >{{ tituloMateriaRequired }}</small
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
  
  import api from "@/services/API";
  export default {
    setup: () => ({ v$: useVuelidate() }),
    components: {
      PDialog,
      PInputText,
      PTextArea,
      PButton,
    },
    data() {
      return {
        tituloForm: "",
        descricaoForm: "",
        dataForm: null,
        prioridadeForm: false,
        feitoForm: false,

  
        switchColor: true,
        submitted: false, //flag que diz se formulário já foi submetido
        tituloMateriaRequired: "Título da matéria é obrigatório", //constante de mensagem de erro de título da matéria
        camposObrigatorioMessage: "Preencha os Campos obrigatórios",
        toast: useToast(),
      };
    },
    props: {
      show: false,
      update: false,
      materia: {
        titulo: "",
        professor: "",
        descricao: "",
        cor: "",
        usuario: {
          nome: "",
          email: "",
          dataNascimento: "",
          instituicao: "",
          emailAtivo: false,
          senha: "",
        },
        semanaHorario: [
          {
            id: 0,
            horario:
            "",
          //    {
          //     hour: 0,
          //     minute: 0,
          //     second: 0,
          //     nano: 0,
          //   },
            semana: {
              id: 0,
              nome: "",
            },
          },
        ],
      },
    },
    methods: {
      submitForm() {
        this.submitted = true;
        if (!this.v$.$invalid) {
          api()
            .post("/materia/novo", {
              titulo: this.tituloForm,
              descricao: this.descricaoForm,
            })
            .then((res) => {});
        } else {
          this.toast.error(this.camposObrigatorioMessage, {
            position: POSITION.TOP_CENTER,
          });
        }
      },
      closeDialog() {
        this.$emit("closedDialog", true); //emitindo evento para quando o dialog é fechado
      },
      disableColorPicker() {
        if (!switchColor) {
        }
      },
      /**
       * lógica para ser usada no fluxo de edição:
       * Ao receber o objeto a ser editado via props e a flag de edição(update) == true
       * os campos dos formulários serão preenchidos conforme objeto recebido pelo componente pai
       */
      setMateria() {
        if (this.update) {
          this.tituloForm = this.materia.titulo
          this.descricaoForm = this.materia.descricao
          this.professorForm = this.materia.professor
          this.corForm = this.materia.cor
          this.semanaHorarioForm = this.materia.semanaHorario
        }
      },
    },
    validations() {
      return {
        tituloForm: { required },
      };
    },
    created() {
      this.setMateria();
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  .inputtext {
    height: auto;
    margin-top: 2rem;
  }
  
  .p-colorpicker {
    margin-inline-start: 5rem;
  }
  
  #switch-cor {
    display: block;
  }
  </style>