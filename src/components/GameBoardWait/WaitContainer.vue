<script setup lang="ts">
import { ref } from 'vue';
import useClipboard from 'vue-clipboard3';
import PageTitle from '../../components/PageTitle/PageTitle.vue';
import gameBoardContent from '../../content/game_board.json';
import Button from '../../components/UI/Button/Button.vue';
import Image from '../../components/Image/Image.vue';
import downDuo from '../../../public/down_duo.svg';
import copyLogo from '../../../public/copy_logo.svg';
import WaitingUsersList from './WaitingUsers.vue';

// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../../store';

const { toClipboard } = useClipboard();
const { game, user } = useAppStore();

const error = ref<string | null>(null);
const buttonText = ref<string>(game.gameId);

const copy = async (text: string) => {
  try {
    await toClipboard(text);
    buttonText.value = 'Copied!';
    setTimeout(() => {
      buttonText.value = game.gameId;
    }, 2000);
  } catch (e) {
    buttonText.value = game.gameId;
    error.value = (e as Error).message;
  }
};
</script>

<template>
  <PageTitle :title="game.gameName" />

  <header v-if="user?.role === 'SCRUMMASTER'" class="scrum-master-header">
    <p class="game-board-text">
      #1 {{ gameBoardContent.clictoCopy }}
      <Image class="down-arrow-duo" :src="downDuo" />
    </p>

    <Button :text="buttonText" :secondary="true" @click="copy(game.gameId)">
      <Image :src="copyLogo" />
    </Button>

    <p class="game-board-text">#2 {{ gameBoardContent.sendId }}</p>
  </header>

  <WaitingUsersList />
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
