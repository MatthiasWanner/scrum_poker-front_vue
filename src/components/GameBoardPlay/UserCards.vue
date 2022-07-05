<script setup lang="ts">
import config from '../../content/config.json';
// eslint-disable-next-line import/no-unresolved
import { voteCards } from '../../constants';
import gameBoardContent from '../../content/game_board.json';
import VoteCard from './VoteCard.vue';
// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../../store';
import Button from '../UI/Button/Button.vue';
// eslint-disable-next-line import/no-unresolved
import {
  useResetUsersVotesMutation,
  useRevealVotesQuery,
  UserRole,
} from '../../api/generated';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { user: userConnected, game, isVoteSecret } = storeToRefs(appStore);

const { mutate } = useResetUsersVotesMutation({});

const { refetch: getVotes } = useRevealVotesQuery(
  {
    gameId: game.value.gameId,
  },
  {
    enabled: userConnected.value?.role === UserRole.Scrummaster,
  },
);

const getButtonProps = () => {
  if (game.value.users.every((u) => u.vote))
    return {
      text: gameBoardContent.newVote,
      handleClick: () =>
        mutate({ gameId: game.value.gameId, input: { resetVotes: true } }),
    };

  return {
    text: gameBoardContent.revealVotes,
    handleClick: getVotes,
  };
};
</script>

<template>
  <section :class="`${config.defaultTheme} user-cards-container`">
    <header class="user-cards-header">
      <VoteCard
        v-for="(card, index) in voteCards"
        :key="index"
        :label="card.label"
        :value="card.value"
        :is-disabled="
          game.users.find((u) => u.userId === userConnected?.userId)?.hasVoted
        "
      />
    </header>
    <footer class="user-cards-footer">
      <Button
        v-if="userConnected?.role === UserRole.Scrummaster && !isVoteSecret"
        class="scrum-button"
        :text="getButtonProps().text"
        :handle-click="getButtonProps().handleClick"
      />
    </footer>
  </section>
</template>

<style scoped lang="scss">
@use '../../scss/purple-theme';
@use '../../scss/light-theme';
@use '../../scss/global';
.user-cards-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 50%;
  width: 100vw;
  overflow: scroll;
  border: none;
  border-radius: 30px 30px 0 0;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 10px;
  &.purple {
    color: purple-theme.$white;
    background-color: purple-theme.$pastel-purple;
  }
}

.user-cards-header {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 60%;
}

.user-cards-footer {
  margin-top: auto;
  width: 100%;
}

.scrum-button {
  margin-bottom: 10px;
}
</style>
