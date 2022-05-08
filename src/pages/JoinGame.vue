<script setup lang="ts">
import { ref } from 'vue';

import joinGameContent from '../content/join_game.json';
// eslint-disable-next-line import/no-unresolved
import useForm from '../composables/useForm';
import PageTitle from '../components/PageTitle/PageTitle.vue';
import TextInput from '../components/Forms/TextInput/TextInput.vue';
import Button from '../components/UI/Button/Button.vue';

// eslint-disable-next-line import/no-unresolved
import { useAppStore } from '../store';
// eslint-disable-next-line import/no-unresolved
import { router } from '../router';

// eslint-disable-next-line import/no-unresolved
import { useJoinGameMutation } from '../api/generated';

interface IFormData {
  gameId: string;
  username: string;
}

const message = ref<string>('');

const { handleSubmit, register } = useForm();
const { setGame, setUser } = useAppStore();
const { mutate, onDone } = useJoinGameMutation({});

const submitForm = async ({ gameId, username }: IFormData) => {
  if (gameId && username) {
    try {
      await mutate({ gameId, input: { username } });
    } catch (e) {
      message.value = (e as Error).message;
    }
  }
  return (message.value = `Please complete all fields 🤦‍♂️`);
};

onDone(({ data }) => {
  if (data) {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      user: { __typename: unusedUserDatas, ...userDatas },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      game: { __typename: unusedGamaDatas, ...gameDatas }, // extract __typename to convert rest into storeGame type
    } = data.joinGame;

    setUser(userDatas);
    setGame(gameDatas);

    return router.push('/gameboard');
  }
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
