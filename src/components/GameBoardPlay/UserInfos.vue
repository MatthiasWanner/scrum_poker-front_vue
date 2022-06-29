<script setup lang="ts">
// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../../store';
// eslint-disable-next-line import/no-unresolved
import { UserInGame } from '../../api/generated';

import gameBoardContent from '../../content/game_board.json';

interface IProps {
  user: Omit<UserInGame, '__typename'>;
}

const { user: userConnected } = useAppStore();

defineProps<IProps>();
</script>

<template>
  <div class="user-infos">
    <span class="username">
      {{ userConnected?.userId === user.userId ? 'You' : user.username }}
    </span>
    <span class="user-status">
      {{ user.hasVoted ? '' : `${gameBoardContent.waitingVote}...` }}
    </span>
  </div>
</template>

<style scoped lang="scss">
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
</style>
