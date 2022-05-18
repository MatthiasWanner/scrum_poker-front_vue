<script setup lang="ts">
import config from '../../content/config.json';
// eslint-disable-next-line import/no-unresolved
import { voteCards } from '../../constants';
import VoteCard from './VoteCard.vue';
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
  </section>
</template>

<style scoped lang="scss">
@use '../../scss/purple-theme';
@use '../../scss/light-theme';
@use '../../scss/global';
.user-cards-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
</style>
