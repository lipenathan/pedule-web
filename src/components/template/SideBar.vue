<template>
    <div class="sidebar">
      <a href="">Programação</a>
      <a href="">Banco de Dados</a>
      <a href="">Redes</a>
      <a href="">Lógica de Programação</a>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$grey: #9b98981f;

.sidebar {
  margin: 0;
  padding: 0;
  width: 8rem;
  background-color: transparent;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  border-radius: 0 20px 20px 0;
}

.sidebar a.active {
  background-color: #04aa6d;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}
</style>