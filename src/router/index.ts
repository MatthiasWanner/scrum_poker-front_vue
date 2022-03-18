import { createRouter, createWebHistory } from 'vue-router';

import CreateGame from '../pages/CreateGame.vue';
import Home from '../pages/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreateGame },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
