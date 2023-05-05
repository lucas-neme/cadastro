<template>
  <div id="app">
    <CadastroDiversos @cadastro="adicionarDoacao" />
    <DiversosView :doacoes="doacoes" @deletar="deletarDoacao" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import CadastroDiversos from './components/CadastroDiversos.vue';
import DiversosView from './views/DiversosView.vue';
import FooterPage from './components/FooterPage.vue'

export default {
  components: {
    NavBar,
    CadastroDiversos,
    DiversosView,
    FooterPage
  },
  data() {
    return {
      doacoes: [],
    }
  },
  created() {
    // Verifica se existem dados salvos no armazenamento local
    const doacoesSalvas = JSON.parse(localStorage.getItem('doacoes'))
    if (doacoesSalvas && doacoesSalvas.length > 0) {
      this.doacoes = doacoesSalvas
    }

    // Adiciona um evento para quando a página for fechada ou atualizada
    window.addEventListener('beforeunload', this.salvarDadosLocalmente)
  },
  methods: {
    adicionarDoacao(doacao) {
      this.doacoes.push(doacao);
      this.salvarDadosLocalmente()
    },
    deletarDoacao(index) {
      this.doacoes.splice(index, 1);
      this.salvarDadosLocalmente()
    },
    salvarDadosLocalmente() {
      localStorage.setItem('doacoes', JSON.stringify(this.doacoes))
    }
  },
  beforeDestroy() {
    // Remove o evento adicionado quando a página for destruída
    window.removeEventListener('beforeunload', this.salvarDadosLocalmente)
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 120px;
}

.form-container {
  margin-bottom: 20px;
  margin-top: -20px;
}

.view-container {
  width: 100%;
  padding: 20px;
}
</style>
