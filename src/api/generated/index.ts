import * as VueApolloComposable from '@vue/apollo-composable';
import { gql } from 'graphql-tag';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateGameInput = {
  /** Name of the new game */
  gameName: Scalars['String'];
  /** Max players allowed */
  maxPlayers?: InputMaybe<Scalars['Int']>;
  /** Name of the player */
  username: Scalars['String'];
};

export type CurrentGame = {
  __typename?: 'CurrentGame';
  /** Array of deleted users IDs */
  deletedUsers: Array<Scalars['ID']>;
  /** Id of existing game */
  gameId: Scalars['ID'];
  /** Name of the new game */
  gameName: Scalars['String'];
  /** Number of max players allowed */
  maxPlayers?: Maybe<Scalars['Int']>;
  /** Game status 'WAITING', 'IN_PROGRESS' or 'FINISHED'  */
  status: Status;
  /** Users in the game */
  users: Array<UserInGame>;
};

export type DeleteUsersEvent = {
  __typename?: 'DeleteUsersEvent';
  eventType: GameEvents;
  /** List of deleted user ids */
  payload: Array<Scalars['ID']>;
};

export type GameChangeNameEvent = {
  __typename?: 'GameChangeNameEvent';
  eventType: GameEvents;
  payload: Scalars['String'];
};

export type GameEventResponse =
  | DeleteUsersEvent
  | GameChangeNameEvent
  | GameResetEvent
  | GameRevealVoteEvent
  | GameStatusEvent
  | GameVoteEvent
  | JoinGameEvent
  | LeftGameEvent;

/** Game events */
export enum GameEvents {
  Gamenamechanged = 'GAMENAMECHANGED',
  Resetvotes = 'RESETVOTES',
  Revealvotes = 'REVEALVOTES',
  Statuschanged = 'STATUSCHANGED',
  Userjoingame = 'USERJOINGAME',
  Userleftgame = 'USERLEFTGAME',
  Usersdeleted = 'USERSDELETED',
  Uservote = 'USERVOTE',
}

export type GameResetEvent = {
  __typename?: 'GameResetEvent';
  eventType: GameEvents;
  payload?: Maybe<Scalars['String']>;
};

export type GameResponse = {
  __typename?: 'GameResponse';
  /** Current game */
  game: CurrentGame;
  /** Redis response status */
  redisResponse: Scalars['String'];
  /** New user subscribing */
  user: User;
};

export type GameRevealVoteEvent = {
  __typename?: 'GameRevealVoteEvent';
  eventType: GameEvents;
  payload: Array<UserVotePayload>;
};

export type GameStatusEvent = {
  __typename?: 'GameStatusEvent';
  eventType: GameEvents;
  /** Game status: WAITING, IN_PROGRESS, FINISHED */
  payload: Status;
};

export type GameSubscriptionEvent = {
  __typename?: 'GameSubscriptionEvent';
  eventType: GameEvents;
};

export type GameVoteEvent = {
  __typename?: 'GameVoteEvent';
  eventType: GameEvents;
  /** Id of the player who just voted */
  payload: Scalars['ID'];
};

export type JoinGameEvent = {
  __typename?: 'JoinGameEvent';
  eventType: GameEvents;
  payload: User;
};

export type JoinGameInput = {
  /** Name of the player */
  username: Scalars['String'];
};

export type LeftGameEvent = {
  __typename?: 'LeftGameEvent';
  eventType: GameEvents;
  payload: Scalars['ID'];
};

export type Message = {
  __typename?: 'Message';
  /** Message text */
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGame: GameResponse;
  joinGame: GameResponse;
  logout: Message;
  me: UserInSession;
  playerVote: CurrentGame;
  quitGame: Message;
  updateGame: CurrentGame;
};

export type MutationCreateGameArgs = {
  input: CreateGameInput;
};

export type MutationJoinGameArgs = {
  gameId: Scalars['ID'];
  input: JoinGameInput;
};

export type MutationPlayerVoteArgs = {
  gameId: Scalars['ID'];
  input: PlayerVoteInput;
};

export type MutationQuitGameArgs = {
  gameId: Scalars['ID'];
};

