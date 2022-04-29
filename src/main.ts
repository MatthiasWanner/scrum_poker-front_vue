import { createApp, provide, h } from 'vue';
import { createPinia } from 'pinia';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';

// eslint-disable-next-line import/no-unresolved
import { router } from './router';
// eslint-disable-next-line import/no-unresolved
import apolloClient from './api/apollo-client.graphql';

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
})
  .use(router)
  .use(createPinia())
  .mount('#app');

// FIXME: eslint import/no-resolved
