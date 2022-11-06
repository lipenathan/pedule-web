<template>
<div>
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
  
     <atividade-item v-for="item in atividades" @itemClicked="openUpdateDialog(item)"
     :key="item.id" :atividade="item"></atividade-item>
     
    <p-button @click="openDialog(false)" class="btn-new-activity">Nova Atividade</p-button>

    <atividade-dialog
    @closedDialog="showDialog= false"
    :show="showDialog"
    :update="updateDialog"
    :atividade ="atividadeUpdate"
    ></atividade-dialog>
</div>
</template>
<script>
import AtividadeItem from '@/components/atividades/AtividadeItem.vue'
import Navbar from '@/components/template/Navbar.vue'
import PButton from 'primevue/button'
import AtividadeDialog from '@/components/atividades/AtividadeDialog.vue'
import api from '@/services/API'
export default {
  components: { Navbar, AtividadeDialog, PButton, AtividadeItem },
  data() {
    return {
      showDialog: false,
      updateDialog: false,
      atividades:[],
      atividadeUpdate: null,
    }
  },
  methods:{
    openDialog(dialogUpdate){
      this.updateDialog= dialogUpdate
      this.showDialog = !this.showDialog
    },
    getAtividades(){
      api().get('/atividade/listar/3').then((res)=>{
        this.atividades = res.data
      })
    },

    openUpdateDialog(item){
      this.atividadeUpdate = item
      this.openDialog(true)
    }
  },
  created(){
    this.getAtividades()}
}
</script>

<style scoped>
  .header_atividade {
  display: flex;
  width: 54rem;
  margin-left: 250px;
  background-color: #b9b9b9;
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
li {
  font-weight: bold;
  font-size: 18px;
  color: #3d3939;
}
.btn-new-activity {
  margin-left: -1140px;
  margin-top: -700px;
}
</style>