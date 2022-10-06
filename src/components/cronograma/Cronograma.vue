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
  <table id="timeline">
    <thead id="days">
      <th>
        <img id="ic-clock" src="../../../public/img/icons/clock.png" />
      </th>
      <th v-for="day in headDays" :key="day">{{ day }}</th>
    </thead>
    <tbody>
      <tr>
        <td>19:00</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
      </tr>
      <tr>
        <td>20:00</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
        <td>TESTE</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      headDays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    };
  },
};
</script>
<style lang="scss" scoped>
$grey: #cccccc;
$dark-grey: #cecece92;

#timeline {
  margin-top: 3rem;
  margin-inline-start: auto;
  height: 30em;
  width: 60rem;
  border: $grey 2px solid;
  border-radius: 10px;
  vertical-align: top;
}

#days {
  border: $grey 2px solid;
  margin: 0.3rem auto 0 auto;
  border-radius: 10px;
  background: $dark-grey;
  height: 2em;
}

#days th {
  padding: 4px;
}

tbody tr {
  // border-bottom: solid 3px red;
  border: solid red 3px;
  line-height: 2em;
}

#ic-clock {
  height: auto;
  width: 2rem;
  margin-inline-start: 1rem;
  margin-top: auto;
  margin-bottom: auto;
}

ul li {
  display: inline;
  list-style-type: none;
}
</style>