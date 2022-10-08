<template>

  <body>

    <main class="container">

        <form class="form" action="#">

            <div class="title">
              <h1>Bem vindo!</h1>
            </div>
          
            <h2>Cadastre-se</h2>
            <div class="top-box">
                <div>
                  <label for="name" id="lb-name" >Nome </label>
                  <input type="text" name="name" id="inp-name" placeholder="Digite o seu nome">
                </div>
                  
                <div>
                  <label for="birth">Data de nascimento</label>
                  <input type="date" name="birth" id="birth"> 
                </div>
            </div>

             
                <label for="institute">Instituição</label>
                <input type="text" name="institute" id="inp-institute"  placeholder="Informe a instituição">           
           

             
                <label for="email">Email</label>
                <input type="email" name="email" id="inp-email" placeholder="Insira o seu email">           
        

              
                <label for="password">Senha</label>
                <input type="password" name="password" id="inp-password"  placeholder="Insira sua senha">           
            

             
                <label for="conf-password">Cofirme sua senha</label>
                <input type="password" name="conf-password" id="conf-password"  placeholder="Confirme sua senha">           
        

            <input type="button" value="Enviar">

        </form> 

    </main>

  </body>
</template>

<script>
export default {
  name: "TelaCadastro",
  data() {
    return {
      
    };
  },
};
</script>

<style  lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

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
    font-family: 'Open Sans', sans-serif;
    
  }

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  

  border: 1px solid red;
}

.form {
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  border: 1px solid blue;
}

.top-box {
  display: flex;
  text-align: start;
  
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: $button;

}
input {
  width: 100%;    
  border-radius: 5px;
}

label {

}

</style>


