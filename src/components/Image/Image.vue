<script setup lang="ts">
defineProps<{
  src: string;
  additionnalClasses?: string;
  width?: number;
  height?: number;
}>();
</script>

<template>
  <img
    :src="src"
    :class="`image ${additionnalClasses || ''}`"
    :width="width || ''"
    :height="height || ''"
  />
</template>
