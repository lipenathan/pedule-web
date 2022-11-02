<template>
  <div class="content">
    <p-button label="Nova Anotação" class="p-button-raised p-button-warning" data-bs-toggle="modal"
      data-bs-target="#myModal" />
    <div class="anotation">

      <Card v-for="item in anotacoes" :key="item.id" :anotacoes="item"/>
      
      <AnotacoesDialog :show="showdialog" @click="closedDialog" />
    </div>
    <AnotacoesModal />

  </div>
</template>
  
<script>

import 'bootstrap/dist/css/bootstrap.min.css'   
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap"

import Card from '@/components/anotacoes/Card.vue'
import PButton from 'primevue/button';
import Api from "@/services/API";
import AnotacoesDialog from '@/components/anotacoes/AnotacoesDialog.vue'
import AnotacoesModal from '@/components/anotacoes/AnotacoesModal'

export default {
  components: { Card, PButton, AnotacoesDialog, AnotacoesModal },
  data() {
    return {
      showdialog: false, 
      anotacoes: [
          {
            id: 0,
            titulo: "",
            descricao: "",
            lembrete: false,
            dataHorario: null,
            link: [
              {
                id: 0,
                url: "",
                anotacao: ""
              }
            ],
          }
        ],
        usuario: {
          id: 16,
        },
    }


  },
  methods: {
    getAnotacoes() {
      Api()
        .get("/anotacao/listar/16", {

        }).then((response) => {
          this.anotacoes = response.data
          console.log(this.anotacoes)
        })
    }
  },
  created() {
    this.getAnotacoes()
  },
}



</script>
  
<style lang="scss" scoped>
$background: rgb(255, 255, 254);
$button: rgb(61, 169, 252, 221);
$tittle: rgb(9, 64, 103);
$paragraph: rgb(95, 108, 123);
$btn-text: rgb(255, 255, 254);
$grey: #cccccc;
$dark-grey: #cecece92;

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.anotation {
  margin-top: 4rem;
  // border: solid 1.5px $button;
  background: $background;
  border-radius: 1rem;
  height: 30rem;
  width: 70rem;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;

}

.card>img {
  width: 30%;
  height: auto;
}

.card {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(249, 192, 139);
  border-radius: 10px;
}
</style>
  
  