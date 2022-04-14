<script setup lang="ts">
import homeContent from '../content/home.json';
import Button from '../components/UI/Button/Button.vue';
import Image from '../components/Image/Image.vue';
import logo from '../../public/logo_rectangle.svg';
// FIXME: eslint import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import { router } from '../router';
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
        :handle-click="() => router.push('/join')"
      />
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/layout';

.home-title {
  font-size: x-large;
  font-weight: bold;
}
</style>
