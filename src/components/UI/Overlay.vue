<script lang="ts" setup>
defineProps<{
  additionnalClasses?: string;
}>();
</script>

<template>
  <div :class="`overlay-container ${additionnalClasses || ''}`">
    <p>Sorry, the Dsktop version is not avalaible yet 🤨.</p>
    <p>Keep calm, Im deving (⁉️) it asap 😜</p>
  </div>
</template>

<style lang="scss" scoped>
.overlay-container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