export type MutationUpdateGameArgs = {
  gameId: Scalars['ID'];
  input: UpdateGameInput;
};

export type PlayerVoteInput = {
  /** Player vote */
  vote: Vote;
};

export type Query = {
  __typename?: 'Query';
  getGameVotes?: Maybe<CurrentGame>;
  getOneGame?: Maybe<CurrentGame>;
  hello: Message;
};

export type QueryGetGameVotesArgs = {
  gameId: Scalars['ID'];
};

export type QueryGetOneGameArgs = {
  gameId: Scalars['ID'];
};

/** Game status */
export enum Status {
  Finished = 'FINISHED',
  InProgress = 'IN_PROGRESS',
  Waiting = 'WAITING',
}

export type Subscription = {
  __typename?: 'Subscription';
  playingGame: Array<GameEventResponse>;
};

export type SubscriptionPlayingGameArgs = {
  gameId: Scalars['String'];
};

export type UpdateGameInput = {
  /** Array of user IDs to be deleted */
  deleteUsers?: InputMaybe<Array<Scalars['ID']>>;
  /** New name of the game */
  gameName?: InputMaybe<Scalars['String']>;
  /** Use this field to reset all players votes */
  resetVotes?: InputMaybe<Scalars['Boolean']>;
  /** New status of the game */
  status?: InputMaybe<Status>;
};

export type User = {
  __typename?: 'User';
  /** Role of the player during current game */
  role: UserRole;
  /** Id of existing user */
  userId: Scalars['ID'];
  /** Name of the player */
  username: Scalars['String'];
};

export type UserInGame = {
  __typename?: 'UserInGame';
  /** Describe if the user had voted */
  hasVoted: Scalars['Boolean'];
  /** Role of the player during current game */
  role: UserRole;
  /** Id of existing user */
  userId: Scalars['ID'];
  /** Name of the player */
  username: Scalars['String'];
  /** Current vote */
  vote?: Maybe<Scalars['Int']>;
};

export type UserInSession = {
  __typename?: 'UserInSession';
  /** The current session game id */
  gameId: Scalars['ID'];
  /** Role of the player during current game */
  role: UserRole;
  /** Id of existing user */
  userId: Scalars['ID'];
  /** Name of the player */
  username: Scalars['String'];
};

export enum UserRole {
  Developer = 'DEVELOPER',
  Scrummaster = 'SCRUMMASTER',
}

export type UserVotePayload = {
  __typename?: 'UserVotePayload';
  userId: Scalars['ID'];
  vote: Scalars['Int'];
};

/** Player vote according to a fibonacci sequence */
export enum Vote {
  Eight = 'EIGHT',
  Five = 'FIVE',
  One = 'ONE',
  Thirteen = 'THIRTEEN',
  Three = 'THREE',
  Twentyone = 'TWENTYONE',
  Two = 'TWO',
}

export type JoinGameMutationVariables = Exact<{
  gameId: Scalars['ID'];
  input: JoinGameInput;
}>;

export type JoinGameMutation = {
  __typename?: 'Mutation';
  joinGame: {
    __typename?: 'GameResponse';
    user: {
      __typename?: 'User';
      userId: string;
      username: string;
      role: UserRole;
    };
    game: {
      __typename?: 'CurrentGame';
      gameId: string;
      gameName: string;
      status: Status;
      users: Array<{
        __typename?: 'UserInGame';
        userId: string;
        username: string;
        role: UserRole;
        vote?: number | null;
        hasVoted: boolean;
      }>;
    };
  };
};

export type SendVoteMutationVariables = Exact<{
  gameId: Scalars['ID'];
  input: PlayerVoteInput;
}>;

export type SendVoteMutation = {
  __typename?: 'Mutation';
  playerVote: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: Status;
    users: Array<{
      __typename?: 'UserInGame';
      userId: string;
      username: string;
      role: UserRole;
      vote?: number | null;
      hasVoted: boolean;
    }>;
  };
};

export type MeMutationVariables = Exact<{ [key: string]: never }>;

