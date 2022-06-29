<script setup lang="ts">
// eslint-disable-next-line import/no-unresolved
import { useSendVoteMutation, Vote } from '../../api/generated';
// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../../store';
import config from '../../content/config.json';
import { ref } from 'vue';

interface IProps {
  label: string;
  value: Vote;
}

const props = defineProps<IProps>();

const additionnalCardClass = ref<string>('');

const {
  user: userConnected,
  game: { users, gameId },
} = useAppStore();

const { mutate, onDone, loading } = useSendVoteMutation({});

onDone(() => {
  additionnalCardClass.value = 'played';
});

const handleClick = () => {
  console.log('Clic', props.value);
  mutate({ gameId, input: { vote: props.value } });
};
</script>

<template>
  <div
    :class="`${config.defaultTheme} vote-card-container ${additionnalCardClass}`"
  >
    <button
      :disabled="
        loading ||
        users.find((u) => u.userId === userConnected?.userId)?.hasVoted
      "
      @click="handleClick"
    >
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
