<template>
  <body>
    <Header />
    <main class="container">
      <div class="form">
        <fieldset class="card-login">
          <h1>Login</h1>
          <div :state="v$.email" class="float-label-group">
            <span class="login-icons"
              ><img
                class="email-icon"
                src="../assets/envelope-regular.svg"
                alt="Icone of a envelope"
            /></span>
            <input
              id="email"
              type="text"
              autocomplete="off"
              autofocus
              v-model="state.email"
            />
            <label class="float-label" for="email">E-mail</label>

            <span v-if="v$.email.$error || !v$.email">
              <small class="error-message">{{
                state.errors.errors[v$.email.$errors[0].$message]
              }}</small>
            </span>
          </div>
          <div id="renderResults"></div>
          <div class="float-label-group">
            <span class="login-icons"
              ><img src="../assets/lock-svgrepo-com.svg" alt="icon of a lock"
            /></span>
            <input
              id="senha"
              type="password"
              name="password"
              v-model="state.password"
            />
            <label class="float-label" for="password">Senha</label>

            <span v-if="v$.password.$error">
              <small class="error-message">{{
                state.errors.errors[v$.password.$errors[0].$message]
              }}</small>
            </span>
          </div>
          <button type="submit" name="btn-enter" @click="login">
            <a class="entrar" href="#">Entrar</a>
          </button>
          <a href="#"><small>Esqueceu sua senha?</small></a>
        </fieldset>
      </div>
    </main>
  </body>
</template>

   <script>
import useValidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { computed, reactive } from "vue";
import { useToast } from "vue-toastification";
import { POSITION } from "vue-toastification";
import Header from "@/components/template/Header.vue";
import i18n from "@/utils/i18n.json";
import Api from "../services/API";

export default {
  components: {
    Header,
  },
  setup() {
    const state = reactive({
      email: "",
      password: "",
      errors: i18n,
      isSubmitting: false,
    });

    const toast = useToast();

    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required },
      };
    });

    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
      toast,
    };
  },
  methods: {
    login() {
      this.v$.$validate();
      Api
        .post("/usuario/login", {
          email: this.state.email,
          senha: this.state.password,
        })
        .then((response) => {
          (this.state.email = ""), (this.state.password = "");
          this.$router.push("/cronograma");
          this.toast.success("Login efetuado com sucesso", {
            position: POSITION.TOP_CENTER,
            timeout: 2500
          });
          this.$store.dispatch('usuario', response.data)
        })
        .catch((error) => {
          if (error.response.status == 400) {
            this.toast.error("Email/Senha incorretos", {
              position: POSITION.TOP_CENTER,
              timeout: 2500
            });
          } else {
          }
        });
      if (!this.v$.$error) {
      } else {
        this.toast.error("Campos Obrigatórios", {
          position: POSITION.TOP_CENTER,
        });
      }
    },
    register() {},
  },
};
</script>

   <style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

$background: rgb(255, 255, 254);
$button: rgb(61, 169, 252);
$tittle: rgb(9, 64, 103);
$paragraph: rgb(95, 108, 123);
$btn-text: rgb(255, 255, 254);

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
}
body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: $background;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
}

small {
  width: 50%;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.entrar {
  color: $btn-text;
  font-weight: 800;
  font-size: 0.9rem;
}

.card-login {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 1.2rem;
  box-shadow: 0px 10px 40px #00000056;
  border: none;
  padding: 5rem;
}
.card-login h1::after {
  content: "";
  display: block;
  width: 100%;
  height: 0.3rem;
  background: $button;
  margin-bottom: 2rem;
  border-radius: 10px;
  font-weight: 800;
}
.card-login input {
  margin: 0.8rem 0;
  padding: 0.8rem 2rem;
  width: 20rem;
  border: none;
  border-radius: 12px;
  font-size: 12pt;
  box-shadow: 1px 1px 10px #0000001c;
  outline: none;
}
.card-login input:hover {
  background-color: #eeeeee99;
}
.card-login input:focus-visible {
  outline: 1px solid $button;
}
.login-icons {
  position: absolute;
  margin-top: 1.4rem;
  margin-left: 0.3rem;
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.4;
}

.float-label-group {
  position: relative;
  margin: 0.6rem;
}
.float-label {
  position: absolute;
  font-size: 1rem;
  font-weight: 400;
  color: #cccccc;
  pointer-events: none;
  top: 1.5rem;
  left: 2rem;
  transition: all 0.1s ease;
}
input:focus ~ .float-label,
input:not(:focus):valid ~ .float-label {
  font-weight: 600;
  top: -18px;
  bottom: 0px;
  left: 0px;
  font-size: 1rem;
  opacity: 0.9;
  color: #404040;
}
.card-login button {
  width: 100%;
  border: none;
  margin: 1.5rem 0;
  background: $button;
  padding: 0.62rem;
  border-radius: 5px;
  cursor: pointer;
}
.card-login button:hover {
  background: #3da9fc99;
}
.card-login button a {
  font-size: 0.93rem;
  font-weight: 500;
}
.error-message {
  display: flex;
  color: #c92432;
  border-color: #c92432;
}
</style>