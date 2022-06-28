import type { CurrentGame, User, UserInGame } from '@src/api/generated';
// eslint-disable-next-line import/no-unresolved
import { Status } from '../api/generated';
import { defineStore } from 'pinia';

export interface IUser {
  userId: string;
  username: string;
  role: 'SCRUMMASTER' | 'DEVELOPER';
  vote: number | null;
}

export interface IAppStore {
  game: Pick<CurrentGame, 'gameId' | 'gameName' | 'status' | 'users'>;
  user: User | null;
}

export const initialGame: IAppStore['game'] = {
  gameName: '',
  gameId: '',
  status: Status.Finished,
  users: [],
};

const store = defineStore('appStore', {
  state: (): IAppStore => ({
    game: initialGame,
    user: null,
  }),
  getters: {
    isVoteSecret: (state): boolean =>
      state.game.users.every((player) => !player.vote),
  },
});

export const useAppStore = () => {
  const appStore = store();

  const { game, user, isVoteSecret } = appStore;

  const setUser = (user: User | null) => (appStore.user = user);
  const setGame = (game: IAppStore['game']) => (appStore.game = game);
  const addPlayers = (players: Omit<UserInGame, '__typename'>[]) => {
    const initialPlayers = appStore.game.users;
    const nonExistentPlayers = players.filter(
      (player) =>
        initialPlayers.findIndex((u) => u.userId === player.userId) === -1,
    );
    appStore.game.users = [...initialPlayers, ...nonExistentPlayers];
  };
  const setGameStatus = (status: Status) => (appStore.game.status = status);
  const resetGame = () => (appStore.game = initialGame);
  const resetStore = () => appStore.$reset();

  return {
    game,
    user,
    isVoteSecret,
    setGame,
    setUser,
    addPlayers,
    setGameStatus,
    resetGame,
    resetStore,
  };
};

export default store;
