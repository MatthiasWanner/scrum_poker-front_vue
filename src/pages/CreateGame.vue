<script setup lang="ts">
import PageTitle from '../components/PageTitle/PageTitle.vue';
</script>

<template>
  <div class="page-container">
    <PageTitle title="Create a new game" />
    <section class="page-main-section">
      <p>Awaiting Components</p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}

.page-main-section {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
}
</style>
