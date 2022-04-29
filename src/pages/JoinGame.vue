<script setup lang="ts">
import { ref } from 'vue';
import joinGameContent from '../content/join_game.json';
// eslint-disable-next-line import/no-unresolved
import useForm from '../composables/useForm';
import PageTitle from '../components/PageTitle/PageTitle.vue';
import TextInput from '../components/Forms/TextInput/TextInput.vue';
import Button from '../components/UI/Button/Button.vue';

// eslint-disable-next-line import/no-unresolved
import { IAppStore, IUser, useAppStore } from '../store';
// eslint-disable-next-line import/no-unresolved
import { router } from '../router';

interface IFormData {
  gameId: string;
  username: string;
}

const message = ref<string>('');

const { handleSubmit, register } = useForm();
const { setGame, setUser } = useAppStore();

const submitForm = ({ gameId, username }: IFormData) => {
  if (gameId && username) {
    const user: IUser = {
      id: 'fd49f00e-2836-4453-a8bf-0f0ac2237ce4',
      username: `🤓 ${username}`,
      role: 'DEVELOPER',
      vote: null,
    };
    const newStoreGame: IAppStore['game'] = {
      gameId: 'fd49f00e-2836-4453-a8bf-0f0ac2237ce4',
      gameName: 'Game Name',
      gamePlayers: [user],
      gameStatus: 'WAITING',
    };
    setGame(newStoreGame);
    setUser(user);
    return router.push('/gameboard');
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
