<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <body>
    <header>
            <img
        id="logo"
        alt="Logo Pedule"
        src="../../../../Workspace/pedule-web/public/img/pedule-logo.png" />

        <button class="cadastrar">Cadastre-se</button>
     </header>
    <main class="container">
            <form action="" method="">
                <fieldset class="card-login">
                    <h2>Bem Vindo de volta</h2>

                    <label  for="email">E-mail</label>
                    <input  id="email" type="text" placeholder="Insira o seu e-mail" autocomplete="off">

                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Insira sua senha">

                    <button type="submit" name="btn-entrar">Entre</button>
                    <a href="#">Esqueceu sua senha?</a>
                </fieldset>
             </form> 
        </main>
    
   </body>
</template>

<script>

</script>

<style scoped lang="scss">
    
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
body {
    width: 100vw;
    height: 100vh;
    background-color: #fffffe;
}
    
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
header > img {
  display: flex;
  width: 130px;
  height: auto;
  margin: 15px;
  cursor: pointer;
}

    
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fffffe;

}
    
.card-login {
    padding: 6em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 35px;
    background: #fffffe;
    border-radius: 20px;
    box-shadow: 0px 10px 40px #00000056;
    
}

.card-login > h2 {
    color: #094067;
    font-weight: 800;
    margin: 10px;

}

.card-login > input {
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    font-size: 12pt;
    box-shadow: 0px 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
}

.card-login > label {

}
</style>