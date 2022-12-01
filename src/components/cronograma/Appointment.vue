<template>
  <div
    class="appointment"
    :style="{ background: settedColor }"
    v-tooltip.left="{
      value: `${compromisso.tipo}\n${compromisso.hora}:${compromisso.minuto}\n\n${compromisso.descricao}`,
      class: 'tooltip'
    }"
  >
    <h6>{{ compromisso.titulo }}</h6>
  </div>
</template>
<script>
import Tooltip from "primevue/tooltip";
export default {
  directives: {
    tooltip: Tooltip,
  },
  data() {
    return {
      description: "",
      color: "",
    };
  },
  props: {
    compromisso: Object,
  },
  computed: {
    settedColor() {
      return this.compromisso.cor ? this.compromisso.cor : "#9793937b";
    },
    tooltip() {
      return `${compromisso.tipo}\n${compromisso.hora}:${compromisso.minuto}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.appointment {
  font-size: 0.9rem;
  width: 100%;
  height: 2em;
  border-radius: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0.5rem;
}

.appointment h6 {
  display: contents;
  float: unset;
  padding-left: 8px;
  width: auto;
  height: 100%;
}

.tooltip {
  background: red;
}
</style>