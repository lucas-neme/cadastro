<template>
  <div class="formulario">
    <div class="table-wrapper formulario-wrapper">
      <h2>Cadastro de Doações Diversas</h2>
      <form @submit.prevent="submit">
        <div class="form-group">
        <label for="item">Item Doado:</label>
        <input type="text" id="item" v-model="item">
        <label for="quantidade">Quantidade:</label>
        <input type="number" id="quantidade" v-model="quantidade">
        </div>
        <button type="submit">Adicionar Doação</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: '',
      quantidade: 0,
      situacao: 'recebido',
      dataRecebimento: ''
    }
  },
  props: {
    doacoes: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    submit() {
      this.$emit('cadastro', {
        item: this.item,
        quantidade: this.quantidade,
        situacao: "recebido",
        dataRecebimento: new Date().toLocaleDateString()
      })
      this.item = ''
      this.quantidade = 0
    },
    adicionarDoacao(doacao) {
    this.doacoes.push(doacao)
    }
  }
}
</script>

<style>
.table-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.formulario-wrapper {
  margin-top: 50px;
}

.formulario {
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  padding: 40px;
  text-align: center;
}

.formulario h2 {
  color: #555;
  font-size: 36px;
  margin-bottom: 20px;
}

.formulario label {
  color: #555;
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
  text-align: left;
}

.formulario input[type="date"],
.formulario input[type="number"],
.formulario select {
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0.1);
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
}

.formulario input[type="text"] {
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0.1);
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
}

.formulario select {
  height: 40px;
  appearance: none;
  background-color: #fff;
  background-image: none;
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 30px;
}

.formulario button {
background-color: #2ecc71;
border: none;
border-radius: 5px;
color: #fff;
cursor: pointer;
font-size: 18px;
padding: 10px 20px;
margin-top: 20px
}

.formulario .form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
}

.formulario .form-group label {
  text-align: left;
}

.formulario .form-group input[type="date"] {
  width: 80%;
  height: 35px
}
.formulario .form-group select {
  width: 85%;
  height: 40px
}

.formulario .form-group input[type="text"] {
  width: 80%;
  height: 30px
}

.formulario .form-group input[type="number"] {
  width: 80%
}
</style>