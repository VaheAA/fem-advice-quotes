<template>
  <main>
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
#app {
  height: 100%;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.container {
  max-width: 540px;
  margin: 0 auto;
}
</style>
