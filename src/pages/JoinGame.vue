<script setup lang="ts">
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';

import joinGameContent from '../content/join_game.json';
// eslint-disable-next-line import/no-unresolved
import useForm from '../composables/useForm';
import PageTitle from '../components/PageTitle/PageTitle.vue';
import TextInput from '../components/Forms/TextInput/TextInput.vue';
import Button from '../components/UI/Button/Button.vue';

// eslint-disable-next-line import/no-unresolved
import { IUser, useAppStore } from '../store';
// eslint-disable-next-line import/no-unresolved
import { router } from '../router';
// eslint-disable-next-line import/no-unresolved
import { joinGame } from '../api/queries/mutations.graphql';

interface IFormData {
  gameId: string;
  username: string;
}

const message = ref<string>('');

const { handleSubmit, register } = useForm();
const { setGame, setUser, user: storeUser } = useAppStore();
const { mutate, onDone } = useMutation(joinGame);

const submitForm = async ({ gameId, username }: IFormData) => {
  if (gameId && username) {
    try {
      await mutate({ input: { username, gameId } });
      setUser({
        userId: '',
        username,
        role: 'DEVELOPER',
        vote: null,
      });
    } catch (e) {
      message.value = (e as Error).message;
    }
  }
  return (message.value = `Please complete all fields 🤦‍♂️`);
};

onDone(({ data }) => {
  const { game } = data.joinGame;
  const connectedUser: IUser =
    game.users.find((user: IUser) => user.username === storeUser?.username) ||
    null;
  setUser(connectedUser);
  setGame(game);
  return router.push('/gameboard');
});
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
