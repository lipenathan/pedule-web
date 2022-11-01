<template>
    <div v-for="card in Card" class="card" :key="card.id" :style="{background: card.color}" @click="setAnotacao"  data-bs-toggle="modal" data-bs-target="#myModal">
            {{card.Titulo}}
            <br><br><br>
            {{card.Descricao}}
        </div>
  </template>
  
  <script>
  
  
  
  export default {
  data(){
      return {
          Card:[{ id: "1", Titulo: "Banco de Dados I", Descricao: "lorem ipsun"},
             {id: "2", Titulo: "Programação", Descricao: ""},
             {id: "4", Titulo: "Banco de Dados II", Descricao: ""},
             {id: "5", Titulo: "Gestão de Projetos", Descricao: "" },
             {id: "6", Titulo: "Projeto de Sistemas", Descricao: "" },
             {id: "7", Titulo: "Engenharia de Software", Descricao: "" },
             {id: "9", Titulo: "Algoritmo e Logica", Descricao: "" },
             {id: "10", Titulo: "Programção Orientada a Objetos", Descricao: "" },
             {id: "11", Titulo: "ESTRUTURA DE DADOS I", Descricao: "" },
             {id: "12", Titulo: "ESTRUTURA DE DADOS II", Descricao: "" }
         ] 
         
         
      }
      
  },
  
  }
  </script>
  
  <style lang="scss" scoped>
  
  $button: rgb(61, 169, 252,);
  $card: rgb(249, 192, 139);
  
  .card {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0.9rem .7rem;
    justify-content: center;
    background-color: $card;
    width: 30%;
    height: 40%;
    border-radius: 0.7rem;
    border: none;
    font-weight: 600;
    box-shadow: 0px 10px 10px #00000056;
    cursor: pointer;
    
  }
  
  </style>