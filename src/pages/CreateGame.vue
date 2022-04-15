<script setup lang="ts">
import { ref } from 'vue';
import createGameContent from '../content/create_game.json';
// eslint-disable-next-line import/no-unresolved
import useForm from '../composables/useForm';
import PageTitle from '../components/PageTitle/PageTitle.vue';
import TextInput from '../components/Forms/TextInput/TextInput.vue';
import Button from '../components/UI/Button/Button.vue';

// eslint-disable-next-line import/no-unresolved
import store, { IUser } from '../store';
// eslint-disable-next-line import/no-unresolved
import { router } from '../router';

interface IFormData {
  gameName: string;
  username: string;
}

const message = ref<string>('');

const { handleSubmit, register } = useForm();

const submitForm = ({ gameName, username }: IFormData) => {
  if (gameName && username) {
    // return (message.value = `${username} want to create "${gameName}" Game. It will be possible when I have dev it 😂`);
    const user: IUser = {
      id: 'fd49f00e-2836-4453-a8bf-0f0ac2237ce4',
      username,
      role: 'SCRUMMASTER',
    };
    store.gameName = gameName;
    store.gameStatus = 'WAITING';
    store.gamePlayers.push(user);
    store.user = user;
    router.push('/gameboard');
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
@use '../scss/layout';
</style>
