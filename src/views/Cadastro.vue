<template>
  <body>
    <main class="container">
      <div class="form">
        <div class="title">
          <h1>Bem vindo!</h1>
        </div>

        <h2>Cadastre-se</h2>
        <div class="top-box">
          <div>
            <label for="name" id="lb-name">Nome </label>
            <span class="icon_name"><i class="fa-solid fa-user"></i></span>
            <input
              type="text"
              name="name"
              id="inp-name"
              placeholder="Digite o seu nome"
              v-model="usuario.nome"
            />
            
          </div>

          <div class="top-box-child">
            <label id="lb_birth" for="birth">Data de nascimento</label>
            <span class="icon_birth"><i class="fa-sharp fa-solid fa-cake-candles"></i></span>
            <input
              type="date"
              name="birth"
              id="birth"
              v-model="usuario.dataNascimento"
            />
          </div>
        </div>
        
        <label for="institute">Instituição</label>
        <span class="icon_institute"><i class="fa-sharp fa-solid fa-building-columns"></i></span>
        <input
          type="text"
          name="institute"
          id="inp-institute"
          placeholder="Informe a instituição"
          v-model="usuario.instituicao" class="inp_top_box2"/>
        

        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="inp-email"
          placeholder="Insira o seu email"
          v-model="usuario.email" class="inp_top_box2"
        />
        <span class="icon_email" ><i class="fa-solid fa-envelope"></i></span>

        <label for="password">Senha</label>
        <span class="icon_password"><i class="fa-solid fa-lock"></i></span>
        <input
          type="password"
          name="password"
          id="inp-password"
          placeholder="Insira sua senha"
          v-model="usuario.password.password" class="inp_top_box2"
        />

        <label for="conf-password">Cofirme sua senha</label>
        <span class="icon_conf_password"><i class="fa-solid fa-lock"></i></span>
        <input
          v-model="usuario.password.confirm"
          type="password"
          name="conf-password"
          id="conf-password"
          placeholder="Confirme sua senha" class="inp_top_box2"
        />

        <button id="bt" @click.prevent="submitForm">Enviar</button>
      </div>
    </main>
  </body>
</template>

<script>
import Api from "../services/API";
import useValidate from "@vuelidate/core";
import { required, sameAs, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        dataNascimento: "",
        instituicao: "",
        password: {
          password: "",
          confirm: "",
        },
      },
    };
  },
  methods: {
    submitForm() {
      Api().post("/usuario/novo", {
        nome: this.usuario.nome,
        email: this.usuario.email,
        dataNascimento: this.usuario.dataNascimento,
        instituicao: this.usuario.instituicao,
        senha: this.usuario.password.password,
      }).then(res => {
        this.usuario.nome = ""
        this.usuario.email = ""
        this.usuario.dataNascimento = null
        this.usuario.instituicao = ""
        this.usuario.password.password = ""
        this.usuario.password.confirm = ""
      })
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem;
  border-radius: 15px;
  width: 300px;
  height: 470px;
  background-color: #f5f5f5;
  box-shadow: 2px 3px 5px #888;
}

h1 {
  margin-top: -70px;
  margin-bottom:0px;
}

h2{
  margin-bottom: 10px;
}

label {
  padding: 5px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: $button;
}

#inp-name{
  padding: 0 1rem;
  width: 120px;
  height: 25px;
}

.top-box {
  display: flex;
  text-align: start;
  width: 306px;
}
.top-box div input[type="text"] {
  height: 23px;
}
.top-box-child {
  margin-left: 21px;
}

.top-box-child input[type="date"] {
  width: 134px;
  height: 23px;

}

input {
  width: 103%;
  padding-left: 1.5rem;
  border-radius: 8px;
  height: 28px;
  border: 0.5px solid rgb(104, 104, 104, 0.2);
  margin-bottom: 10px;
}

input::placeholder {
  color: #ccc;
}

.top-box div input {
  width: 120px;
}
 
.icon_institute{
  position: absolute;
  margin-top:-99px;
  margin-left: 0.4rem;
  margin-bottom: 0.7rem;
  opacity: 0.3;
}

.icon_email{
   position: absolute;
   margin-left: 0.4rem;
   margin-top:41px;
   opacity: 0.3;
 }

 .icon_password{
   position: absolute;
   margin-left: 0.4rem;
   margin-top: 185px;
   opacity: 0.3;
 }

 .icon_conf_password{
   position: absolute;
   margin-left: 0.4rem;
   margin-top: 334px;
   opacity: 0.3;
 }

 .icon_name{
   position: absolute;
   margin-left: -3.3rem;
   margin-top: 22px;
   opacity: 0.3;
 }

 .icon_birth{
   position: absolute;
   margin-left: -9.6rem;
   margin-top: 23px;
   opacity: 0.3;
 }

  button{
   background-color: $button ;
   border: none;
   width: 112%;
   height: 38px;
   border-radius: 10px;
   margin-top: 20px;
   margin-bottom: -30px;
   font-weight: bold;
   font-size: 20px;
   color: #FFFFFF;
   box-shadow: 0px 2px 3px #888;
   cursor: pointer;
  }
</style>
