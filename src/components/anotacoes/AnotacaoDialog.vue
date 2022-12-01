<template>
  <div class="container mt-5">
    <div class="modal fade" id="myModal" data-bs-backdrop="static">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              @click="closedDialog()"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <input
                type="text"
                id="titulo"
                class="form-control"
                v-model="tituloForm"
                placeholder="Titulo"
              />
            </div>
            <small
              v-if="
                (v$.tituloForm.$invalid && submitted) ||
                v$.tituloForm.$pending.$response
              "
              class="p-error"
              >{{ tituloAnotacaoRequired }}</small
            >
            <div class="mb-3">
              <textarea
                class="form-control"
                name=""
                id=""
                cols="30"
                rows="10"
                v-model="descricaoForm"
                placeholder="Descrição"
              ></textarea>
            </div>
            <div class="link">
              <div class="buttons">
                <p-button
                  label="Link"
                  id="plus"
                  class="p-button-raised p-button-rounded"
                  icon="pi pi-plus"
                  @click="addLinkField()"
                />

                <p-button
                  label="Link"
                  id="minus"
                  class="p-button-raised p-button-rounded p-button-danger"
                  icon="pi pi-minus"
                  @click="deleteLinkField()"
                />
              </div>

              <linkvue
                v-for="(item, index) in linkForm"
                :key="item.id"
                :link="item"
                :update="update"
                @updateValue="updateValue($event, [index])"
              />
            </div>

            <div class="mb-3" id="lembrete">
              <label class="form-label" for="">Lembrete</label>

              <p-input-switch
                id="Lembrete"
                v-model="lembreteForm"
                aria-labelledby="Lembrete"
              />

              <Datepicker
                v-if="lembreteForm"
                class="inputdatepicker"
                v-model="dataHorarioForm"
                placeholder="Selecione uma data e hora"
                locale="pt-BR"
                cancelText="cancelar"
                selectText="selecionar"
                monthNameFormat="long"
                :minDate="new Date()"
                :filters="filters"
                minutesIncrement="15"
                minutesGridIncrement="15"
                noMinutesOverlay
                :startTime="startTime"
                :modelValue="dataHorarioForm"
              />
              <small
                v-if="
                  (v$.dataHorarioForm.$invalid && submitted) ||
                  v$.dataHorarioForm.$pending.$response
                "
                class="p-error"
                >{{ dataHorarioFormRequired }}</small
              >
            </div>
            <div class="modal-footer">
              <button v-if="update" @click="submit()" class="btn col-1">
                <i class="fas fa-check"></i>
              </button>
              <button v-if="update" @click="deleteAnotacao()" class="btn col-1">
                <i class="far fa-trash-alt"></i>
              </button>
              <button
                v-else
                class="btn btn-primary col-6 mx-auto"
                @click="submit()"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";

import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useToast } from "vue-toastification";
import { POSITION } from "vue-toastification";
import PInputSwitch from "primevue/inputswitch";
import PButton from "primevue/button";
import api from "@/services/API";
import linkvue from "@/components/anotacoes/Link.vue";
import PCalendar from "primevue/calendar";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { mapGetters } from "vuex";
import { ref } from "vue";

export default {
  setup: () => {
    const v$ = useVuelidate();
    const startTime = ref({ hours: 0, minutes: 0 });

    return {
      v$,
      startTime,
    };
  },
  components: {
    PInputSwitch,
    PButton,
    linkvue,
    PCalendar,
    Datepicker,
  },
  data() {
    return {
      id: 0,
      tituloForm: "",
      descricaoForm: "",
      lembreteForm: false,
      dataHorarioForm: null,
      linkForm: [],
      init: true,
      submitted: false, //flag que diz se formulário já foi submetido
      tituloAnotacaoRequired: "Título da anotação é obrigatório", //constante de mensagem de erro de título da matéria
      camposObrigatorioMessage: "Preencha os Campos obrigatórios",
      dataHorarioFormRequired: "Data e hora da anotação é obrigatório",
      toast: useToast(),
    };
  },
  props: {
    anotacao: {
      id: Number,
      titulo: String,
      descricao: String,
      lembrete: Boolean,
      dataHorario: String,
      link: Array,
    },
    update: false,
  },
  methods: {
    async submit() {
      this.submitted = true;
      if (!this.v$.$invalid) {
        api
          .post("/anotacao/salvar", {
            id: this.id,
            titulo: this.tituloForm,
            descricao: this.descricaoForm,
            lembrete: this.lembreteForm,
            dataHorario: this.dataHorarioForm,
            link: this.linkForm,
            usuario: this.usuario,
          })
          .then((response) => {
            this.toast.success("Anotação criada com sucesso", {
              position: POSITION.TOP_CENTER,
              timeout: 2000,
            });
            setTimeout(() => {
              this.$router.go();
            }, 2050);
            this.init = true;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        if (this.lembreteForm == true) {
          this.toast.error(this.dataHorarioFormRequired, {
            position: POSITION.TOP_CENTER,
            timeout: 2500,
          });
        }
        this.toast.error(this.camposObrigatorioMessage, {
          position: POSITION.TOP_CENTER,
          timeout: 2500,
        });
      }
    },
    async deleteAnotacao() {
      if (this.update) {
        var res = await api.delete(`/anotacao/deletar/${this.id}`);
        if (res.status == 200) {
          this.toast.success("Anotação deletada com sucesso", {
            position: POSITION.TOP_CENTER,
            timeout: 2000,
          });
          setTimeout(() => {
            this.closedDialog();
            this.$router.go();
          }, 2050);
        }
      }
    },
    addLinkField() {
      this.linkForm.push({ url: null, descricao: null });
    },
    deleteLinkField() {
      this.linkForm.pop({ url: null, descricao: null });
    },
    closedDialog() {
      this.init = true;
      this.$emit("closedDialog", true);
    },
    updateValue(value, index) {
      this.linkForm[index] = value;
    },
    setAnotacao() {
      if (this.update && this.init) {
        this.id = this.anotacao.id;
        this.tituloForm = this.anotacao.titulo;
        this.descricaoForm = this.anotacao.descricao;
        this.lembreteForm = this.anotacao.lembrete;
        this.dataHorarioForm = this.anotacao.dataHorario;
        this.linkForm = this.anotacao.link;
        this.init = false;
      } else if (this.init) {
        this.id = null;
        this.tituloForm = "";
        this.descricaoForm = "";
        this.lembreteForm = false;
        this.dataHorarioForm = "";
        this.linkForm = [];
        this.init = false;
      }
    },
  },
  validations() {
    return {
      tituloForm: { required },
      dataHorarioForm: {},
    };
  },
  updated() {
    this.setAnotacao();
  },
  computed: {
    ...mapGetters(["usuario"]),
  },
};
</script>
    
<style scoped>
.modal-content {
  border-radius: 1rem;
  width: 43.75rem;
  height: 40%;
  background-color: rgb(249, 192, 139);
}

.form-label {
  display: flex;
  font-weight: 700;
}

.p-inputswitch {
  display: flex;
  align-items: flex-start;
}

.modal-header {
  border: none;
}

.modal-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.form-control:focus,
.form-control {
  background-color: rgb(249, 192, 139);
  border: none;
  border-style: none;
  outline: none;
}

#titulo {
  font-size: 1rem;
  font-weight: 700;
}

.mb-3 {
  position: relative;
  margin-top: 15px;
  margin-bottom: 25px;
  display: flex;
  gap: 3px;
}

.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}

#lembrete {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.inputdatepicker {
  width: 40%;
  margin-left: 5rem;
  margin-bottom: 6px;
}

.buttons {
  display: flex;
}
</style>