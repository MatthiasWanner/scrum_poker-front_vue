<script setup lang="ts">
import { ref } from 'vue';
import config from '../../content/config.json';
import gameBoardContent from '../../content/game_board.json';
import Button from '../UI/Button/Button.vue';

const users = ref<string[]>([
  'user1',
  'user2',
  'user3',
  'user4',
  'user5',
  'user6',
  'user7',
  'user8',
  'user9',
  'user10',
]);
</script>
<template>
  <div :class="`${config.defaultTheme} wait-users-list`">
    <p class="wait-users-list-title">{{ gameBoardContent.awaiting }}</p>
    <ul>
      <li class="user-item" v-for="user in users" :key="user">{{ user }}</li>
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
