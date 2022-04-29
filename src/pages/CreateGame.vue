<script setup lang="ts">
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';

import createGameContent from '../content/create_game.json';
import PageTitle from '../components/PageTitle/PageTitle.vue';
import TextInput from '../components/Forms/TextInput/TextInput.vue';
import Button from '../components/UI/Button/Button.vue';

// eslint-disable-next-line import/no-unresolved
import useForm from '../composables/useForm';
// eslint-disable-next-line import/no-unresolved
import { useAppStore, IUser } from '../store';
// eslint-disable-next-line import/no-unresolved
import { router } from '../router';
// eslint-disable-next-line import/no-unresolved
import { createGame } from '../api/queries/mutations.graphql';

interface IFormData {
  gameName: string;
  username: string;
}

const message = ref<string>('');

const { handleSubmit, register } = useForm();
const { setGame, setUser, user: storeUser } = useAppStore();
const { mutate, onDone } = useMutation(createGame);

const submitForm = async ({ gameName, username }: IFormData) => {
  if (gameName && username) {
    try {
      await mutate({ input: { username, gameName } });
      setUser({
        userId: '',
        username,
        role: 'SCRUMMASTER',
        vote: null,
      });
    } catch (e) {
      message.value = (e as Error).message;
    }
  }
  return (message.value = `Please complete all fields 🤦‍♂️`);
};

onDone(({ data }) => {
  const { game } = data.createGame;

  const connectedUser: IUser =
    game.users.find((user: IUser) => user.username === storeUser?.username) ||
    null;
  setUser(connectedUser);
  setGame(game);
  return router.push('/gameboard');
});
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
