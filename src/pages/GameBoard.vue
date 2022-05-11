<script setup lang="ts">
import { onUnmounted } from 'vue';

// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../store';
import WaitContainer from '../components/GameBoardWait/WaitContainer.vue';
import PlayContainer from '../components/GameBoardPlay/PlayContainer.vue';
// eslint-disable-next-line import/no-unresolved
import { Status } from '../api/generated';

const { resetStore, game } = useAppStore();

onUnmounted(() => {
  resetStore();
});
</script>

<template>
  <section class="gameboard-container">
    <WaitContainer v-if="game.status === Status.Waiting" />
    <PlayContainer v-if="game.status === Status.InProgress" />
  </section>
</template>

<style lang="scss" scoped>
.gameboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.scrum-master-header {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.game-board-text {
  width: 100%;
  display: flex;
  font-size: x-large;
  margin-bottom: 5px;
}

.down-arrow-duo {
  animation: bounce 0.35s ease infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>
