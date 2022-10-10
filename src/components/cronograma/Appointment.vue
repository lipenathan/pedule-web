<template>
  <div id="commitment" :style="{ background: color }">
    <p>{{ description }}</p>
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
    description: "",
    color: "",
  },
};
</script>
<style lang="scss" scoped>
#commitment {
  font-size: 0.9rem;
  width: 100%;
  height: 2em;
  border-radius: 10px;
  overflow: hidden;
  
  white-space: nowrap;
  text-overflow: ellipsis;
}

#commitment p {
    display: table-cell;
}
</style>