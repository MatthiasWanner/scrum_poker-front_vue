<script setup lang="ts">
import { ref } from 'vue';

import config from '../../../content/config.json';

interface IProps {
  text: string;
  secondary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}
defineProps<IProps>();

const theme = ref<string>(config.defaultTheme);
</script>

<template>
  <button
    :class="`${theme} ${secondary ? 'secondary' : 'primary'} app-button`"
    :type="type"
    @click="handleClick"
  >
    <span class="button-label">
      {{ text }}
    </span>
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use '../../../scss/purple-theme';
@use '../../../scss/light-theme';
.app-button {
  display: flex;
  align-items: center;
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
  &.primary {
    justify-content: space-around;
  }
  &.secondary {
    justify-content: space-between;
  }
  &.purple {
    color: purple-theme.$white;
    &.primary {
      background-color: purple-theme.$light-purple;
    }
    &.secondary {
      background-color: purple-theme.$pastel-purple;
    }
  }

  .button-label {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
