<template>
  <!-- <div id="timeline">
  <div id="days">
    <img id="ic-clock" src="../../../public/img/icons/clock.png" />
    <ul>
      <li>Seg</li>
      <li>Ter</li>
      <li>Qua</li>
      <li>Qui</li>
      <li>Sex</li>
      <li>Sab</li>
      <li>Dom</li>
    </ul>
  </div>
  </div> -->
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
        <tr>
          <td>9:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>10:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>11:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>12:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>13:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>14:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>15:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>16:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>17:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>18:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>19:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>20:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>21:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>22:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>23:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
          </td>
        </tr>
        <tr>
          <td>00:00</td>
          <td v-for="item in appointments" :key="item.description">
            <appointment
              :color="item.color"
              :description="item.description"
            ></appointment>
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
      appointments: [
        {
          description: "Análise e Desenvolvimento de Sistemas",
          color: "rgb(20, 100, 80)",
        },
        {
          description: "Programação 1",
          color: "rgb(238, 78, 243)",
        },
        {
          description: "Banco de dados",
          color: "rgb(243, 252, 0)",
        },
        {
          description: "Lógica de programação",
          color: "rgb(20, 100, 80)",
        },
        {
          description: "Banco de dados",
          color: "rgb(0, 252, 252)",
        },
        {
          description: "Gestão de Projetos",
          color: "rgb(187, 201, 201)",
        },
      ],
    };
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