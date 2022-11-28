<template>
  <div class="content">
    <p-button
      class="p-button-raised p-button-rounded button-add"
      icon="pi pi-plus"
      data-bs-toggle="modal"
      data-bs-target="#myModal"
      @click="cleanAnotacao()"
    />
    <!-- data-bs-toggle="modal" data-bs-target="#exampleModal" -->
    <div class="anotation">
      <Card
        v-for="item in anotacoes"
        :key="item.id"
        :anotacao="item"
        @click="openUpdateModal(item)"
      />
    </div>
    <AnotacaoModal
      :anotacao="anotacao"
      :update="update"
      @closedDialog="closeModal()"
    />
  </div>
</template>
  
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";

import Card from "@/components/anotacoes/Card.vue";
import PButton from "primevue/button";
import api from "@/services/API";
import PCalendar from "primevue/calendar";
import AnotacaoModal from "@/components/anotacoes/AnotacaoDialog.vue";
import { mapGetters } from "vuex";

export default {
  components: { Card, PButton, AnotacaoModal, PCalendar },
  data() {
    return {
      modal: "",
      update: false,
      anotacao: {},
      anotacoes: [
        {
          id: 0,
          titulo: "",
          descricao: "",
          lembrete: false,
          dataHorario: "11/10/2022 20:11:29",
          link: [
            {
              id: 0,
              url: "",
              anotacao: "",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getAnotacoes() {
      if(this.usuario) {
        api
        .get(`/anotacao/listar/${this.usuario.id}`)
        .then((response) => {
          this.anotacoes = response.data;
        });
      }
    },
    openModal(update) {
      this.update = update;
      this.showModal = true;
      this.modal = "modal";
    },
    closeModal() {
      this.modal = "";
    },
    openUpdateModal(anotacao) {
      this.anotacao = anotacao;
      this.openModal(true);
    },
    cleanAnotacao() {
      this.anotacao = null;
      this.update = false;
    },
  },
  created() {
    this.getAnotacoes();
  },
  computed: {
    ...mapGetters(['usuario'])
  }
};
</script>
  
<style lang="scss" scoped>
$background: rgb(255, 255, 254);
$button: rgb(61, 169, 252, 221);
$tittle: rgb(9, 64, 103);
$paragraph: rgb(95, 108, 123);
$btn-text: rgb(255, 255, 254);
$grey: #cccccc;
$dark-grey: #cecece92;
$margin-button: 4rem;

.anotation {
  // border: solid 1.5px $button;
  background: $background;
  border-radius: 1rem;
  height: 25rem;
  width: 65rem;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
}

.card > img {
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

.button-add {
  width: 3.5rem !important;
  height: 3.5rem !important;
  position: fixed;
  bottom: $margin-button;
  right: $margin-button;
}
</style>
  
  