<script setup lang="ts">
import {
  Status,
  useChangeGameStatusMutation,
  useGetOneGameQuery,
  UserRole,
} from '../../api/generated';
import config from '../../content/config.json';
import gameBoardContent from '../../content/game_board.json';
import { useAppStore } from '../../store';
import Button from '../UI/Button/Button.vue';

const { setGameStatus, addPlayers, game, user: userConnected } = useAppStore();
const { onResult } = useGetOneGameQuery({ gameId: game.gameId });

const { mutate, onDone } = useChangeGameStatusMutation({});

onResult(({ data }) => {
  if (data.getOneGame) {
    const { users, status } = data.getOneGame;
    setGameStatus(status);
    addPlayers(
      users.map(({ hasVoted, role, userId, username, vote }) => ({
        hasVoted,
        role,
        userId,
        username,
        vote,
      })),
    );
  }
});

onDone(() => {
  setGameStatus(Status.InProgress);
});

const handleClick = async () => {
  await mutate({ gameId: game.gameId, input: { status: Status.InProgress } });
};
</script>

<template>
  <div :class="`${config.defaultTheme} wait-users-list`">
    <p class="wait-users-list-title">{{ gameBoardContent.awaiting }}</p>
    <ul>
      <li v-for="user in game.users" :key="user.userId" class="user-item">
        {{ userConnected?.userId === user.userId ? 'You' : user.username }}
      </li>
    </ul>
    <footer class="wait-users-list-footer">
      <Button
        v-if="userConnected?.role === UserRole.Scrummaster"
        class="start-button"
        :text="gameBoardContent.start"
        @click="handleClick"
      />
      <router-link to="/" class="cancel-link">
        {{ gameBoardContent.cancel }}
      </router-link>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/purple-theme';
@use '../../scss/light-theme';
@use '../../scss/global';
.wait-users-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  overflow: scroll;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 10px;
  &.purple {
    color: purple-theme.$white;
    background-color: purple-theme.$pastel-purple;
  }
}

.wait-users-list-title {
  font-size: x-large;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
}

.user-item {
  text-align: start;
  font-size: larger;
}

.wait-users-list-footer {
  margin-top: auto;
}

.start-button {
  margin-bottom: 10px;
}

.cancel-link {
  color: purple-theme.$light-purple;
  margin-bottom: 10px;
}
</style>
