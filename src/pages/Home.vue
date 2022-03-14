<script setup lang="ts">
import PageTitle from '../components/PageTitle/PageTitle.vue';
import homeContent from '../content/home.json';
import Button from '../components/UI/Button/Button.vue';
import { ref } from 'vue';

const handleCreateParty = (state: boolean) => {
  console.log('Create party');
  isHidden.value = !state;
};

const handleJoinParty = (state: boolean) => {
  console.log('Join party');
  isHidden.value = !state;
};

const isHidden = ref<boolean>(true);
</script>

<template>
  <div class="page-container">
    <PageTitle :title="homeContent.title" />
    <section class="page-main-section">
      <Button
        :text="homeContent.createParty"
        :handle-click="() => handleCreateParty(isHidden)"
      />
      <span v-if="!isHidden">Be cool, it's not dev yet 😜</span>
      <Button
        :text="homeContent.joinParty"
        :handle-click="() => handleJoinParty(isHidden)"
      />
    </section>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.page-main-section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
  position: relative;
}

span {
  font-size: x-large;
  font-weight: bold;
  position: absolute;
  text-align: center;
  width: 100%;
}
</style>
