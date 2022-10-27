<template>
  <div class="dia-semana">
    <p-button
      label="Dia e horário"
      id="plus"
      class="p-button-raised p-button-rounded"
      icon="pi pi-plus"
      @click="addQtdDias"
    />
    <div>
    <dia-semana-item v-for="i in qtdDias" :key="i" @updated="update([i-1], $event)"/>
    </div>
  </div>
</template>

<script>
import PButton from "primevue/button";
import DiaSemanaItem from '@/components/materias/DiaSemanaItem.vue'
export default {
  components: { PButton, DiaSemanaItem },
  data() {
    return {
        diaSemanaForm: "",
        qtdDias: 1,
        diasSemana:[{diaSemanaForm:{}, horario:{}}]
    }
  },
  methods: {
    addQtdDias() {
        this.qtdDias++
        this.diasSemana.push({diaSemanaForm:{}, horario:{}})
    },
    update(index, diaSemana) {
        this.diasSemana[index] = diaSemana
        this.$emit("updated", this.diasSemana)
    }
  }
};
</script>

<style lang="scss" scoped>

.dia-semana {
    display: flex;
    align-items: start;
    justify-content: start;
}

.dia-semana-item {
    margin-top: 0.8rem;
}
</style>