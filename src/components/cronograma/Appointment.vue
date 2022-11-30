<template>
  <div class="appointment" :style="{ background: settedColor }">
    <p>{{ compromisso.titulo }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      description: "",
      color: "",
    };
  },
  props: {
    compromisso: Object
  },
  computed: {
    settedColor() {
      return this.compromisso.cor?this.compromisso.cor:'#9793937b'
    }
  }
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
}

.appointment p {
    display: contents;
    float: unset;
    padding-left: 8px;
    width: auto;
    height: 100%;
}
</style>