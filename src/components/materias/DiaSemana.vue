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
      <template v-if="set">
        <dia-semana-item
          :set="set"
          v-for="(item, i) in semanaHorario"
          :key="item.id"
          @updated="update([i], $event)"
          :semanaHorario="item"
        />
      </template>
      <template v-else>
        <dia-semana-item
          v-for="i in qtdDias"
          :key="i"
          @updated="update([i], $event)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import PButton from "primevue/button";
import DiaSemanaItem from "@/components/materias/DiaSemanaItem.vue";
export default {
  components: { PButton, DiaSemanaItem },
  data() {
    return {
      diaSemanaForm: "",
      qtdDias: 1,
      diasSemana: [{ diaSemanaForm: {}, horario: {} }],
    };
  },
  props: {
    semanaHorario: [],
    set: Boolean,
  },
  methods: {
    addQtdDias() {
      this.qtdDias++;
      this.diasSemana.push({id:null, diaSemanaForm: null, horario: {} });
    },
    update(index, diaSemana) {
      this.diasSemana[index] = diaSemana;
      this.$emit("updated", this.diasSemana);
    },
    setFields() {
      if (this.set) {
        this.diasSemana = []
        for (let i in this.semanaHorario) {
          let diaSemana = {
            id: this.semanaHorario[i].id,
            diaSemanaForm: this.semanaHorario[i].semana.id,
            horario: {
              horaForm: this.semanaHorario[i].horario.split(":")[0],
              minutoForm: this.semanaHorario[i].horario.split(":")[1],
            },
          };
          this.diasSemana.push(diaSemana)
        }
        this.$emit("updated", this.diasSemana);
      }
    },
  },
  created() {
    this.setFields();
  },
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