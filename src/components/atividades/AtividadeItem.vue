<template>
  <div class="div_atividade_pai">
    <div class="div_atividade">
      <input type="checkbox" name="" id="inp_check" />
      <h3 class="nome_atividade" @click="openItem()">{{ atividade.titulo }}</h3>
      <span class="data_atividade">{{ atividade.dataHorarioEntrega }}</span>
      <label class="check_prioridade">
        <input type="checkbox"/>
        <span></span>
      </label>
      <span class="icon_trash" @click="dialogExcluir()"
        ><i class="fa-solid fa-trash-can"></i></span>
    </div>
    <div class="titulo_drescricao">
      <h4>Descrição</h4>
    </div>
    <div class="dv_descricao">
      <p>
        Aqui vai a descrição da atividade para testar como ficará a mensagem na
        interface do usuário
      </p>
    </div>
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
    openItem() {
      this.$emit("itemClicked", true);
    },
    dialogExcluir() {
      confirm("Deseja Realmente Excluir?");
      let ip = document.querySelector
    },
  },
};
</script>

<style scoped>
.titulo_drescricao {
  display: flex;
  align-items: center;
  margin-left: 18px;
  height: 20px;
}

.dv_descricao {
  display: flex;
  height: 40px;
  margin-left: 18px;
}

.dv_descricao p {
  display: flex;
  text-align: left;
  font-size: 13px;
  margin: 0;
  width: auto;
  height: 40px;
}

.div_atividade {
  display: flex;
  height: 40px;
  align-items: center;
}
.div_atividade_pai {
  display: flex;
  flex-direction: column;
  width: 54rem;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 8px;
  margin-left: 250px;
  height: 100px;
}

.nome_atividade {
  display: flex;
  height: 30px;
  width: 170px;
  margin-left: 37px;
  border-radius: 6px;
  background-color: rgba(137, 43, 226, 0.616);
  border: none;
  padding-left: 3px;
  cursor: pointer;
}

.data_atividade {
  height: 30px;
  width: 170px;
  margin-left: 63px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  background-color: rgba(233, 233, 157, 0.801);
  border: 1px solid rgb(126, 125, 125);
}

#inp_check {
  margin-left: 18px;
  width: 18px;
  height: 18px;
}

.check_prioridade input {
    display: none;
  
}

.check_prioridade span {
    width: 18px;
    height: 18px;
    display: block;
    background-color: #8BFFA5;
    margin-left: 65px;
    border-radius: 15px;
}

.check_prioridade input:checked + span {
    background-color: #FF8B8B;
}

input[type="button"] {
  margin-left: 185px;
  border: none;
}
.icon_trash {
  margin-left: 196px;
  opacity: 0.6;
  font-size: 20px;
  cursor: pointer;
}
</style>