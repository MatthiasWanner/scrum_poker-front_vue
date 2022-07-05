<script setup lang="ts">
import { ref } from 'vue';

import { useCreateGameMutation } from '../api/generated';
import TextInput from '../components/Forms/TextInput/TextInput.vue';
import PageTitle from '../components/PageTitle/PageTitle.vue';
import Button from '../components/UI/Button/Button.vue';
import useForm from '../composables/useForm';
import createGameContent from '../content/create_game.json';
import messagesContent from '../content/messages.json';
import { router } from '../router';
import { useAppStore } from '../store';
interface IFormData {
  gameName: string;
  username: string;
}

const message = ref<string>('');

const { handleSubmit, register } = useForm();
const { setGame, setUser } = useAppStore();
const { mutate, onDone } = useCreateGameMutation({});

const submitForm = async ({ gameName, username }: IFormData) => {
  if (gameName && username) {
    try {
      await mutate({ input: { username, gameName } });
    } catch (e) {
      message.value = (e as Error).message;
    }
  }
  return (message.value = messagesContent.allFieldsRequired);
};

onDone(({ data }) => {
  if (data) {
    const {
      // Disable rules to get Data only
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      game: { __typename: unusedGameDatas, ...gameDatas },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      user: { __typename: unusedUserDatas, ...userDatas },
    } = data.createGame;

    setUser(userDatas);
    setGame({ ...gameDatas, users: [] });

    return router.push('/gameboard');
  }
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
