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
            <i class="pi pi-search" />
            <p-input-text
              :style="{ width: '45rem' }"
              id="inputtext-left"
              type="text"
              v-model="tituloMateria"
            />
            <label for="inputtext-left">Título matéria</label>
          </span>
          <small
                v-if="
                  (v$.tituloMateria.$invalid && submitted) ||
                  v$.tituloMateria.$pending.$response
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
                  v-model="descricao"
                  rows="3"
                />
                <label for="textarea">Descrição Matéria</label>
              </span>
            </div>
          </span>
        </div>
        <div class="inputtext">
          <span class="p-float-label p-input-icon-left">
            <i class="pi pi-search" />
            <p-input-text
              :style="{ width: '45rem' }"
              id="inputtext-left"
              type="text"
              v-model="professor"
            />
            <label for="inputtext-left">Professor</label>
          </span>
        </div>
        <div class="inputtext">
          <label>Cor</label>
          <p-input-switch
            id="switch-cor"
            v-model="switchColor"
            aria-labelledby="switch-color"
          />
          <label for="cor">Selecione uma cor para a matéria (opcional)</label>
          <p-color-picker id="cor" v-model="cor" :disabled="!switchColor" />
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
import PDialog from "primevue/dialog";
import PInputText from "primevue/inputtext";
import PTextArea from "primevue/textarea";
import PButton from "primevue/button";
import PColorPicker from "primevue/colorpicker";
import PInputSwitch from "primevue/inputswitch";
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
    PColorPicker,
    PInputSwitch,
  },
  data() {
    return {
      tituloMateria: "",
      descricao: "",
      professor: "",
      cor: "",
      switchColor: true,
      submitted: false, //flag que diz se formulário já foi submetido
      tituloMateriaRequired: "Título da matéria é obrigatório", //constante de mensagem de erro de título da matéria
      camposObrigatorioMessage: "Preencha os Campos obrigatórios",
      toast: useToast()
    };
  },
  props: {
    show: false,
    update: false,
  },
  methods: {
    submitForm() {
      this.submitted = true;
      if (!this.v$.$invalid) {
        //   api()
        //     .post("/materia/novo", {})
        //     .then((res) => {});
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
  },
  validations() {
    return {
      tituloMateria: { required },
    };
  },
};
</script>

<style lang="scss" scoped>
.materia-dialog ::v-deep .p-dialog {
  background-color: red;
  width: 100rem;
}

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