<template>
  <div class="wrapper">
    <h2>HTTP Teste</h2>
    <div>
      <input type="text" placeholder="nome" v-model="usuario.nome" />
      <input type="text" placeholder="e-mail" v-model="usuario.email" />
      <input
        type="date"
        placeholder="data de nascimento"
        v-model="usuario.dataNascimento"
      />
      <input type="password" placeholder="senha" v-model="usuario.senha" />
      <p-button @click="submit">Cadastrar</p-button >
    </div>
    <div>
      <p-button @click="showModal">Show Modal</p-button >
    </div>
    <div>
      <p-dialog header="Header" :draggable="false" v-model:visible="showDialog" :modal="true">
        <h2>Exemplo de modal</h2>
        <!-- <p-calendar class="calendar" :inline="true" selectionMode="single || multiple || range"></p-calendar> -->
      </p-dialog>
    </div>
  </div>
</template>

<script>
import Api from '../services/API';
import PCalendar from 'primevue/calendar'
import PButton from 'primevue/button'
import PDialog from 'primevue/dialog'

export default {
  components: {PCalendar, PButton, PDialog},
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        dataNascimento: null,
        senha: "",
      },
      showDialog: false
    };
  },
  methods: {
    submit() {
      Api
        .post("/usuario/novo", {
          nome: this.usuario.nome,
          email: this.usuario.email,
          dataNascimento: this.usuario.dataNascimento,
          senha: this.usuario.senha
        })
        .then((res) => {
          this.usuario.nome = ""
          this.usuario.email = ""
          this.usuario.dataNascimento = null
          this.usuario.senha = ""
        });
    },
    showModal() {
      this.showDialog = !this.showDialog
      return this.showDialog
    }
  },
};
</script>

<style scoped>
.wrapper {
  border: solid 2px grey;
}
</style>