<template>
  <div class="topo">
    <img
      id="logo"
      alt="Logo Pedule"
      src="../../../public/img/pedule-logo.png"
    />
    <!-- <input id="pesquisa" type="text" /> -->

    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <p-input-text
        class="pesquisa"
        type="text"
        v-model="pesquisa"
        placeholder="Pesquisar"
      />
    </span>
    <p id="nome-usuario" v-if="usuario">{{ simpleName }}</p>
    <p id="nome-usuario" v-else>Você não está logado</p>
    <template v-if="!isMenuOpen">
      <button
        id="btn-config"
        type="button"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      >
        <i id="img-config" class="pi pi-chevron-down" />
      </button>
    </template>
    <template v-else>
      <button
        id="btn-config"
        type="button"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      >
        <i id="img-config" class="pi pi-chevron-up" />
      </button>
    </template>
    <p-menu
      id="overlay_menu"
      ref="menu"
      :model="items"
      :popup="true"
      @show="isMenuOpen = true"
      @hide="isMenuOpen = false"
    />
  </div>
  <div id="nav-bar">
    <nav>
      <div class="nav-divider"></div>
      <ul>
        <router-link to="/cronograma">Cronograma</router-link>
        <router-link to="/atividades">Atividades</router-link>
        <router-link to="/materias">Matérias</router-link>
        <router-link to="/anotacoes">Anotações</router-link>
        <router-link to="/cursos">Cursos</router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
import PInputText from "primevue/inputtext";
import PMenu from "primevue/menu";
import { mapGetters } from "vuex";
import Template from "./Template.vue";
import { useToast } from "vue-toastification";
import { POSITION } from "vue-toastification";
export default {
  components: { PInputText, PMenu },
  data() {
    Template;
    return {
      toast: useToast(),
      pesquisa: "",
      isMenuOpen: false,
      items: [
        {
          label: "Configurações",
          icon: "pi pi-cog",
          command: () => {
            this.toast.warning("Tela ainda não implementada", {
              position: POSITION.TOP_CENTER,
              timeout: 2500,
            });
          },
        },
        {
          label: "Sair",
          icon: "pi pi-power-off",
          command: () => {
            this.$store.dispatch("usuario", null);
            this.$store.dispatch("token", null);
            this.$router.push("/login");
          },
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
  computed: {
    ...mapGetters(["usuario"]),
    simpleName() {
      let nomes = this.usuario.nome.split(" ");
      let nome = "";
      if (nomes.lenght > 1) {
        nome = `${nomes[0]} ${nomes[1].charAt(0)}.`;
      } else {
        nome = nomes[0];
      }
      return nome;
    },
  },
};
</script>
<style lang="scss" scoped>
$divider-grey: #a4a1d644;

nav {
  height: 50px;
  text-align: center;
}

nav ul {
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  padding: 0 200px 0 200px;
}

.nav-divider {
  margin: 2rem;
  margin-block-start: auto;
  margin-block-end: auto;
  margin-top: 20px;
  height: 0;
  background: $divider-grey;
  border: 0.02rem solid $divider-grey;
  border-radius: 10px;
}

ul a {
  text-decoration-line: none !important;
}

#logo {
  display: flex;
  width: 130px;
  height: auto;
  margin: 15px;
  cursor: pointer;
}

.p-inputtext {
  height: 2rem;
  width: 320px;
  border-radius: 20px;
  margin-top: 10px;
}

i.pi.pi-search::before {
  position: relative !important;
  top: 5px;
}

.p-inputtext,
i.pi.pi-search::before {
  margin-left: 2rem;
}

.topo {
  display: flex;
  align-items: center;
  height: 5rem;
}

#btn-config {
  margin-left: unset;
  margin-right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
}

#img-config {
  width: 25px;
  height: auto;
}

#nome-usuario {
  width: max-content;
  height: min-content;
  margin-left: auto;
  margin-right: 0;
}
</style>