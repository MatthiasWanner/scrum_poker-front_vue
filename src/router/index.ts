import { createRouter, createWebHistory } from 'vue-router';

import CreateGame from '../pages/CreateGame.vue';
import GameBoard from '../pages/GameBoard.vue';
import Home from '../pages/Home.vue';
import JoinGame from '../pages/JoinGame.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreateGame },
  { path: '/join', component: JoinGame },
  { path: '/gameboard', component: GameBoard },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
