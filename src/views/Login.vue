<template>
 <body>
    <header>
            <img
                id="logo"
                alt="Logo Pedule"
                src="../../../../Workspace/pedule-web/public/img/pedule-logo.png" />

                <button type="submit" class="btn-register" name="btn-register" @click="register"><a href="#">Cadastre-se</a></button>
        </header>
    <main class="container">
            <form class="form" action="#" method="login">
                <fieldset class="card-login">
                    <h1>Login</h1>
                    <div class="float-label-group">

                        <img class="email-icon" src="../assets/envelope-regular.svg" alt="Icone de um evelope">
                        <input  id="email" type="text" autocomplete="off" autofocus required v-model="state.email" >
                        <label class="float-label" for="email">E-mail</label>
                        <span v-if="v$.email.$error">
                            {{ v$.email.$errors[0].$message }}
                        </span>
                    </div>
                     
                    <div class="float-label-group">
                        <input id="senha" type="password" name="password" required v-model="state.password" >
                        <label class="float-label" for="password">Senha</label>
                        <span v-if="v$.password.$error">
                            {{ v$.password.$errors[0].$message }}
                        </span> 
                    </div>

                    <button type="submit" name="btn-enter" @click="login"><a href="#">Entrar</a></button>
                    <a href="#"><small>Esqueceu sua senha?</small></a>
                </fieldset>
             </form> 
    </main>
 </body>
    

    
    
   
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators'
import {computed, reactive} from 'vue'
export default {
    setup (){
        const state = reactive({
            email: '',
            password: ''
            
        })

        const MensagemDeErroCustomizada = (value) => value.includes('teste')

        const rules = computed (() => {
        return  {
            email: { required, email, MensagemDeErroCustomizada: helpers.withMessage('TEM QUE TER TESTE NO BAGUI', MensagemDeErroCustomizada ) },
            password:{ required, minLength: minLength(6) }  
        }
    })  

        const v$ = useValidate(rules, state)
        
        return {
            state,
            v$,
        }
    },
    methods: {
        login(){
            this.v$.$validate()
            if(!this.v$.$error){
                alert('form enviado com sucesso')
            }else{
                alert('form não ta indo essa merda')
            }
            return false
        },

        register() {

        },
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
body {
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

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.btn-register {
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
.btn-register:hover {
    background: #3da9fc99;
    
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
    content: '';
    display: block;
    width: 100% ;
    height: 0.3rem;
    background: $button;
    margin-bottom: 2rem;
    border-radius: 10px;
    font-weight: 800;
}.card-login input {
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
.email-icon {
    position: absolute;
    margin-top: 1.5rem;
    margin-left: 0.3rem;
    width: 1.5rem;
    height: 1.5rem;
    opacity: 1;
    
}
.float-label-group {
    position: relative;
    margin: 0.6rem;
}
.float-label { 
        position:absolute;
		font-size: 1rem;
        font-weight: 400;
		color: #cccccc;
		pointer-events: none;
        top: 1.5rem;
        left: 2rem;
		transition: all 0.1s ease;
	}
input:focus ~ .float-label,
input:not(:focus):valid ~ .float-label{
        font-weight: 600;
        top: -18px;
		bottom: 0px;
		left: 0px;
		font-size: 1rem;
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