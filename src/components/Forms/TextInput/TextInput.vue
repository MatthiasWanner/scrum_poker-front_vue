<script setup lang="ts">
import type { RegisterInput } from '@composables/useForm';

interface IProps {
  label: string;
  labelClass?: string;
  inputClass?: string;
  fieldName: string;
  register: RegisterInput;
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
      v-bind="register(fieldName)"
    />
    <label :for="fieldName" :class="`form-label`">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../scss/purple-theme';
.form-group {
  margin-bottom: 10px;
  height: 50px;
  box-sizing: border-box;
}

.form-field {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  border: none;
  padding: 5px 10px;
  background-color: purple-theme.$pastel-purple;
  color: white;
  font-size: large;
  &:focus {
    outline: none;
  }
}
.form-label {
  display: none;
}
</style>
