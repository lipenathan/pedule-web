<template>
  <div class="item" :style="{ background: materia.color }">
    <h3>{{ materia.titulo }}</h3>
    <i class="pi pi-pencil"></i>
    <i class="pi pi-trash"></i>
  </div>
</template>

<script>
export default {
  props: {
    materia: {
      id: null,
      titulo: "",
      professor: "",
      descricao: "",
      cor: "",
      usuario: {},
      semanaHorario: [],
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  width: 100%;
  background-color: blue;
  margin: 5px 0;
  border-radius: 10px;
  padding: 5px;
}

.pi-pencil {
}

.pi-trash {
}
</style>