export type MeMutation = {
  __typename?: 'Mutation';
  me: {
    __typename?: 'UserInSession';
    userId: string;
    username: string;
    role: UserRole;
    gameId: string;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = {
  __typename?: 'Mutation';
  logout: { __typename?: 'Message'; message: string };
};

export type QuitGameMutationVariables = Exact<{
  gameId: Scalars['ID'];
}>;

export type QuitGameMutation = {
  __typename?: 'Mutation';
  quitGame: { __typename?: 'Message'; message: string };
};

export type GetOneGameQueryVariables = Exact<{
  gameId: Scalars['ID'];
}>;

export type GetOneGameQuery = {
  __typename?: 'Query';
  getOneGame?: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: Status;
    users: Array<{
      __typename?: 'UserInGame';
      userId: string;
      username: string;
      role: UserRole;
      vote?: number | null;
      hasVoted: boolean;
    }>;
  } | null;
};

export type RevealVotesQueryVariables = Exact<{
  gameId: Scalars['ID'];
}>;

export type RevealVotesQuery = {
  __typename?: 'Query';
  getGameVotes?: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: Status;
    users: Array<{
      __typename?: 'UserInGame';
      userId: string;
      username: string;
      role: UserRole;
      vote?: number | null;
      hasVoted: boolean;
    }>;
  } | null;
};

export type CreateGameMutationVariables = Exact<{
  input: CreateGameInput;
}>;

export type CreateGameMutation = {
  __typename?: 'Mutation';
  createGame: {
    __typename?: 'GameResponse';
    user: {
      __typename?: 'User';
      userId: string;
      username: string;
      role: UserRole;
    };
    game: {
      __typename?: 'CurrentGame';
      gameId: string;
      gameName: string;
      status: Status;
      maxPlayers?: number | null;
    };
  };
};

export type ChangeGameStatusMutationVariables = Exact<{
  gameId: Scalars['ID'];
  input: UpdateGameInput;
}>;

export type ChangeGameStatusMutation = {
  __typename?: 'Mutation';
  changeGameStatus: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: Status;
  };
};

export type DeleteUsersMutationVariables = Exact<{
  gameId: Scalars['ID'];
  input: UpdateGameInput;
}>;

export type DeleteUsersMutation = {
  __typename?: 'Mutation';
  deleteUsers: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: Status;
    deletedUsers: Array<string>;
  };
};

export type ResetUsersVotesMutationVariables = Exact<{
  gameId: Scalars['ID'];
  input: UpdateGameInput;
}>;

export type ResetUsersVotesMutation = {
  __typename?: 'Mutation';
  resetUsersVotes: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: Status;
    users: Array<{
      __typename?: 'UserInGame';
      userId: string;
      username: string;
      vote?: number | null;
      hasVoted: boolean;
    }>;
  };
};

export type SubscribeGameSubscriptionVariables = Exact<{
  gameId: Scalars['String'];
}>;

export type SubscribeGameSubscription = {
  __typename?: 'Subscription';
  playingGame: Array<
    | {
        __typename?: 'DeleteUsersEvent';
        eventType: GameEvents;
        deleteUsersPayload: Array<string>;
      }
    | {
        __typename?: 'GameChangeNameEvent';
        eventType: GameEvents;
        changeNamePayload: string;
      }
    | {
        __typename?: 'GameResetEvent';
        eventType: GameEvents;
        payload?: string | null;
      }
    | {
        __typename?: 'GameRevealVoteEvent';
        eventType: GameEvents;
        revealVotesPayload: Array<{
          __typename?: 'UserVotePayload';
          userId: string;
          vote: number;
        }>;
      }
    | {
        __typename?: 'GameStatusEvent';
        eventType: GameEvents;
        statusEventPayload: Status;
      }
    | {
        __typename?: 'GameVoteEvent';
        eventType: GameEvents;
        voteEventPayload: string;
      }
    | {
        __typename?: 'JoinGameEvent';
        eventType: GameEvents;
        joinEventPayload: {
          __typename?: 'User';
          userId: string;
          username: string;
          role: UserRole;
        };
      }
    | {
        __typename?: 'LeftGameEvent';
        eventType: GameEvents;
        leftGamePayload: string;
      }
  >;
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    GameEventResponse: [
      'DeleteUsersEvent',
      'GameChangeNameEvent',
      'GameResetEvent',
      'GameRevealVoteEvent',
      'GameStatusEvent',
      'GameVoteEvent',
      'JoinGameEvent',
      'LeftGameEvent',
    ],
  },
};
export default result;

