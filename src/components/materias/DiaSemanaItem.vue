<template>
  <div class="dia-semana-item">
    <div class="radios">
      <div class="radio-group" @click="update">
        <span
          ><input
            type="radio"
            value="1"
            v-model="diaHorario.diaSemanaForm"
          />Dom</span
        >
        <span
          ><input
            type="radio"
            value="2"
            v-model="diaHorario.diaSemanaForm"
          />Seg</span
        >
        <span
          ><input
            type="radio"
            value="3"
            v-model="diaHorario.diaSemanaForm"
          />Ter</span
        >
        <span
          ><input
            type="radio"
            value="4"
            v-model="diaHorario.diaSemanaForm"
          />Qua</span
        >
        <span
          ><input
            type="radio"
            value="5"
            v-model="diaHorario.diaSemanaForm"
          />Qui</span
        >
        <span
          ><input
            type="radio"
            value="6"
            v-model="diaHorario.diaSemanaForm"
          />Sex</span
        >
        <span
          ><input
            type="radio"
            value="7"
            v-model="diaHorario.diaSemanaForm"
          />Sab</span
        >
      </div>
    </div>
    <span>Horário</span>
    <div class="time">
      <p-list-box
        v-model="diaHorario.horario.horaForm"
        :options="listaHora"
        optionLabel="hora"
        optionValue="code"
        @click="update"
      />
      <p-list-box
        v-model="diaHorario.horario.minutoForm"
        :options="listaMinutos"
        optionLabel="minuto"
        optionValue="code"
        @click="update"
      />
    </div>
  </div>
</template>

<script>
import PRadioButton from "primevue/radiobutton";
import PListBox from "primevue/listbox";
export default {
  components: { PRadioButton, PListBox },
  data() {
    return {
      diaHorario: {
        id: null,
        diaSemanaForm: null,
        horario: {
          horaForm: null,
          minutoForm: null,
        },
      },
      listaHora: [
        { hora: "00", code: "00" },
        { hora: "01", code: "01" },
        { hora: "02", code: "02" },
        { hora: "03", code: "03" },
        { hora: "04", code: "04" },
        { hora: "05", code: "05" },
        { hora: "06", code: "06" },
        { hora: "07", code: "07" },
        { hora: "08", code: "08" },
        { hora: "09", code: "09" },
        { hora: "10", code: "10" },
        { hora: "11", code: "11" },
        { hora: "12", code: "12" },
        { hora: "13", code: "13" },
        { hora: "14", code: "14" },
        { hora: "15", code: "15" },
        { hora: "16", code: "16" },
        { hora: "17", code: "17" },
        { hora: "18", code: "18" },
        { hora: "19", code: "19" },
        { hora: "20", code: "20" },
        { hora: "21", code: "21" },
        { hora: "22", code: "22" },
        { hora: "23", code: "23" },
      ],
      listaMinutos: [
        { minuto: "00", code: "00" },
        { minuto: "15", code: "15" },
        { minuto: "30", code: "30" },
        { minuto: "45", code: "45" },
      ],
    };
  },
  methods: {
    update() {
      this.$emit("updated", this.diaHorario);
    },
    setSemanaHorario() {
      if (this.set) {
        let horario = this.semanaHorario.horario.split(":");
        this.diaHorario.id = this.semanaHorario.id
        this.diaHorario.diaSemanaForm = this.semanaHorario.semana.id;
        this.diaHorario.horario.horaForm = horario[0];
        this.diaHorario.horario.minutoForm = horario[1];
      }
    },
  },
  props: {
    set: Boolean,
    semanaHorario: {
      id: null,
      semana: {},
      horario: "",
    },
  },
  created() {
    this.setSemanaHorario();
  },
};
</script>

<style lang="scss" scoped>
.dia-semana-item {
  text-align: center;
}

.radio-group {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: unset;
  margin-left: 1rem;
}

.p-radiobutton {
  margin-left: 0.8rem;
}

.time {
  width: 100%;
  display: flex;
  justify-content: center;
}

.p-listbox {
  margin-left: 0.6rem;
  height: 3rem;
  overflow-y: auto;
}

.p-listbox::-webkit-scrollbar {
  display: none;
}

label {
  display: block;
}
</style>