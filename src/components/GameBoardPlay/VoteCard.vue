<script setup lang="ts">
import config from '../../content/config.json';

interface IProps {
  label: string;
  value: number;
}

defineProps<IProps>();
</script>

<template>
  <div :class="`${config.defaultTheme} vote-card-container`">
    <p>{{ label }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/purple-theme';
@use '../../scss/light-theme';

.vote-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 70px;
  margin: 7px;
  font-size: xx-large;
  font-weight: bold;
  border-radius: 2px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  &.purple {
    background-color: purple-theme.$dark-purple;
  }
}
</style>
