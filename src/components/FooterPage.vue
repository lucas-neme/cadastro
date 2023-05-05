<template>
  <footer class="footer">
    <div class="container">
      <p class="text">Powered by <span class="orange">Wampa</span></p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-top: 100px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  color: #fff;
  font-size: 14px;
}

.orange {
  color: #ff9900;
  font-weight: bold;
}
</style>
