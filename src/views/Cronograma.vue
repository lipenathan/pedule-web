<template>
  <div>
    <custom-template>
      <template v-slot:content>
        <cronograma></cronograma>
      </template>
    </custom-template>
    <p-button
      class="p-button-raised p-button-rounded button-add"
      icon="pi pi-plus"
      @click="openDialog(false)"
    />
  </div>
</template>

<script>
import PButton from "primevue/button";
import Cronograma from "@/components/cronograma/Cronograma.vue";
import CustomTemplate from "@/components/template/Template.vue";

export default {
  components: { Cronograma, CustomTemplate, PButton },
};
</script>
<style lang="scss" scoped>
$margin-button: 4rem;

cronograma {
  margin-top: 2rem;
  margin-inline-start: auto;
  margin-inline-end: auto;
}

.button-add {
  width: 3.5rem !important;
  height: 3.5rem !important;
  position: fixed;
  bottom: $margin-button;
  right: $margin-button;
}
</style>