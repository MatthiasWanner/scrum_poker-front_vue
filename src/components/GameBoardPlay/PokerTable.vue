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
  & ul {
    padding: 0 10px;
    margin: 0;
  }
}

.game-name {
  margin: 0 0 20px 0; /* top | right | bottom | left */
  font-size: x-large;
}

.playing-user-item {
  display: flex;
  width: 100%;
  text-align: start;
  font-size: larger;
  list-style: none;
  margin: 0 0 20px; /* top | horizontal | bottom */
  padding: 0;
  line-height: 1;
}

.user-emoticon {
  display: flex;
  align-items: center;
  margin: 0 5px 0 0; /* top | right | bottom | left */
  font-size: xx-large;
}

.user-infos {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0;
}

.username {
  font-weight: bold;
  margin: 0;
}

.user-status {
  font-size: medium;
}

.user-result {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  width: 50px;
  background-color: purple-theme.$dark-purple;
  border-radius: 2px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
}
</style>
