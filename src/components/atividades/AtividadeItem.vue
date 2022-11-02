<template>
  <div class="div_atividade">
    <input type="checkbox" name="" id="inp_check" />
    <h3 class="nome_atividade" @click="openItem()">{{ atividade.titulo }}</h3>
    <span class="data_atividade">{{ atividade.dataHorarioEntrega }}</span>
    <input type="radio" />
    <input type="button" value="Excluir" />
    <div>Teste</div>
  </div>
</template>

<script>
export default {
  props: {
    atividade: {
      id: 0,
      titulo: "",
      descricao: "",
      dataHorarioEntrega: "",
      prioridade: false,
      categoria: "",
      entregue: false,
    },
  },
  methods: {
    openItem(){
      this.$emit("itemClicked",true)
    }
  }
};
</script>

<style scoped>
.div_atividade {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
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
  cursor: pointer;
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

.div_excluir {
  border: 2px solid blue;
}

#inp_check {
  margin-left: -30px;
  
}

.btn-new-activity {
  margin-left: -1140px;
  margin-top: 200px;
}
</style>