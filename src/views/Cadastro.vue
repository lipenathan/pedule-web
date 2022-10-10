<template>

  <body>

    <main class="container">

        <form class="form" action="#" method="POST">

            <div class="title">
              <h1>Bem vindo!</h1>
            </div>
          
            <h2>Cadastre-se</h2>
            <div class="top-box">
                <div>
                  <label for="name" id="lb-name" >Nome </label>
                  <label for="name" id="icon-name"><i class="fa-solid fa-user"></i></label>
                  <input type="text" name="name" id="inp-name" placeholder="Digite o seu nome" required>
                  
                </div>
                  
                <div class="top-box-child">
                  <label for="birth">Data de nascimento</label>
                  <input type="date" name="birth" id="birth" required> 
                </div>
            </div>

             
                <label for="institute">Instituição</label>
                <input type="text" name="institute" id="inp-institute"  placeholder="Informe a instituição" required>           
           

             
                <label for="email">Email</label>
                <input type="email" name="email" id="inp-email" placeholder="Insira o seu email" required>           
        

              
                <label for="password">Senha</label>
                <input type="password" name="password" id="inp-password"  placeholder="Insira sua senha" required>           
            

             
                <label for="conf-password">Cofirme sua senha</label>
                <input type="password" name="conf-password" id="conf-password"  placeholder="Confirme sua senha" required>           
        

            <input type="submit" value="Enviar" id="bt">

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

  #icon-name {
    font-size: 15PX;
    position: absolute;
    top:214px;
    left: 530px;
    opacity: 5.6;
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
  padding: 2rem;
  border-radius: 15px;
  width: 300px;
  height: 470px;
  background-color: #F5F5F5;
  box-shadow: 2px 3px 5px #888;
}



h1 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: $button;
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
  width: 155px;
  height: 23px;
  
}
 

input {
  width: 100%;    
  border-radius: 8px;
  height: 30px;
  border: .5px solid rgb(104, 104, 104, 0.2);
  margin-bottom: 10px;
  
}

input::placeholder {
  color: #ccc;
}

.top-box div input {
   width: 120px;
}

 .form input[type="submit"] {
  background-color: $button;
  height: 50px;
  width: 306px;
  margin-top: 10px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: bold ;
  color: #FFFFFF;
  border: none;
  box-shadow: 0px 2px 3px #888;
  cursor: pointer;
}


</style>


