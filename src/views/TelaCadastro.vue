<template>
    <h1>Bem vindo!</h1> 
    <form id="registration-form">
          <label for="name">Nome do usuário</label>
          <input type="text" name="name" id="name" v-model="name" placeholder="Digite o seu nome"> 
          <label for="name">Nome do usuário</label>
          <input type="text" name="name" id="name" v-model="name" placeholder="Digite o seu nome"> 
      </form> 
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

<style scoped>
  #registration-form {
    display: flex;
    background-color: aquamarine;
    margin-left: auto;
    margin-right: auto;
  }
  
</style>


