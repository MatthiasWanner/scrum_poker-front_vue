<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <header class="page-title">
    <router-link to="/">
      <h1>{{ title }}</h1>
    </router-link>
  </header>
</template>

<style scoped lang="scss">
@use '../../scss/global';
.page-title {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: large;
}
</style>