export const JoinGameDocument = gql`
  mutation joinGame($gameId: ID!, $input: JoinGameInput!) {
    joinGame(gameId: $gameId, input: $input) {
      user {
        userId
        username
        role
      }
      game {
        gameId
        gameName
        status
        users {
          userId
          username
          role
          vote
          hasVoted
        }
      }
    }
  }
`;

/**
 * __useJoinGameMutation__
 *
 * To run a mutation, you first call `useJoinGameMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useJoinGameMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useJoinGameMutation({
 *   variables: {
 *     gameId: // value for 'gameId'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useJoinGameMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        JoinGameMutation,
        JoinGameMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          JoinGameMutation,
          JoinGameMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    JoinGameMutation,
    JoinGameMutationVariables
  >(JoinGameDocument, options);
}
export type JoinGameMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    JoinGameMutation,
    JoinGameMutationVariables
  >;
export const SendVoteDocument = gql`
  mutation sendVote($gameId: ID!, $input: PlayerVoteInput!) {
    playerVote(gameId: $gameId, input: $input) {
      gameId
      gameName
      status
      users {
        userId
        username
        role
        vote
        hasVoted
      }
    }
  }
`;

/**
 * __useSendVoteMutation__
 *
 * To run a mutation, you first call `useSendVoteMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSendVoteMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSendVoteMutation({
 *   variables: {
 *     gameId: // value for 'gameId'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSendVoteMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SendVoteMutation,
        SendVoteMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SendVoteMutation,
          SendVoteMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    SendVoteMutation,
    SendVoteMutationVariables
  >(SendVoteDocument, options);
}
export type SendVoteMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SendVoteMutation,
    SendVoteMutationVariables
  >;
export const MeDocument = gql`
  mutation me {
    me {
      userId
      username
      role
      gameId
    }
  }
`;

/**
 * __useMeMutation__
 *
 * To run a mutation, you first call `useMeMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useMeMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useMeMutation();
 */
export function useMeMutation(
  options:
    | VueApolloComposable.UseMutationOptions<MeMutation, MeMutationVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<MeMutation, MeMutationVariables>
      > = {},
) {
  return VueApolloComposable.useMutation<MeMutation, MeMutationVariables>(
    MeDocument,
    options,
  );
}
export type MeMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<MeMutation, MeMutationVariables>;
export const LogoutDocument = gql`
  mutation logout {
    logout {
      message
    }
  }
`;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLogoutMutation();
 */
export function useLogoutMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        LogoutMutation,
        LogoutMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          LogoutMutation,
          LogoutMutationVariables
        >
      > = {},
) {
  return VueApolloComposable.useMutation<
    LogoutMutation,
    LogoutMutationVariables
  >(LogoutDocument, options);
}
export type LogoutMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    LogoutMutation,
    LogoutMutationVariables
  >;
export const QuitGameDocument = gql`
  mutation quitGame($gameId: ID!) {
    quitGame(gameId: $gameId) {
      message
    }
  }
`;

/**
 * __useQuitGameMutation__
 *
 * To run a mutation, you first call `useQuitGameMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useQuitGameMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useQuitGameMutation({
 *   variables: {
 *     gameId: // value for 'gameId'
 *   },
 * });
 */
export function useQuitGameMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        QuitGameMutation,
        QuitGameMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          QuitGameMutation,
          QuitGameMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    QuitGameMutation,
    QuitGameMutationVariables
  >(QuitGameDocument, options);
}
export type QuitGameMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    QuitGameMutation,
    QuitGameMutationVariables
  >;
export const GetOneGameDocument = gql`
  query getOneGame($gameId: ID!) {
    getOneGame(gameId: $gameId) {
      gameId
      gameName
      status
      users {
        userId
        username
        role
        vote
        hasVoted
      }
    }
  }
`;

/**
 * __useGetOneGameQuery__
 *
 * To run a query within a Vue component, call `useGetOneGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneGameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetOneGameQuery({
 *   gameId: // value for 'gameId'
 * });
 */
