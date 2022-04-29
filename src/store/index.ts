import { defineStore } from 'pinia';

export interface IUser {
  id: string;
  username: string;
  role: 'SCRUMMASTER' | 'DEVELOPER';
  vote: number | null;
}

export interface IAppStore {
  game: {
    gameName: string;
    gameId: string;
    gameStatus: GameStatus;
    gamePlayers: IUser[];
  };
  user: IUser | null;
}

export type GameStatus = 'WAITING' | 'IN_PROGRESS' | 'FINISHED';

export const initialGame: IAppStore['game'] = {
  gameName: '',
  gameId: '',
  gameStatus: 'FINISHED',
  gamePlayers: [],
};

const store = defineStore('appStore', {
  state: (): IAppStore => ({
    game: initialGame,
    user: null,
  }),
  getters: {
    isVoteSecret: (state): boolean =>
      state.game.gamePlayers.every((player) => !player.vote),
  },
});

export const useAppStore = () => {
  const appStore = store();

  const { game, user, isVoteSecret } = appStore;

  const setUser = (user: IUser | null) => (appStore.user = user);
  const setGame = (game: IAppStore['game']) => (appStore.game = game);
  const addPlayers = (players: IUser[]) =>
    (appStore.game.gamePlayers = [...appStore.game.gamePlayers, ...players]);
  const setGameStatus = (status: GameStatus) =>
    (appStore.game.gameStatus = status);
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
