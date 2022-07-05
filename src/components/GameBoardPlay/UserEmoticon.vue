<script setup lang="ts">
interface IProps {
  emoticon: string;
}

defineProps<IProps>();
</script>

<template>
  <p class="user-emoticon">{{ emoticon }}</p>
</template>

<style scoped>
.user-emoticon {
  display: flex;
  align-items: center;
  margin: 0 5px 0 0; /* top | right | bottom | left */
  font-size: xx-large;
}
</style>
