<script setup lang="ts">
import config from '../../content/config.json';
</script>
<template>
  <section :class="`${config.defaultTheme} user-cards-container`"></section>
</template>

<style scoped lang="scss">
@use '../../scss/purple-theme';
@use '../../scss/light-theme';
@use '../../scss/global';
.user-cards-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
  width: 100vw;
  overflow: scroll;
  border: none;
  border-radius: 30px 30px 0 0;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 10px;
  &.purple {
    color: purple-theme.$white;
    background-color: purple-theme.$pastel-purple;
  }
}
</style>
