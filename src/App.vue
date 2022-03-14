<script setup lang="ts">
import Home from './pages/Home.vue';
const theme = 'purple';
</script>

<template>
  <main :class="`app-container ${theme}`">
    <Home />
  </main>
</template>

<style lang="scss">
@use './scss/_purple-theme.scss';
@use './scss/_light-theme.scss';

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.app-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}

.purple {
  background-color: purple-theme.$dark-purple;
  color: purple-theme.$white;
}
</style>
