<template>
  <div class="body">
    <header>
            <img
                id="logo"
                alt="Logo Pedule"
                src="../../../../Workspace/pedule-web/public/img/pedule-logo.png" />

                <button type="submit" class="btn-cadastrar" name="btn-cadastrar" @click="register"><a href="#">Cadastre-se</a></button>
        </header>
    <main class="container">


            <form class="formulario" action="#" method="POST">
                <fieldset class="card-login">
                    <h1>Login</h1>

                    <label  for="email">E-mail</label>
                    <input  id="email" type="text" autofocus required v-model="form.email">

                    <label for="senha">Senha</label>
                    <input id="senha" type="password" name="senha" required v-model="form.senha">

                    <button type="submit" name="btn-entrar" @click="login"><a href="#">Entrar</a></button>
                    <a href="#"><small>Esqueceu sua senha?</small></a>
                </fieldset>
             </form> 
    </main>
  </div>
    
    
   
</template>

<script>
//import {required, minLenght, email} from "vuelidate/lib/validators"
export default {
    data() {
        return {
            form: {
                email: "",
                senha: ""
            }
        }
    },
    methods() {
        login(),
        register()
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

    
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
    font-family: 'Open Sans', sans-serif;
    
}   
.body {
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
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
    
}

    
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8rem;
    
}

header > img {
  display: flex;
  width: 130px;
  height: auto;
  margin: 2rem;
  cursor: pointer;
  
}

.formulario {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.btn-cadastrar {
background: $button;
height: 2.5rem;
width: 10rem;
padding: 0.4rem 1rem;
margin: 2rem;
border-radius: 5px;
line-height: 0;
border: none;
cursor: pointer;

}
a {
    color: $btn-text;
    font-weight: 800;
    font-size: 0.9rem;
}

.btn-cadastrar:hover {
    background: #3da9fc99;
    
}

.card-login {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 1.2rem;
    box-shadow: 0px 10px 40px #00000056;
    border: none;
    padding: 5rem;
    
    
}


.card-login h1::after {
    content: '';
    display: block;
    width: 100% ;
    height: 0.3rem;
    background: $button;
    margin-bottom: 2rem;
    border-radius: 10px;
    font-weight: 800;
    

}
.card-login input {
    margin: 0.6rem 0;
    padding: 0.8 1.2rem;
    width: 20rem;
    padding: 15px;
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

  label {
    font-weight: 500;
    transition: all 0.1s ease;

}
input:focus ~ label,
input:not(:focus):valid ~ label{
    top: -15px;
		bottom: 0px;
		left: 0px;
		font-size: 11px;
		opacity: 1;
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

.card-login button:hover{
    background: #3da9fc99;
}

.card-login button a {
    font-size: 0.93rem;
    font-weight: 500;
}

</style>