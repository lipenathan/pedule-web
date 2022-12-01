<template>
  <div class="sidebar">
    <div class="entire">
      <a v-for="item in materias" :key="item.id" href="">{{ item.titulo }}</a>
    </div>
    <div class="short">
      <a v-for="item in materias" :key="item.id" href="">{{ item.abreviacao }}</a>
    </div>
  </div>
</template>

<script>
import api from "@/services/API";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      materias: [],
    };
  },
  methods: {
    getMaterias() {
      if (this.materias.length == 0) {
        api
          .get(`/materia/listar/${this.usuario.id}`)
          .then((res) => {
            this.materias = res.data;
          })
          .catch((error) => {});
      }
    },
  },
  created() {
    this.getMaterias();
  },
  computed: {
    ...mapGetters(["usuario"]),
  },
};
</script>

<style lang="scss" scoped>
$grey: #9793937b;

$border: 0 1rem 1rem 0;

.sidebar,
.sidebar:hover {
  margin: 0;
  padding: 0;
  background-color: $grey;
  position: fixed;
  width: 4rem;
  height: fit-content;
  min-height: 100%;
  border-radius: $border;
  transition: 500ms;
}

.sidebar:hover {
  width: 8rem;
}

.sidebar .entire {
  display: none;
}

.sidebar:hover .entire {
  display: block;
}

.sidebar .short {
  display: block;
}

.sidebar:hover .short {
  display: none;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  border-radius: $border;
}

.sidebar a.active {
  background-color: #04aa6d;
  color: white;
  transition: 500ms;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
  transition: 500ms;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}
</style>
