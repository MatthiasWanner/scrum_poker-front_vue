import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// eslint-disable-next-line import/no-unresolved
import { router } from './router';

createApp(App).use(router).use(createPinia()).mount('#app');

// FIXME: eslint import/no-resolved
