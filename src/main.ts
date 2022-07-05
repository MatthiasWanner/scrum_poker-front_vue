import { DefaultApolloClient } from '@vue/apollo-composable';
import { createPinia } from 'pinia';
import { createApp, h, provide } from 'vue';

import apolloClient from './api/apollo-client.graphql';
import App from './App.vue';
import { router } from './router';

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
})
  .use(router)
  .use(createPinia())
  .mount('#app');
