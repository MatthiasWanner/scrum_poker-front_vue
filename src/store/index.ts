import { reactive } from 'vue';

export interface IUser {
  id: string;
  username: string;
  role: 'SCRUMMASTER' | 'DEVELOPER';
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

const store = reactive<IAppStore>({ game: initialGame, user: null });

export const useAppStore = () => {
  const { game, user } = store;

  const setUser = (user: IUser | null) => (store.user = user);
  const setGame = (game: IAppStore['game']) => (store.game = game);
  const addPlayers = (players: IUser[]) =>
    (store.game.gamePlayers = [...store.game.gamePlayers, ...players]);
  const setGameStatus = (status: GameStatus) =>
    (store.game.gameStatus = status);
  const resetGame = () => (store.game = initialGame);

  return { game, user, setGame, setUser, addPlayers, setGameStatus, resetGame };
};

export default store;
