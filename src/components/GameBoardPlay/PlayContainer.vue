<script setup lang="ts">
import {
  useSubscribeGameSubscription,
  // eslint-disable-next-line import/no-unresolved
} from '../../api/generated';
// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../../store';
import { watch } from 'vue';
import PokerTable from './PokerTable.vue';
import UserCards from './UserCards.vue';
// eslint-disable-next-line import/no-unresolved
import { router } from '../../router';

const {
  user: userConnected,
  game: { gameId },
  isVoteSecret,
  setPlayerVoteStatus,
  resetPlayersVotes,
  revealPlayersVotes,
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
          router.push('/');
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
      }
    }
  }
});
</script>
<template>
  <PokerTable />
  <UserCards />
</template>

<style lang="scss" scoped></style>
