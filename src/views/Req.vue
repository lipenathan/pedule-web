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
      <button @click="submit">Cadastrar</button>
    </div>
  </div>
</template>

<script>
import Api from "../services/API";
export default {
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        dataNascimento: null,
        senha: "",
      },
    };
  },
  methods: {
    submit() {
      Api()
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
  },
};
</script>

<style scoped>
.wrapper {
  border: solid 2px grey;
}
</style>