<template>
  <div class="container mt-5">
    <div class="modal" id="myModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" @click="$router.go()"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <input v-if="update" type="text" class="form-control" v-model="anotacao.titulo" placeholder="Titulo">
                <input v-else type="text" class="form-control" v-model="novaAnotacao.titulo" placeholder="Titulo">
              </div>
              <small v-if="(v$.titulo.$invalid && submitted) || v$.titulo.$pending.$response" class="p-error">{{
                  tituloAnotacaoRequired
              }}</small>
              <div class="mb-3">
                <textarea v-if="update" class="form-control" name="" id="" cols="30" rows="10"
                  v-model="anotacao.descricao" placeholder="Descrição"></textarea>
                <textarea v-else class="form-control" name="" id="" cols="30" rows="10" v-model="novaAnotacao.descricao"
                  placeholder="Descrição"></textarea>

              </div>
              <div class="link">
                <p-button label="Link" id="plus" class="p-button-raised p-button-rounded" icon="pi pi-plus"
                  @click="addLinkField()" />
                <linkvue v-for="(item, index) in novaAnotacao.link" :key="item.id" :link="item"
                  @updateValue="updateValue($event, [index])" />
              </div>

              <div class="mb-3">
                <label class="form-label" for="">Lembrete</label>
                <p-input-switch v-if="update" id="Lembrete" v-model="anotacao.lembrete" aria-labelledby="Lembrete" />
                <p-input-switch v-else id="Lembrete" v-model="novaAnotacao.lembrete" aria-labelledby="Lembrete" />
              </div>
              <div class="modal-footer">
                <button v-if="update" @click.prevent="updateAnotacao()" class="btn  col-1 "><i
                    class="fas fa-check"></i></button>
                <button v-if="update" @click.prevent="deleteAnotacao()" class="btn  col-1 "><i
                    class="far fa-trash-alt"></i></button>
                <button v-else class="btn btn-primary col-6 mx-auto" @click.prevent="submit()">Salvar</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
    
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap'

import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useToast } from "vue-toastification";
import Toast, { POSITION } from "vue-toastification";
import PInputSwitch from "primevue/inputswitch";
import PButton from "primevue/button";
import api from "@/services/API";
import linkvue from '@/components/anotacoes/Link.vue'

export default {
  setup: () => ({ v$: useVuelidate() }),
  components: {
    PInputSwitch,
    PButton,
    linkvue
  },

  data() {
    return {
      dataHorario: "2022-11-04T18:47:52.943553",
      usuario: {},
      usuario: {
        id: 16
      },
      submitted: false, //flag que diz se formulário já foi submetido
      tituloAnotacaoRequired: "Título da anotação é obrigatório", //constante de mensagem de erro de título da matéria
      camposObrigatorioMessage: "Preencha os Campos obrigatórios",
      toast: useToast(),

      novaAnotacao: {
        titulo: "",
        descricao: "",
        lembrete: false,
        dataHorario: "2022-11-04T18:47:52.943553",
        link: []
      }

    };
  },
  props: {
    anotacao: {
      titulo: String,
      descricao: String,
      lembrete: Boolean
    },
    update: false
  },
  methods: {
    submit() {
      api()
        .post("/anotacao/novo", {

          titulo: this.novaAnotacao.titulo,
           descricao : this.novaAnotacao.descricao,
           lembrete: this.novaAnotacao.lembrete,
           dataHorario: this.novaAnotacao.dataHorario,
           link: this.novaAnotacao.link,
           usuario: this.usuario

         })
        .then((response) => {
          this.toast.success("Anotacao Inserida com sucesso", {
            position: POSITION.TOP_CENTER,
              
          });

          setTimeout(() => {
            this.$router.go()
          }, 1500);
        }).catch((error) => {
          console.log(error)
        });

    },
    /**
     * 
     * lógica para ser usada no fluxo de edição:
     * Ao receber o objeto a ser editado via props e a flag de edição(update) == true
     * os campos dos formulários serão preenchidos conforme objeto recebido pelo componente pai
     */
    async updateAnotacao() {
      if (this.update) {
        var res = await api().post("/anotacao/atualizar", this.anotacao)
        if (res.status == 200) {
          this.toast.success("Anotacao Alterada com sucesso", {
            position: POSITION.TOP_CENTER,

          });
          setTimeout(() => {
            this.$router.go()
          }, 3000);
        }
      } else {

      }
    },
    async deleteAnotacao() {
      if (this.update) {
        var res = await api().post("/anotacao/deletar", this.anotacao)
        if (res.status == 200) {
          this.toast.success("Anotacao Alterada com sucesso", {
            position: POSITION.TOP_CENTER,

          });
          setTimeout(() => {
            this.$router.go()
          }, 1500);
        }
      }
    },
    addLinkField() {
      this.novaAnotacao.link.push({ url: null, descricao: null })
    },
    closeModal() {
      this.modal = "modal"
    },
    updateValue(value, index) {
      this.novaAnotacao.link[index] = value
    }
  },

  validations() {
    return {
      titulo: { required },
    };
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

.mb-3 {
  position: relative;
  margin-top: 15px;
  margin-bottom: 25px;
}

.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
}
</style>