export function useGetOneGameQuery(
  variables:
    | GetOneGameQueryVariables
    | VueCompositionApi.Ref<GetOneGameQueryVariables>
    | ReactiveFunction<GetOneGameQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetOneGameQuery,
        GetOneGameQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetOneGameQuery,
          GetOneGameQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetOneGameQuery,
          GetOneGameQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useQuery<
    GetOneGameQuery,
    GetOneGameQueryVariables
  >(GetOneGameDocument, variables, options);
}
export function useGetOneGameLazyQuery(
  variables:
    | GetOneGameQueryVariables
    | VueCompositionApi.Ref<GetOneGameQueryVariables>
    | ReactiveFunction<GetOneGameQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetOneGameQuery,
        GetOneGameQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetOneGameQuery,
          GetOneGameQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetOneGameQuery,
          GetOneGameQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useLazyQuery<
    GetOneGameQuery,
    GetOneGameQueryVariables
  >(GetOneGameDocument, variables, options);
}
export type GetOneGameQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<GetOneGameQuery, GetOneGameQueryVariables>;
export const RevealVotesDocument = gql`
  query revealVotes($gameId: ID!) {
    getGameVotes(gameId: $gameId) {
      gameId
      gameName
      status
      users {
        userId
        username
        role
        vote
        hasVoted
      }
    }
  }
`;

/**
 * __useRevealVotesQuery__
 *
 * To run a query within a Vue component, call `useRevealVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRevealVotesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useRevealVotesQuery({
 *   gameId: // value for 'gameId'
 * });
 */
export function useRevealVotesQuery(
  variables:
    | RevealVotesQueryVariables
    | VueCompositionApi.Ref<RevealVotesQueryVariables>
    | ReactiveFunction<RevealVotesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        RevealVotesQuery,
        RevealVotesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          RevealVotesQuery,
          RevealVotesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          RevealVotesQuery,
          RevealVotesQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useQuery<
    RevealVotesQuery,
    RevealVotesQueryVariables
  >(RevealVotesDocument, variables, options);
}
export function useRevealVotesLazyQuery(
  variables:
    | RevealVotesQueryVariables
    | VueCompositionApi.Ref<RevealVotesQueryVariables>
    | ReactiveFunction<RevealVotesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        RevealVotesQuery,
        RevealVotesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          RevealVotesQuery,
          RevealVotesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          RevealVotesQuery,
          RevealVotesQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useLazyQuery<
    RevealVotesQuery,
    RevealVotesQueryVariables
  >(RevealVotesDocument, variables, options);
}
export type RevealVotesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    RevealVotesQuery,
    RevealVotesQueryVariables
  >;
export const CreateGameDocument = gql`
  mutation createGame($input: CreateGameInput!) {
    createGame(input: $input) {
      user {
        userId
        username
        role
      }
      game {
        gameId
        gameName
        status
        maxPlayers
      }
    }
  }
`;

