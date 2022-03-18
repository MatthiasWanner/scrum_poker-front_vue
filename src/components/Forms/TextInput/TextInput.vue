<script setup lang="ts">
interface IProps {
  label: string;
  labelClass?: string;
  inputClass?: string;
  fieldName: string;
  disabled?: boolean;
}

defineProps<IProps>();
</script>

<template>
  <div class="form-group field">
    <input
      :disabled="disabled || false"
      :class="`form-field`"
      type="text"
      :placeholder="label"
      :v-model="fieldName"
    />
    <label :for="fieldName" :class="`form-label`">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.form-label {
  display: none;
}
</style>
