<template>
  <body>
    <Header />
    <div class="form">
      <div class="title">
        <h1>Bem vindo!</h1>
      </div>

      <h2>Cadastre-se</h2>
      <div class="input name_date">
        <div class="name_user">
          <span class="p-float-label">
            <PInputText id="username" type="text" v-model="nome" />
            <label for="username">Nome</label>
          </span>
          <small
            v-if="(v$.nome.$invalid && submitted) || v$.nome.$pending.$response"
            class="p-error"
            >Nome obrigatório</small
          >
        </div>
        <div class="inputtext3">
          <span class="p-float-label p-input-icon-left" id="sp_calendar">
            <PCalendar
              dateFormat="dd/mm/yy"
              id="inputtext-left2"
              v-model="dataNascimento"
            />
            <label for="" id="lb_icon_calendar"
              ><i class="fa-solid fa-calendar-days"></i
            ></label>
            <label for="inputtext-left">Nascimento</label>
          </span>
        </div>
      </div>

      <div class="input name_user">
        <span class="p-float-label">
          <PInputText id="institute" type="text" v-model="instituicao" />
          <label for="institute">Instituição</label>
        </span>
      </div>

      <div class="input email">
        <span class="p-float-label">
          <PInputText id="email" type="text" v-model="email" />
          <label for="email">Email</label>
        </span>
        <small
          v-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response"
          class="p-error"
          >Email obrigatório</small
        >
      </div>

      <div class="input password">
        <span class="p-float-label">
          <PPassword id="password" v-model="password" :feedback="false" />
          <label for="password">Senha</label>
        </span>
        <small
          v-if="
            (v$.password.$invalid && submitted) ||
            v$.password.$pending.$response
          "
          class="p-error"
          >Senha obrigatória</small
        >
      </div>

      <div class="input confirm_password">
        <span class="p-float-label">
          <PPassword
            id="confirm_password"
            v-model="confirm"
            :feedback="false"
          />
          <label for="confirm_password">Confirme sua senha</label>
        </span>
        <small
          v-if="
            (v$.confirm.$invalid && submitted) || v$.confirm.$pending.$response
          "
          class="p-error"
          >Confirmação de senha obrigatória</small
        >
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
import PPassword from "primevue/password";
import { useToast } from "vue-toastification";
import { POSITION } from "vue-toastification";
import { required, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";


export default {
  setup: () => ({ v$: useVuelidate() }),

  components: {
    Header,
    PInputText,
    PCalendar,
    PPassword,
  },

  data() {
    return {
      nome: "",
      email: "",
      dataNascimento: "",
      instituicao: "",
      password: "",
      confirm: "",
      submitted: false,
      toast: useToast(),
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
      if (!this.v$.$invalid) {
        Api.post("/usuario/novo", {
          nome: this.nome,
          email: this.email,
          dataNascimento: this.dataNascimento,
          instituicao: this.instituicao,
          senha: this.password,
        }).then((res) => {
          this.nome = "";
          this.email = "";
          this.dataNascimento = null;
          this.instituicao = "";
          this.password = "";
          this.confirm = "";
          this.$router.push("/login");
          this.submitted = false;
        });
      } else {
        this.toast.error("Preencha os campos obrigatórios", {
          POSITION: POSITION.TOP_CENTER,
          timeout: 2500,
        });
      }
    },
  },
  validations() {
    return {
      nome: { required },
      email: { required },
      password: { required },
      confirm: { required, sameAs:sameAs(this.password) },
    };
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
  // text-decoration: none;
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

.name_date {
  display: flex;
}

#username {
  border-radius: 8px;
  width: 8rem;
  margin-top: 5px;
  margin-bottom: 5px;
}

.inputtext3 {
  margin-left: 5px;
  width: 155px;
  margin-top: 5px;
  margin-bottom: 5px;
}

#lb_icon_calendar {
  margin-left: -25px;
}

#institute {
  border-radius: 8px;
  width: 18rem;
  margin-top: 5px;
  margin-bottom: 5px;
}

#email {
  border-radius: 8px;
  width: 18rem;
  margin-top: 5px;
  margin-bottom: 5px;
}

#password {
  border-radius: 8px;
  width: 18rem;
  margin-top: 5px;
  margin-bottom: 5px;
}

#confirm_password {
  border-radius: 8px;
  width: 18rem;
  margin-top: 5px;
  margin-bottom: 5px;
}

.input {
  margin-top: 1.2rem;
  height: auto;
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
