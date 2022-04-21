<script setup lang="ts">
import PageTitle from '../components/PageTitle/PageTitle.vue';
import gameBoardContent from '../content/game_board.json';
import Button from '../components/UI/Button/Button.vue';
import Image from '../components/Image/Image.vue';
import downDuo from '../../public/down_duo.svg';
import copyLogo from '../../public/copy_logo.svg';
import WaitingUsersList from '../components/UserList/WaitingUsers.vue';

// eslint-disable-next-line import/no-unresolved
import store from '../store';
import { onUnmounted } from 'vue';

onUnmounted(() => {
  store.gamePlayers = [];
});
</script>
<template>
  <section class="gameboard-container">
    <PageTitle :title="store.gameName" />

    <header
      v-if="store.user?.role === 'SCRUMMASTER'"
      class="scrum-master-header"
    >
      <p class="game-board-text">
        #1 {{ gameBoardContent.clictoCopy }}
        <Image class="down-arrow-duo" :src="downDuo" />
      </p>

      <Button :text="store.gameId" :secondary="true">
        <Image :src="copyLogo" />
      </Button>

      <p class="game-board-text">#2 {{ gameBoardContent.sendId }}</p>
    </header>

    <WaitingUsersList />
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
