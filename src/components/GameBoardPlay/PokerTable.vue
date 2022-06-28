<script setup lang="ts">
// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../../store';
import config from '../../content/config.json';

const { game, user: userConnected } = useAppStore();
</script>

<template>
  <section :class="`${config.defaultTheme} playing-users-container`">
    <h3 class="game-name">{{ game.gameName }}</h3>
    <ul>
      <li
        v-for="user in game.users"
        :key="user.userId"
        class="playing-user-item"
      >
        <p class="user-emoticon">😎</p>
        <div class="user-infos">
          <span class="username">
            {{ userConnected?.userId === user.userId ? 'You' : user.username }}
          </span>
          <span class="user-status">
            {{ user.hasVoted ? '' : 'waiting...' }}
          </span>
        </div>
        <div class="user-result">
          {{ user.hasVoted ? user.vote : '?' }}
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use '../../scss/purple-theme';
@use '../../scss/light-theme';

.playing-users-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
  width: 100vw;
  overflow: scroll;
  border: none;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 10px;
  &.purple {
    color: purple-theme.$white;
    background-color: purple-theme.$pastel-purple;
  }
}
</style>
