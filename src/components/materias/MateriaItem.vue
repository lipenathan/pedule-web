<template>
  <div class="item" :style="{ background: '#' + materia.cor }">
    <h3>{{ materia.titulo }}</h3>
    <p-button @click="edit()" class="edit" icon="pi pi-pencil"></p-button>
    <p-button class="delete" icon="pi pi-trash"></p-button>
  </div>
</template>
<script>
import PButton from "primevue/button";
export default {
  components: { PButton },
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
  methods: {
    edit() {
      this.$emit('edit', true)
    }
  }
};
</script>

<style lang="scss" scoped>
$button-size: 3rem;

.item {
  width: 98%;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 10px;
  border: 1px solid;
  height: 3rem;
  display: flex;
  align-items: center;
}

.item > h3 {
  margin-left: 1rem;
  width: fit-content;
}

.item > .edit {
  width: min-content;
  margin-right: 1rem;
  margin-left: auto;
}

.item > .delete {
  margin-right: 1rem;
  width: min-content;
}

.p-button {
  background-color: transparent;
  border: none;
  color: black;
}

.p-button:enabled:hover {
  background: transparent;
  color: #ffffff;
  border-color: none;
}

.p-button,
p-button:enabled:hover {
  border-radius: 50px;
  width: $button-size;
  height: $button-size;
}
</style>