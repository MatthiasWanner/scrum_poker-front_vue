<script setup lang="ts">
import PageTitle from '../components/PageTitle/PageTitle.vue';
import TextInput from '../components/Forms/TextInput/TextInput.vue';
import createGameContent from '../content/create_game.json';
import Button from '../components/UI/Button/Button.vue';

const submitForm = () => {
  console.log('Submitting form');
};
</script>

<template>
  <div class="page-container">
    <PageTitle :title="createGameContent.title" />
    <section class="page-main-section">
      <form @submit.prevent="submitForm">
        <TextInput
          field-name="gameName"
          :label="createGameContent.gameNameInputLabel"
        />
        <TextInput
          field-name="username"
          :label="createGameContent.usernameInputLabel"
        />
        <Button :text="createGameContent.createGameButtonLabel" type="submit" />
      </form>
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
