<template>
  <div class="wrapper">
    <p-carousel
      :value="lembretes"
      :numVisible="1"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="20000"
      style="width: 100%; height: 100%; margin-top: 2em"
    >
      <template #item="lembrete">
        <div class="lembrete">
          <h6>{{ lembrete.data.titulo }}</h6>
          <span>{{ lembrete.data.descricao }}</span>
        </div>
      </template>
    </p-carousel>
  </div>
</template>
<script>
import axios from "@/services/API";
import { mapGetters } from "vuex";
import PCarousel from "primevue/carousel";
export default {
  components: { PCarousel },
  data() {
    return {
      lembretes: [],
    };
  },
  methods: {
    getLembretes() {
      axios
        .get(`/anotacao/listar/${this.usuario.id}`)
        .then((response) => {
          let anotacoes = response.data;
          this.lembretes = anotacoes.filter((anotacao) => anotacao.lembrete);
        })
        .catch((error) => {});
    },
  },
  computed: {
    ...mapGetters(["usuario"]),
  },
  created() {
    this.getLembretes();
  },
};
</script>
<style scoped>
.wrapper {
  width: 30rem;
  height: 8rem;
  background: #f4f4d6;
  border-radius: 1rem;
}
</style>