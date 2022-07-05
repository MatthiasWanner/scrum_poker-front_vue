<script setup lang="ts">
import config from '../../content/config.json';

interface IProps {
  vote?: number | null;
  hasVoted: boolean;
}

defineProps<IProps>();
</script>

<template>
  <p :class="`${config.defaultTheme} user-result`">
    {{ hasVoted ? vote || '?' : '' }}
  </p>
</template>

<style scoped lang="scss">
@use '../../scss/purple-theme';
@use '../../scss/light-theme';
.user-result {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  width: 50px;
  border-radius: 2px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  margin: 0;
  &.purple {
    background-color: purple-theme.$dark-purple;
  }
}
</style>
