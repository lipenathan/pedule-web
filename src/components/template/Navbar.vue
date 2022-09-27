<template>
  <div id="topo">
    <img id="logo" alt="Logo Pedule" src="../../../public/img/pedule-logo.png">
    <input id="pesquisa" type="text">
  </div>
  <div id="nav-bar">
    <nav>
      <div id="nav-divider"></div>
      <ul>
        <router-link to="/agenda">Agenda</router-link>
        <router-link to="/">Atividades</router-link>
        <router-link to="/about">Matérias</router-link>
        <router-link to="">Anotações</router-link>
        <router-link to="">Cursos</router-link>
      </ul>
    </nav>
  </div>
</template>
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
  height: 0.0;
  border: 1px solid #A4A1D6;
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
}

#pesquisa {
  width: 320px;
  height: 28px;
  border: 1px black solid;
  border-radius: 20px;
  margin-top: 10px;
  margin-inline-start: 50px;
  background: url("../../../public/img/lupa.png") no-repeat left;
  background-size: 25px;
  background-color: #1498D5;
}

#topo {
  display: flex;
  align-items: center;
}
</style>