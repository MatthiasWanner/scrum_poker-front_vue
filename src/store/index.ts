import type {
  CurrentGame,
  User,
  UserInGame,
  UserRole,
  UserVotePayload,
} from '../api/generated';
import { defineStore } from 'pinia';

import { Status } from '../api/generated';

export interface IUser {
  userId: string;
  username: string;
  role: UserRole;
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

export const useAppStore = defineStore('appStore', {
  state: (): IAppStore => ({
    game: initialGame,
    user: null,
  }),
  getters: {
    isVoteSecret: (state): boolean =>
      state.game.users.some((player) => !player.hasVoted),
  },
  actions: {
    setUser(user: User | null) {
      this.user = user;
    },

    setGame(game: IAppStore['game']) {
      this.game = game;
    },

    addPlayers(players: Omit<UserInGame, '__typename'>[]) {
      const initialPlayers = this.game.users;
      const nonExistentPlayers = players.filter(
        (player) =>
          initialPlayers.findIndex((u) => u.userId === player.userId) === -1,
      );
      this.game.users = [...initialPlayers, ...nonExistentPlayers];
    },

    setGameStatus(status: Status) {
      this.game.status = status;
    },

    setPlayerVoteStatus(id: string, hasVoted: boolean) {
      const user = this.game.users.find((u) => u.userId === id);
      if (user) user.hasVoted = hasVoted;
    },

    resetPlayersVotes() {
      const users = this.game.users.map((u) => ({
        ...u,
        hasVoted: false,
        vote: null,
      }));
      this.game.users = users;
    },

    revealPlayersVotes(results: UserVotePayload[]) {
      for (const userVote of results) {
        const user = this.game.users.find((u) => u.userId === userVote.userId);
        if (user) user.vote = userVote.vote;
      }
    },

    resetGame() {
      this.game = initialGame;
    },

    resetStore() {
      this.$reset();
    },
  },
});
