<template>
  <div class="schedule">
    <table class="timeline">
      <thead>
        <tr>
          <th>
            <img class="ic-clock" src="../../../public/img/icons/clock.png" />
          </th>
          <th v-for="day in headDays" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in this.rows" :key="row.hour">
          <td>{{row.hour}}</td>
          <td v-for="i in 7" :key="i">
            <template v-for="appointment in row.appointments" :key="appointment.hora">
              <appointment v-if="appointment.semana == i"
              :compromisso="appointment"></appointment>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Appointment from '@/components/cronograma/Appointment.vue';
import api from '@/services/API';
import { mapGetters } from 'vuex';
export default {
  components: { Appointment },
  data() {
    return {
      headDays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
      rows: [],
      compromissos:[],
    };
  },
  methods: {
    createRows() {
      for (let i = 0; i < 24; i++) {
        let row = { hour: i + ":00", appointments: [] };
        this.rows.push(row);
      }
      for (let i = 0; i < this.compromissos.length; i++) {
        let hour = this.compromissos[i].hora;
        this.rows[hour].appointments.push(this.compromissos[i]);
      }
    },
    getCompromissos() {
      api.get(`/cronograma/${this.usuario.id}`)
      .then((response) => {
        this.compromissos = response.data
        this.createRows()
      })
      .catch((error) => {

      })
    }
  },
  created() {
    this.getCompromissos()
  },
  computed: {
    ...mapGetters(['usuario'])
  }
};
</script>
<style lang="scss" scoped>
$grey: #cccccc;
$dark-grey: #cecece92;

.schedule {
  display: flex;
  border: solid 0.1rem $grey;
  border-radius: 1rem;
  height: 25rem;
  width: 65rem;
  overflow-y: auto;
}

.schedule tbody {
  height: 25rem;
  width: 55rem;
}

.schedule td {
  max-width: 3rem;
}

.schedule thead th {
  background: $grey;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}

.schedule::-webkit-scrollbar {
  display: none;
}

.schedule tr {
  height: 2.5rem;
  border-bottom: solid 0.1rem $grey;
}

table {
  border-collapse: collapse;
  width: 100%;
}

.ic-clock {
  height: auto;
  width: 2rem;
  margin-inline-start: 1rem;
  margin-top: auto;
  margin-bottom: auto;
}
</style>