<script setup lang="ts">
import { ref } from 'vue';
import config from '../../../content/config.json';

interface IProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}
defineProps<IProps>();

const theme = ref<string>(config.defaultTheme);
</script>

<template>
  <button
    :class="`${theme} app-button`"
    :type="type"
    class="page-title"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
@use '../../../scss/purple-theme';
@use '../../../scss/light-theme';
.app-button {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 30px;
  height: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: larger;
  font-weight: bold;
  &.purple {
    background-color: purple-theme.$light-purple;
    color: purple-theme.$white;
  }
}
</style>
