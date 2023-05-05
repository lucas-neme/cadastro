<template>
  <div>
    <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/cadastro">Cadastrar Doações</router-link> | 
    <router-link to="/doacoes">Visualizar Doações</router-link>
  </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: nav;
  background-color: #333;
  padding: 10px;
  color: #fff;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

nav a:hover {
  text-decoration: underline;
}

router-link {
  text-decoration: none;
  color: #FFA500; /* cor do texto laranja */
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
}

router-link.active {
  text-decoration: underline;
}
</style>