/**
 * __useCreateGameMutation__
 *
 * To run a mutation, you first call `useCreateGameMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateGameMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateGameMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateGameMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CreateGameMutation,
        CreateGameMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CreateGameMutation,
          CreateGameMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    CreateGameMutation,
    CreateGameMutationVariables
  >(CreateGameDocument, options);
}
export type CreateGameMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CreateGameMutation,
    CreateGameMutationVariables
  >;
export const ChangeGameStatusDocument = gql`
  mutation changeGameStatus($gameId: ID!, $input: UpdateGameInput!) {
    changeGameStatus: updateGame(gameId: $gameId, input: $input) {
      gameId
      gameName
      status
    }
  }
`;

/**
 * __useChangeGameStatusMutation__
 *
 * To run a mutation, you first call `useChangeGameStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useChangeGameStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useChangeGameStatusMutation({
 *   variables: {
 *     gameId: // value for 'gameId'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useChangeGameStatusMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ChangeGameStatusMutation,
        ChangeGameStatusMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ChangeGameStatusMutation,
          ChangeGameStatusMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    ChangeGameStatusMutation,
    ChangeGameStatusMutationVariables
  >(ChangeGameStatusDocument, options);
}
export type ChangeGameStatusMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ChangeGameStatusMutation,
    ChangeGameStatusMutationVariables
  >;
export const DeleteUsersDocument = gql`
  mutation deleteUsers($gameId: ID!, $input: UpdateGameInput!) {
    deleteUsers: updateGame(gameId: $gameId, input: $input) {
      gameId
      gameName
      status
      deletedUsers
    }
  }
`;

/**
 * __useDeleteUsersMutation__
 *
 * To run a mutation, you first call `useDeleteUsersMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUsersMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteUsersMutation({
 *   variables: {
 *     gameId: // value for 'gameId'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUsersMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteUsersMutation,
        DeleteUsersMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteUsersMutation,
          DeleteUsersMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    DeleteUsersMutation,
    DeleteUsersMutationVariables
  >(DeleteUsersDocument, options);
}
export type DeleteUsersMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteUsersMutation,
    DeleteUsersMutationVariables
  >;
export const ResetUsersVotesDocument = gql`
  mutation resetUsersVotes($gameId: ID!, $input: UpdateGameInput!) {
    resetUsersVotes: updateGame(gameId: $gameId, input: $input) {
      gameId
      gameName
      status
      users {
        userId
        username
        vote
        hasVoted
      }
    }
  }
`;

/**
 * __useResetUsersVotesMutation__
 *
 * To run a mutation, you first call `useResetUsersVotesMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useResetUsersVotesMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useResetUsersVotesMutation({
 *   variables: {
 *     gameId: // value for 'gameId'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useResetUsersVotesMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ResetUsersVotesMutation,
        ResetUsersVotesMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ResetUsersVotesMutation,
          ResetUsersVotesMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    ResetUsersVotesMutation,
    ResetUsersVotesMutationVariables
  >(ResetUsersVotesDocument, options);
}
export type ResetUsersVotesMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ResetUsersVotesMutation,
    ResetUsersVotesMutationVariables
  >;
export const SubscribeGameDocument = gql`
  subscription subscribeGame($gameId: String!) {
    playingGame(gameId: $gameId) {
      ... on JoinGameEvent {
        eventType
        joinEventPayload: payload {
          userId
          username
          role
        }
      }
      ... on GameStatusEvent {
        eventType
        statusEventPayload: payload
      }
      ... on GameVoteEvent {
        eventType
        voteEventPayload: payload
      }
      ... on DeleteUsersEvent {
        eventType
        deleteUsersPayload: payload
      }
      ... on LeftGameEvent {
        eventType
        leftGamePayload: payload
      }
      ... on GameChangeNameEvent {
        eventType
        changeNamePayload: payload
      }
      ... on GameRevealVoteEvent {
        eventType
        revealVotesPayload: payload {
          userId
          vote
        }
      }
      ... on GameResetEvent {
        eventType
        payload
      }
    }
  }
`;

/**
 * __useSubscribeGameSubscription__
 *
 * To run a query within a Vue component, call `useSubscribeGameSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeGameSubscription` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the subscription
 * @param options that will be passed into the subscription, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/subscription.html#options;
 *
 * @example
 * const { result, loading, error } = useSubscribeGameSubscription({
 *   gameId: // value for 'gameId'
 * });
 */
export function useSubscribeGameSubscription(
  variables:
    | SubscribeGameSubscriptionVariables
    | VueCompositionApi.Ref<SubscribeGameSubscriptionVariables>
    | ReactiveFunction<SubscribeGameSubscriptionVariables>,
  options:
    | VueApolloComposable.UseSubscriptionOptions<
        SubscribeGameSubscription,
        SubscribeGameSubscriptionVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseSubscriptionOptions<
          SubscribeGameSubscription,
          SubscribeGameSubscriptionVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseSubscriptionOptions<
          SubscribeGameSubscription,
          SubscribeGameSubscriptionVariables
        >
      > = {},
) {
  return VueApolloComposable.useSubscription<
    SubscribeGameSubscription,
    SubscribeGameSubscriptionVariables
  >(SubscribeGameDocument, variables, options);
}
export type SubscribeGameSubscriptionCompositionFunctionResult =
  VueApolloComposable.UseSubscriptionReturn<
    SubscribeGameSubscription,
    SubscribeGameSubscriptionVariables
  >;
