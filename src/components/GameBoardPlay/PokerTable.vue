<script setup lang="ts">
import config from '../../content/config.json';
</script>

<template>
  <section :class="`${config.defaultTheme} playing-users-container`"></section>
</template>

<style lang="scss" scoped>
@use '../../scss/purple-theme';
@use '../../scss/light-theme';

.playing-users-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
  width: 100vw;
  overflow: scroll;
  border: none;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 10px;
  &.purple {
    color: purple-theme.$white;
    background-color: purple-theme.$pastel-purple;
  }
}
</style>
