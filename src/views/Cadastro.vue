<template>
  <body>
    <Header />
    <div class="form">
      <div class="title">
        <h1>Bem vindo!</h1>
      </div>

      <h2>Cadastre-se</h2>
      <div class="name_date">
        <div class="name_user">
          <span class="p-float-label">
            <PInputText id="username" type="text" v-model="value" />
            <label for="username">Username</label>
          </span>
        </div>
        <div class="inputtext3">
          <span class="p-float-label p-input-icon-left">
            <!-- <i class="pi-calendar"></i> -->
            <p-calendar
              dateFormat="dd/mm/yy"
              id="inputtext-left2"
              v-model="dataForm"
            />
            <label for="" id="lb_icon_calendar"
              ><i class="fa-solid fa-calendar-days"></i
            ></label>
            <label for="inputtext-left">Data de nascimento</label>
          </span>
          <!-- <small
            v-if="
              (v$.dataForm.$invalid && submitted) ||
              v$.dataForm.$pending.$response
            "
            class="p-error"
            >{{ dataEntregaRequired }}</small
          > -->
        </div>
      </div>
      <button id="bt" @click.prevent="submitForm">Enviar</button>
    </div>
  </body>
</template>

<script>
import Api from "../services/API";
import Header from "@/components/template/Header.vue";
import PInputText from "primevue/inputtext";
import PCalendar from "primevue/calendar";
import useValidate from "@vuelidate/core";
import { required, sameAs, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  components: {
    Header,
    PInputText,
    PCalendar,
  },

  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        dataNascimento: "",
        instituicao: "",
        password: "",
        confirm: "",
      },
    };
  },
  methods: {
    submitForm() {
      Api()
        .post("/usuario/novo", {
          nome: this.usuario.nome,
          email: this.usuario.email,
          dataNascimento: this.usuario.dataNascimento,
          instituicao: this.usuario.instituicao,
          senha: this.usuario.password.password,
        })
        .then((res) => {
          this.usuario.nome = "";
          this.usuario.email = "";
          this.usuario.dataNascimento = null;
          this.usuario.instituicao = "";
          this.usuario.password.password = "";
          this.usuario.password.confirm = "";
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style  lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

$background: rgb(255, 255, 254);
$button: rgb(61, 169, 252);
$tittle: rgb(9, 64, 103);
$paragraph: rgb(95, 108, 123);
$btn-text: rgb(255, 255, 254);

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem;
  border-radius: 15px;
  width: 400px;
  height: 520px;
  background-color: #f5f5f5;
  box-shadow: 2px 3px 5px #888;
  margin: 0 auto;
}

h1 {
  margin-top: -50px;
  margin-bottom: 0px;
  font-size: 30px;
}

h2 {
  margin-bottom: 10px;
  font-size: 20px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: $button;
}

.name_date{
  display:flex
}

#username{
  border-radius: 8px;
}

button {
  background-color: $button;
  border: none;
  width: 110%;
  height: 38px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: -30px;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  box-shadow: 0px 2px 3px #888;
  cursor: pointer;
}
</style>
