<script setup lang="ts">
import Home from './pages/Home.vue';
import Overlay from './components/UI/Overlay.vue';
const theme = 'purple';
</script>

<template>
  <main :class="`app-container ${theme}`">
    <Home />
    <Overlay class="app-overlay" />
  </main>
</template>

<style lang="scss">
@use './scss/_purple-theme.scss';
@use './scss/_light-theme.scss';
@use './scss/_config.scss';

.app-overlay {
  display: none;
  font-size: xx-large;
  padding: 20px;
}

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
  padding-left: config.$defaultLayoutPadding;
  padding-right: config.$defaultLayoutPadding;
}

.purple {
  background-color: purple-theme.$dark-purple;
  color: purple-theme.$white;
}

@media screen and (min-width: 768px) {
  .app-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
