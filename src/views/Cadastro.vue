<template>
  <div class="wrapper">
    <Header />
    <div class="form">
      <h2>Cadastre-se</h2>
      <div class="input group1">
        <div class="name_user">
          <span class="p-float-label">
            <PInputText
              id="username"
              type="text"
              v-model="nome"
              autocomplete="off"
            />
            <label for="username"><i class="pi pi-user" /> Nome</label>
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

      <div class="input-rows">
        <div class="input email">
          <span class="p-float-label">
            <PInputText
              id="email"
              type="text"
              v-model="email"
              autocomplete="off"
            />
            <label for="email"><i class="pi pi-envelope" /> Email</label>
          </span>
          <small
            v-if="
              (v$.email.$invalid && submitted) || v$.email.$pending.$response
            "
            class="p-error"
            >Email obrigatório</small
          >
        </div>

        <div class="input name_user">
          <span class="p-float-label">
            <PInputText id="institute" v-model="instituicao" />
            <label for="institute"
              ><i class="fa-solid fa-building-columns"></i> Instituição</label
            >
          </span>
        </div>
      </div>
      <div class="input-rows">
        <div class="input password">
          <span class="p-float-label">
            <PPassword
              id="password"
              v-model="password"
              :feedback="false"
              autocomplete="off"
            />
            <label for="password"><i class="pi pi-lock" /> Senha</label>
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
            <label for="confirm_password"
              ><i class="pi pi-lock" /> Confirme sua senha</label
            >
          </span>
          <small
            v-if="
              (v$.confirm.$invalid && submitted) ||
              v$.confirm.$pending.$response
            "
            class="p-error"
            >Confirmação de senha obrigatória</small
          >
        </div>
      </div>
      <button id="bt" @click="submitForm">Cadastrar</button>
    </div>
  </div>
</template>

<script>
import api from "../services/API";
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
      fieldTypes: {
        password: "text",
        email: "text",
      },
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
      if (!this.v$.$invalid) {
        api
          .post("/usuario/novo", {
            nome: this.nome,
            email: this.email,
            dataNascimento: this.dataNascimento,
            instituicao: this.instituicao,
            senha: this.password,
          })
          .then((res) => {
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
          position: POSITION.TOP_CENTER,
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
      confirm: { required, sameAs: sameAs(this.password) },
    };
  },
};
</script>

<style  lang="scss" scoped>

$background: rgba(255, 255, 254, 0.863);
$button: rgb(61, 169, 252);
$tittle: rgb(9, 64, 103);
$paragraph: rgb(95, 108, 123);
$btn-text: rgb(255, 255, 254);

.wrapper {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url("../../src/images/image3.jpg");
  background-size: cover;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 15px;
  width: 42rem;
  height: 30rem;
  background-color: $background;
  box-shadow: 2px 3px 5px #888;
  margin: 0 auto;
}

.input-rows {
  display: flex;
}

h2 {
  margin-top: -100px;
  margin-bottom: 5px;
  font-size: 20px;
}

.group1 {
  display: flex;
}

#username {
  border-radius: 8px;
  width: 18rem;
  margin-top: 5px;
  margin-bottom: 5px;
}

.inputtext3 {
  width: 155px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
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

.password {
  border-radius: 8px;
  width: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}

.confirm_password {
  border-radius: 8px;
  width: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}

.input {
  margin-top: 1.2rem;
  height: auto;
  margin-left: 0.5rem;
}

label {
  font-size: 13px;
  margin-left: 5px;
}

button {
  background-color: $button;
  border: none;
  width: 18rem;
  height: 38px;
  border-radius: 10px;
  margin-top: 3rem;
  margin-bottom: -30px;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  box-shadow: 0px 2px 3px #888;
  cursor: pointer;
}
</style>
