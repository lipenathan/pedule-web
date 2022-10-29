<template>
  <div>
    <p-dialog
      v-model:visible="show"
      :draggable="false"
      modal
      :showHeader="false"
      :showFooter="false"
      @after-hide="closeDialog"
      :style="{ width: '50rem' }"
    >
      <div class="content">
        <p-button class="button-submit" v-if="!update" @click="submitForm"
          >Criar nova Matéria</p-button
        >
        <p-button class="button-submit" v-else @click="submitForm"
          >Salvar</p-button
        >
      </div>
    </p-dialog>
  </div>
</template>
<script>
//primevue
import PDialog from "primevue/dialog";
import PInputText from "primevue/inputtext";
import PTextArea from "primevue/textarea";
import PButton from "primevue/button";
import PColorPicker from "primevue/colorpicker";
import PInputSwitch from "primevue/inputswitch";
//validation
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
//toast
import { useToast } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
//local
import DiaSemana from "@/components/materias/DiaSemana.vue";

import api from "@/services/API";
export default {
  setup: () => ({ v$: useVuelidate() }),
  components: {
    PDialog,
    PInputText,
    PTextArea,
    PButton,
    PColorPicker,
    PInputSwitch,
    DiaSemana,
  },
  data() {
    return {
      tituloForm: "",
      descricaoForm: "",
      professorForm: "",
      corForm: "",
      usuario: {
        id: 16,
      },
      semanaHorarioForm: [
        {
          diaSemanaForm: null,
          horario: {
            horaForm: "",
            minutoForm: "",
          },
        },
      ],

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
          horario: {
            hour: 0,
            minute: 0,
            second: 0,
            nano: 0,
          },
          semana: {
            id: 0,
          },
        },
      ],
    },
  },
  methods: {
    submitForm() {
      this.submitted = true;
      if (!this.v$.$invalid) {
        let listSemanaHorario = [];
        for (let i in this.semanaHorarioForm) {
          let diaSemana = this.semanaHorarioForm[i];
          listSemanaHorario.push({
            semana: {
              id: diaSemana.diaSemanaForm,
            },
            horario: `${diaSemana.horario.horaForm}:${diaSemana.horario.minutoForm}:00`,
          });
        }
        if (!this.switchColor) {
          this.corForm = "";
        }
        api()
          .post("/materia/novo", {
            titulo: this.tituloForm,
            descricao: this.descricaoForm,
            professor: this.professorForm,
            cor: this.corForm,
            usuario: this.usuario,
            semanaHorario: listSemanaHorario,
          })
          .then((res) => {
            this.toast.success("Matéria cadastrada com sucesso", {
              position: POSITION.TOP_CENTER,
              timeout: 2500,
            });
            this.tituloForm = "";
            this.descricaoForm = "";
            this.professorForm = "";
            this.corForm = "";
            this.semanaHorarioForm = [];
            this.closeDialog();
            this.submitted = false;
          })
          .catch((error) => {
            this.toast.error(error.message, {
              position: POSITION.TOP_CENTER,
            });
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
        this.tituloForm = this.materia.titulo;
        this.descricaoForm = this.materia.descricao;
        this.professorForm = this.materia.professor;
        this.corForm = this.materia.cor;
        this.semanaHorarioForm = this.materia.semanaHorario;
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
.content {
  background-color: red;
  width: 100%;
  height: 100%;
}

.p-dialog {
    background-color: red;
}
</style>