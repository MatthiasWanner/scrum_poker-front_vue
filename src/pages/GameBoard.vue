<script setup lang="ts">
import { onUnmounted, watch } from 'vue';

import { Status, useSubscribeGameSubscription } from '../api/generated';
import PlayContainer from '../components/GameBoardPlay/PlayContainer.vue';
import WaitContainer from '../components/GameBoardWait/WaitContainer.vue';
import { router } from '../router';
import { useAppStore } from '../store';

const { resetStore, game } = useAppStore();

const {
  game: { gameId },
  setPlayerVoteStatus,
  resetPlayersVotes,
  revealPlayersVotes,
  addPlayers,
  setGameStatus,
} = useAppStore();

const { result: gameSubscription } = useSubscribeGameSubscription({
  gameId,
});

watch(gameSubscription, (data) => {
  if (data) {
    const events = data.playingGame;

    for (const event of events) {
      switch (event.__typename) {
        case 'GameVoteEvent': {
          setPlayerVoteStatus(event.voteEventPayload, true);
          break;
        }
        case 'GameStatusEvent': {
          if (event.statusEventPayload === Status.InProgress)
            setGameStatus(event.statusEventPayload);
          if (event.statusEventPayload === Status.Finished) router.push('/');
          break;
        }
        case 'GameResetEvent': {
          resetPlayersVotes();
          break;
        }
        case 'GameRevealVoteEvent': {
          revealPlayersVotes(event.revealVotesPayload);
          break;
        }
        case 'JoinGameEvent': {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { __typename, ...payload } = event.joinEventPayload;
          addPlayers([{ ...payload, vote: null, hasVoted: false }]);
          break;
        }
      }
    }
  }
});

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
