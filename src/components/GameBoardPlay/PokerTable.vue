<script setup lang="ts">
// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../../store';
import config from '../../content/config.json';

const { game } = useAppStore();
</script>

<template>
  <section :class="`${config.defaultTheme} playing-users-container`"></section>
</template>

<style lang="scss" scoped>
@use '../../scss/purple-theme';
@use '../../scss/light-theme';
@use '../../scss/global';
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
