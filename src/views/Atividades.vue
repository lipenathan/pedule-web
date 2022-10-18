<template>
  <div>
    <navbar />
  </div>
  <div class="header_atividade">
    <ul>
      <li>Atividades</li>
      <li>Prazo</li>
      <li>Prioridade</li>
      <li>Excluir</li>
    </ul>
  </div>
  
    <div class="div_atividade">
      <input type="checkbox" name="" id="inp_check">
      <input type="text" class="nome_atividade" value="Programação">
      <input type="text" class="data_atividade" value="17/10/2022">
      <input type="radio">
      <input type="button" value="Excluir">
    </div> 
      
  
  
</template>
<script>
import Navbar from '@/components/template/Navbar.vue'
export default {
  components: { Navbar }
}
</script>

<style scoped>
  .header_atividade {
    display: flex;
    margin-left: 250px;
    background-color: #B9B9B9;
    border-radius: 10px;
    margin-top: 40px;
  }

  ul {
    display: flex;
    list-style-type: none;
    width: 100vw;
    padding: 0;
    justify-content: space-around;
  }
   li{
    font-weight: bold;
    font-size: 18px;
    color:#3D3939
   }

   

   .div_atividade {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-top: 8px;
    margin-left: 250px;
    height: 90px;
   }

   .nome_atividade {
      display: flex;
      height: 30px;
      width: 170px;
      border-radius: 6px;
      background-color: rgba(137, 43, 226, 0.616);
      border: none;
      text-align: center;
   }

   .data_atividade {
      height: 30px;
      width: 170px;
      border-radius: 18px;
      text-align: center;
      font-weight: bold;
      background-color: rgba(233, 233, 157, 0.801);
      border: 1px solid rgb(126, 125, 125);
   } 

   .div_excluir{
    border: 2px solid blue;
   }

   #inp_check{
    margin-left: -60px;
   }

   

</style>