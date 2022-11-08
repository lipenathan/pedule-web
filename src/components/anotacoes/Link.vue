<template>
  <div  class="input-group ">
    <input type="text" placeholder="descricao" >
    <input type="url" placeholder="URL">
  </div>
</template>

<script>
export default {
    data() {
    return {
      diaSemanaForm: "",
      qtdDias: 1,
      diasSemana: [{ diaSemanaForm: {}, horario: {} }],
    };
  },

  methods: {
    addQtdDias() {
      this.qtdDias++;
      this.diasSemana.push({ diaSemanaForm: {}, horario: {} });
    },
    update(index, diaSemana) {
      this.diasSemana[index] = diaSemana;
      this.$emit("updated", this.diasSemana);
    },
  },
}
</script>

<style>
input,input:focus {
  width: 49%;
  border-style: none;
  outline: none;
  background-color: rgb(249, 192, 139);
  margin: 0 2px;
}
</style>