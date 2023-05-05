<template>
  <div>
    <div class="table=wrapper">
    <h1 class="table-title">Lista de Doações Diversas</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Item Doado</th>
          <th>Quantidade</th>
          <th>Situação</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(doacao, index) in doacoes" :key="index">
          <td>{{ doacao.item }}</td>
          <td>{{ doacao.quantidade }}</td>
          <td class="status-cell">
              <select v-model="doacao.situacao" @change="updateDoacao(doacao)">
                <option value="recebido">RECEBIDO</option>
                <option value="doado">DOADO</option>
              </select>
              <div class="status-date" v-if="doacao.situacao === 'recebido'">em {{ doacao.dataRecebimento }}</div>
              <div class="status-date" v-if="doacao.situacao === 'doado'">em {{ doacao.dataDoado }}</div>
            </td>
            <td class="action-cell" v-if="doacao.situacao === 'recebido' && doacao.quantidade !== 0">
              <button class="send-btn">Encaminhar doação</button>
            </td>
            <td class="action-cell" v-if="doacao.quantidade === 0 || doacao.situacao === 'doado'">
              <button class="delete-btn" @click="deletarDoacao(index)">Excluir</button>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    doacoes: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    adicionarDoacao(cadastro) {
      this.doacoes.push(cadastro)
    },
    deletarDoacao(index) {
      this.doacoes.splice(index, 1)
    },
    updateDoacao(doacao) {
      if (doacao.situacao === 'recebido') {
        doacao.dataRecebimento = new Date().toLocaleDateString()
      } else if (doacao.situacao === 'doado') {
        doacao.dataDoado = new Date().toLocaleDateString()
        if (doacao.quantidade === 0) {
          doacao.quantidade = null
        }
      }
    }
  },
  watch: {
    doacoes: {
      handler: function (doacoes) {
        doacoes.forEach(doacao => {
          if (doacao.quantidade === 0) {
            doacao.situacao = 'doado'
            doacao.quantidade = null
          } else if (doacao.quantidade > 0 && doacao.situacao === 'doado') {
            doacao.situacao = 'recebido'
          } else if (doacao.quantidade > 0 && !doacao.situacao) {
            doacao.situacao = 'recebido'
          }
        })
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.tabela {
  margin: 0 auto;
  width: 90%;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

.delete-btn {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

.delete-btn:hover {
  background-color: #da190b;
}

</style>