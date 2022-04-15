<script setup lang="ts">
import config from '../../content/config.json';
import gameBoardContent from '../../content/game_board.json';
import Button from '../UI/Button/Button.vue';

// eslint-disable-next-line import/no-unresolved
import { users } from '../../constants';
</script>
<template>
  <div :class="`${config.defaultTheme} wait-users-list`">
    <p class="wait-users-list-title">{{ gameBoardContent.awaiting }}</p>
    <ul>
      <li v-for="user in users" :key="user.id" class="user-item">
        {{ user.username }}
      </li>
    </ul>
    <Button class="start-button" :text="gameBoardContent.start" />
    <router-link to="/" class="cancel-link">{{
      gameBoardContent.cancel
    }}</router-link>
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

.start-button {
  margin-top: auto;
  margin-bottom: 10px;
}

.cancel-link {
  color: purple-theme.$light-purple;
  margin-bottom: 10px;
}
</style>
