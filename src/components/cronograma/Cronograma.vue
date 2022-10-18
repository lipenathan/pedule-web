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
            <template v-for="appointment in row.appointments" :key="appointment.hour">
              <appointment v-if="appointment.week == i"
              :color="appointment.color"
              :description="appointment.description"></appointment>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Appointment from "@/components/cronograma/Appointment.vue";
export default {
  components: { Appointment },
  data() {
    return {
      headDays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
      rows: [],
      mockAppointments: [
        {
          description: "Análise e Desenvolvimento de Sistemas",
          color: "rgb(20, 100, 80)",
          week: 1,
          hour: 15,
        },
        {
          description: "Programação 1",
          color: "rgb(238, 78, 243)",
          week: 5,
          hour: 19,
        },
        {
          description: "Banco de dados",
          color: "rgb(243, 252, 0)",
          week: 3,
          hour: 21,
        },
        {
          description: "Lógica de programação",
          color: "rgb(20, 100, 80)",
          week: 1,
          hour: 14,
        },
        {
          description: "Banco de dados",
          color: "rgb(0, 252, 252)",
          week: 2,
          hour: 19,
        },
        {
          description: "Gestão de Projetos",
          color: "rgb(187, 201, 201)",
          week: 1,
          hour: 20,
        },
        {
          description: "Estrutura de dados",
          color: "rgb(187, 201, 201)",
          week: 2,
          hour: 12,
        },
        {
          description: "Tópicos especiais",
          color: "rgb(187, 201, 201)",
          week: 3,
          hour: 11,
        },
        {
          description: "Redes",
          color: "rgb(187, 201, 201)",
          week: 4,
          hour: 10,
        },
        {
          description: "Empreendedorismo",
          color: "rgb(187, 201, 201)",
          week: 5,
          hour: 9,
        },
        {
          description: "Matemática para computação",
          color: "rgb(187, 201, 201)",
          week: 6,
          hour: 20,
        },
      ],
    };
  },
  methods: {
    createRows() {
      for (let i = 0; i < 24; i++) {
        let row = { hour: i + ":00", appointments: [] };
        this.rows.push(row);
      }
      for (let i = 0; i < this.mockAppointments.length; i++) {
        let hour = this.mockAppointments[i].hour;
        this.rows[hour].appointments.push(this.mockAppointments[i]);
      }
    }
  },
  created() {
    this.createRows();
  },
};
</script>
<style lang="scss" scoped>
$grey: #cccccc;
$dark-grey: #cecece92;

.schedule {
  border: solid 0.1rem $grey;
  border-radius: 1rem;
  height: 25rem;
  width: 55rem;
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

.schedule tr {
  height: 4rem;
  border-bottom: solid 0.1rem $grey;
}

// .schedule tbody {
//   width: 100%;
// }

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