<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <header class="page-title">
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped lang="scss">
.page-title {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: x-large;
}
</style>
