<template>

    <div class="container mt-5" >
        <div class="modal" id="myModal">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="submit">
                            <div class="mb-3">
                                 <label class="form-label" for="">Titulo</label>
                                 <input type="text" class="form-control" v-model="titulo">
                            </div>
                            <small
                             v-if="(v$.titulo.$invalid && submitted) || v$.titulo.$pending.$response" class="p-error">{{ tituloAnotacaoRequired }}</small>
                            <div class="mb-3">
                                <label class="form-label" for="">Descrição</label>
                                <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="descricao"></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="">Lembrete</label>
                                <p-input-switch
                                id="Lembrete"
                                v-model="lembrete"
                                 aria-labelledby="Lembrete"
                                 @click="lembrete = !lembrete"
                                 />
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary col-6 mx-auto">Salvar</button>
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
    import "bootstrap"
    
    import { required } from "@vuelidate/validators";
      import { useVuelidate } from "@vuelidate/core";
      import { useToast } from "vue-toastification";
      import Toast, { POSITION } from "vue-toastification";
      import PInputSwitch from "primevue/inputswitch";
      
      import api from "@/services/API";
      export default {
        setup: () => ({ v$: useVuelidate() }),
        components: {
            PInputSwitch
        },
        data() {
          return {
            titulo: "",
            descricao: "",
            lembrete: 0,
             usuario: {
              id: 16
             },  
            submitted: false, //flag que diz se formulário já foi submetido
            tituloAnotacaoRequired: "Título da anotação é obrigatório", //constante de mensagem de erro de título da matéria
            camposObrigatorioMessage: "Preencha os Campos obrigatórios",
            toast: useToast(),
          };
        },
        props: {
          
          update: false,
          anotacao: {
            id: 0,
            titulo: "",
            descricao: "",
            lembrete: "",
            dataHorario: "2022-11-01T00:14:37.522Z",
            usuario: {
              nome: "",
              email: "",
              dataNascimento: "",
              instituicao: "",
              emailAtivo: false,
              senha: "",
            },
          },
        },
        methods: {
          submit() {  
              api()
                .post("/anotacao/novo", {
                  titulo: this.titulo,
                  descricao: this.descricao,
                  lembrete: this.lembrete,
                  usuario: this.usuario,
                })
                .then((response) => {
                  this.toast.success("Anotacao Inserida com sucesso", {
                    position: POSITION.TOP_CENTER,
                  });
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
          setAnotacao() {
            if (this.update) {
              this.titulo = this.anotacao.titulo
              this.descricao = this.anotacao.descricao
              this.lembrete = this.anotacao.lembrete
            }
          },
        },
        validations() {
          return {
            titulo: { required },
          };
        },
        created() {
          this.setAnotacao();
        },
      };
     
      
    </script>
    
    <style>
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
    
    </style>