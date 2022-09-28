<template>
  <div id="topo">
    <img
      id="logo"
      alt="Logo Pedule"
      src="../../../public/img/pedule-logo.png" />
    <input id="pesquisa" type="text" />
    <p id="nome-usuario">{{ nomeUsuario }}</p>
    <button id="btn-config">
      <img id="img-config" src="../../../public/img/down-arrow-grey.png" />
    </button>
  </div>
  <div id="nav-bar">
    <nav>
      <div id="nav-divider"></div>
      <ul>
        <router-link to="/agenda">Agenda</router-link>
        <router-link to="/atividades">Atividades</router-link>
        <router-link to="/materias">Matérias</router-link>
        <router-link to="/anotacoes">Anotações</router-link>
        <router-link to="/cursos">Cursos</router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nomeUsuario: "F. Nathan",
    };
  },
};
</script>
<style scoped>
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

#nav-divider {
  margin: 5px;
  margin-top: 20px;
  background: #000000;
  height: 0;
  border: 1px solid #a4a1d6;
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

#pesquisa {
  width: 320px;
  height: 28px;
  border: 1px black solid;
  border-radius: 20px;
  margin-top: 10px;
  margin-inline-start: 50px;
  background: url("../../../public/img/lupa.png") no-repeat left;
  background-size: 20px;
  background-position: 10px;
  background-color: #1498d5;
  padding: 0 5px 0 40px;
}

#topo {
  display: flex;
  align-items: center;
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