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
  <Image :src="logo" :width="300" />
  <section class="page-main-section">
    <h3 class="home-title">{{ homeContent.title }}</h3>
    <Button
      :text="homeContent.createParty"
      :handle-click="() => router.push('/create')"
    />
    <Button
      :text="homeContent.joinParty"
      :handle-click="() => router.push('/join')"
    />
  </section>
</template>

<style scoped lang="scss">
.home-title {
  font-size: x-large;
  font-weight: bold;
}
</style>
