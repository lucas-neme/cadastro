<template>
  <div class="container">
    <div class="content">
      <h3 class="left">Instruções para Excluir Doações</h3>
      <ol>
        <li>Na coluna <strong>"Quantidade"</strong>, alterar a quantidade para 0</li>
        <li>Clicar no botão "Excluir" que aparecerá na coluna <strong>"Ações"</strong></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstrucoesExcluir',
}
</script>

<style scoped>
.container {
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 20px;
}

.content {
  max-width: 800px;
  margin: auto;
}

.left {
  text-align: left;
  margin-bottom: 10px;
}

ol {
  list-style-type: decimal;
  margin-left: 20px;
  font-size: 1.1rem;
  line-height: 1.8rem;
}

ol li {
  margin-bottom: 10px;
}

strong {
  font-weight: bold;
}
</style>
