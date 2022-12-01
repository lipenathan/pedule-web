<template>
  <div class="dia-semana-item">
    <div class="radios">
      <div class="radio-group" @click="update">
        <span
          ><input
            type="radio"
            value="1"
            v-model="diaHorario.semana.id"
          />Dom</span
        >
        <span
          ><input
            type="radio"
            value="2"
            v-model="diaHorario.semana.id"
          />Seg</span
        >
        <span
          ><input
            type="radio"
            value="3"
            v-model="diaHorario.semana.id"
          />Ter</span
        >
        <span
          ><input
            type="radio"
            value="4"
            v-model="diaHorario.semana.id"
          />Qua</span
        >
        <span
          ><input
            type="radio"
            value="5"
            v-model="diaHorario.semana.id"
          />Qui</span
        >
        <span
          ><input
            type="radio"
            value="6"
            v-model="diaHorario.semana.id"
          />Sex</span
        >
        <span
          ><input
            type="radio"
            value="7"
            v-model="diaHorario.semana.id"
          />Sab</span
        >
      </div>
    </div>
    <div class="field col-12 md:col-4">
      <label for="clock">Horário</label>
      <p-calendar
      class="date-picker"
        inputId="clock"
        v-model="horarioForm"
        :timeOnly="true"
        @date-select="update"
        hideOnDateTimeSelect
        :stepMinute="15"
      />
    </div>
  </div>
</template>

<script>
import PRadioButton from "primevue/radiobutton";
import PListBox from "primevue/listbox";
import PCalendar from "primevue/calendar";
export default {
  components: { PRadioButton, PListBox, PCalendar },
  data() {
    return {
      diaHorario: {
        id: null,
        semana: {},
        horario: null
      },
      horarioForm: null,
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
      let hora = this.horarioForm.getHours()
      let minuto = this.horarioForm.getMinutes()
      this.diaHorario.horario = `${hora}:${minuto}:00`
      this.$emit("updated", this.diaHorario);
    },
    setSemanaHorario() {
      if (this.set) {
        this.diaHorario.id = this.semanaHorario.id;
        this.diaHorario.semana = this.semanaHorario.semana;
        this.diaHorario.horario = this.semanaHorario.horario
        this.horarioForm = this.diaHorario.horario
      }
    },
  },
  props: {
    set: Boolean,
    semanaHorario: {
      id: null,
      semana: null,
      horario: null,
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

.date-picker {
  text-align: center!important;
}

label {
  display: block;
}
</style>