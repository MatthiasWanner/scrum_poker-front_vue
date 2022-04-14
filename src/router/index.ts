import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import CreateGame from '../pages/CreateGame.vue';
import JoinGame from '../pages/JoinGame.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreateGame },
  { path: '/join', component: JoinGame },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
