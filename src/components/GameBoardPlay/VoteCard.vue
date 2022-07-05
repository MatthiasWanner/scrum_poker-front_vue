<script setup lang="ts">
// eslint-disable-next-line import/no-unresolved
import { useSendVoteMutation, Vote } from '../../api/generated';
// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../../store';
import config from '../../content/config.json';

interface IProps {
  label: string;
  value: Vote;
  isDisabled?: boolean;
}

const props = defineProps<IProps>();

const appStore = useAppStore();
const { game } = appStore;

const { mutate, loading } = useSendVoteMutation({});

const handleClick = () => {
  mutate({ gameId: game.gameId, input: { vote: props.value } });
};
</script>

<template>
  <div :class="`${config.defaultTheme} vote-card-container`">
    <button :disabled="loading || isDisabled" @click="handleClick">
      <p>{{ label }}</p>
    </button>
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

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 100%;
}
</style>
