<template>
  <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
        <li v-for="(lembrete, index) of lembretes" :key="index" data-bs-target="#carouselExampleIndicators" :class="{active: !index}" :data-slide-to="index">
        </li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(lembrete, index) of lembretes" :key="index" class="carousel-item" :class="{active: !index}">
        {{ lembrete.titulo }}
        {{ lembrete.descricao }}
      </div>

    </div>
    <button class="carousel-control-prev" type="button" href="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" href="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</template>

<script>
import Carousel from 'primevue/carousel';
import Api from "@/services/API";
import { mapGetters } from "vuex";
export default {
  components: {
    Carousel
  },
  data() {
    return {
      anotacoes: [
        {
          id: 0,
          titulo: "",
          descricao: "",
          lembrete: false,
        },
      ],
      lembretes: [{}]
    }

  },
  methods: {
    getLembretes() {
      Api()
        .get(`/anotacao/listar/${this.usuario.id}`, {})
        .then((response) => {
          this.anotacoes = response.data;
          this.lembretes = this.anotacoes.filter(anotacao => Boolean(anotacao.lembrete));
        });
    },
  },
  created() {
    this.getLembretes();
  },
  computed: {
    ...mapGetters(['usuario'])
  }
}

</script>

<style lang="scss" scoped>
#carouselExampleIndicators {
  width: 47.875rem;
  height: 9.498rem;
  border: 1px solid black;
  background: rgb(244, 244, 214);
}

.titulo {
  display: flex;
  margin: 0.8rem 1rem;
}
</style>