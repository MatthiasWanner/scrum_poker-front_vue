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
import { useResetUsersVotesMutation } from '../../api/generated';

const {
  user: userConnected,
  game: { gameId },
} = useAppStore();

const { mutate } = useResetUsersVotesMutation({});

const handleClick = () => {
  mutate({ gameId, input: { resetVotes: true } });
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
      />
    </header>
    <footer class="user-cards-footer">
      <Button
        v-if="userConnected?.role === 'SCRUMMASTER'"
        class="again-button"
        :text="gameBoardContent.newVote"
        @click="handleClick"
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

.again-button {
  margin-bottom: 10px;
}
</style>
