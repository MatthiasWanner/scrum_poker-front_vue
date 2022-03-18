<script setup lang="ts">
import { ref } from 'vue';
import createGameContent from '../content/create_game.json';
// eslint-disable-next-line import/no-unresolved
import useForm from '../composables/useForm';
import PageTitle from '../components/PageTitle/PageTitle.vue';
import TextInput from '../components/Forms/TextInput/TextInput.vue';
import Button from '../components/UI/Button/Button.vue';

interface IFormData {
  gameName: string;
  username: string;
}

const message = ref<string>('');

const { handleSubmit, register } = useForm();

const submitForm = ({ gameName, username }: IFormData) => {
  if (gameName && username) {
    return (message.value = `${username} want to create "${gameName}" Game. It will be possible when I have dev it 😂`);
  }
  return (message.value = `Please complete all fields 🤦‍♂️`);
};
</script>

<template>
  <div class="page-container">
    <PageTitle :title="createGameContent.title" />
    <section class="page-main-section">
      <form @submit.prevent="handleSubmit(submitForm)">
        <TextInput
          :register="register"
          field-name="gameName"
          :label="createGameContent.gameNameInputLabel"
        />
        <TextInput
          :register="register"
          field-name="username"
          :label="createGameContent.usernameInputLabel"
        />
        <Button :text="createGameContent.createGameButtonLabel" type="submit" />
      </form>
    </section>
    <section class="page-main-section">
      <p>{{ message }}</p>
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
