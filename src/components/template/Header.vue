<template>
  <header>
    <img
        id="logo"
        alt="Logo Pedule"
        src="../../../public/img/pedule-logo-sqr.png" />
   
        <button type="submit" class="btn-register" name="btn-register" @click="register"><a href="#">Cadastre-se</a></button>
 </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss" scoped>

   $background: rgb(255, 255, 254);
   $button: rgb(61, 169, 252);
   $tittle: rgb(9, 64, 103);
   $paragraph: rgb(95, 108, 123);
   $btn-text: rgb(255, 255, 254);
   
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

   .btn-register:hover {
       background: #3da9fc99;    
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
   

</style>