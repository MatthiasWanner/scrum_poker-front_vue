<script setup lang="ts">
import { ref } from 'vue';
import joinGameContent from '../content/join_game.json';
// eslint-disable-next-line import/no-unresolved
import useForm from '../composables/useForm';
import PageTitle from '../components/PageTitle/PageTitle.vue';
import TextInput from '../components/Forms/TextInput/TextInput.vue';
import Button from '../components/UI/Button/Button.vue';

interface IFormData {
  gameId: string;
  username: string;
}

const message = ref<string>('');

const { handleSubmit, register } = useForm();

const submitForm = ({ gameId, username }: IFormData) => {
  if (gameId && username) {
    return (message.value = `${username} want to join a game with the id "${gameId}". It will be possible when I have dev it 😂`);
  }
  return (message.value = `Please complete all fields 🤦‍♂️`);
};
</script>

<template>
  <PageTitle :title="joinGameContent.title" />
  <section class="page-main-section">
    <form @submit.prevent="handleSubmit(submitForm)">
      <TextInput
        :register="register"
        field-name="gameId"
        :label="joinGameContent.gameIdInputLabel"
      />
      <TextInput
        :register="register"
        field-name="username"
        :label="joinGameContent.usernameInputLabel"
      />
      <Button :text="joinGameContent.joinGameButtonLabel" type="submit" />
    </form>
  </section>
  <section class="page-main-section">
    <p>{{ message }}</p>
  </section>
</template>

<style scoped lang="scss"></style>
