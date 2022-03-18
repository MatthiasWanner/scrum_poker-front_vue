<script setup lang="ts">
import homeContent from '../content/home.json';
import Button from '../components/UI/Button/Button.vue';
import { ref } from 'vue';
import Image from '../components/Image/Image.vue';
import logo from '../../public/logo_rectangle.svg';
// FIXME: eslint import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import { router } from '../router';

const handleJoinParty = (state: boolean) => {
  isHidden.value = !state;
};

const isHidden = ref<boolean>(true);
</script>

<template>
  <div class="page-container">
    <Image :src="logo" :width="300" />
    <section class="page-main-section">
      <h3 class="home-title">What do you want to do ?</h3>
      <Button
        :text="homeContent.createParty"
        :handle-click="() => router.push('/create')"
      />
      <Button
        :text="homeContent.joinParty"
        :handle-click="() => handleJoinParty(isHidden)"
      />
      <span v-if="!isHidden" class="temporaly-span"
        >Be cool, it's not dev yet 😜</span
      >
    </section>
  </div>
</template>

<style scoped lang="scss">
.temporaly-span {
  margin-top: 10px;
  position: absolute;
  bottom: 0;
}

.page-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}

.home-title {
  font-size: x-large;
  font-weight: bold;
}

.page-main-section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
