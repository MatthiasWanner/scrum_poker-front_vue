import { reactive } from 'vue';

export interface IUser {
  id: string;
  username: string;
  role: 'SCRUMMASTER' | 'DEVELOPER';
}

export interface IAppStore {
  gameName: string;
  gameId: string;
  gameStatus: string;
  gamePlayers: IUser[];
  user: IUser | null;
}

const store = reactive<IAppStore>({
  gameName: '',
  gameId: '065998eb-1824-4f3c-99ec-21fb7d05622e',
  gameStatus: '',
  gamePlayers: [],
  user: null,
});

export default store;
