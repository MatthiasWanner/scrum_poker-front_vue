<script setup lang="ts">
// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../../store';
import config from '../../content/config.json';
import UserEmoticon from './UserEmoticon.vue';
import UserInfos from './UserInfos.vue';
import UserResult from './UserResult.vue';

const { game } = useAppStore();

/* Temporary function that return a default emoji */
const getEmoticon = () => '😂';
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
        <UserEmoticon :emoticon="getEmoticon()" />
        <UserInfos :user="user" />
        <UserResult :vote="user.vote" :has-voted="user.hasVoted" />
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
</style>
