<template>
  <main>
    <h1 class="main-title">Your Best Advisor</h1>
    <div class="container">
      <QuoteContainer />
    </div>
  </main>
</template>

<script setup>
import QuoteContainer from './components/QuoteContainer.vue';
</script>

<style lang="scss">
body {
  background-color: $darkGrayishBlue;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.main-title {
  padding-bottom: 36px;
  font-size: 48px;
  color: $neonGreen;
}
.container {
  max-width: 540px;
  margin: 0 auto;
}
</style>
