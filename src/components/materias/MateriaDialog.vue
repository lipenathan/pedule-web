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
        <h3 v-if="!update">Nova Matéria</h3>
        <!-- v-if para mudar o título para novo caso seja update == false -->
        <h3 v-else>Editar Matéria</h3>
        <!-- v-if para mudar o título para edição caso seja update == true -->
      </template>
      <div class="content">
        <div class="inputtext">
          <span class="p-float-label p-input-icon-left">
            <i class="pi pi-book" />
            <p-input-text
              :style="{ width: '45rem' }"
              id="inputtext-left"
              type="text"
              v-model="tituloForm"
            />
            <label for="inputtext-left">Título matéria</label>
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
        <div class="inputtext">
          <span class="p-float-label p-input-icon-left">
            <i class="pi pi-search" />
            <div class="field col-12 md:col-4">
              <span class="p-float-label">
                <p-text-area
                  id="textarea"
                  :style="{ width: '45rem' }"
                  v-model="descricaoForm"
                  rows="3"
                />
                <label for="textarea">Descrição Matéria</label>
              </span>
            </div>
          </span>
        </div>
        <div class="inputtext">
          <span class="p-float-label p-input-icon-left">
            <i class="pi pi-user" />
            <p-input-text
              :style="{ width: '45rem' }"
              id="inputtext-left"
              type="text"
              v-model="professorForm"
            />
            <label for="inputtext-left">Professor</label>
          </span>
        </div>
        <div class="inputtext">
          <dia-semana @updated="semanaHorarioForm = $event"></dia-semana>
        </div>
        <div class="inputtext">
          <label>Cor</label>
          <p-input-switch
            id="switch-cor"
            v-model="switchColor"
            aria-labelledby="switch-color"
          />
          <label for="cor">Selecione uma cor para a matéria (opcional)</label>
          <p-color-picker id="cor" v-model="corForm" :disabled="!switchColor" />
        </div>
      </div>
      <template #footer>
        <p-button class="button-submit" v-if="!update" @click="submitForm"
          >Criar nova Matéria</p-button
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
              position: POSITION.TOP_CENTER, timeout: 2500,
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