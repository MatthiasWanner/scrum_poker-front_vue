import { gql } from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
// eslint-disable-next-line import/named
import { Ref } from 'vue';

// eslint-disable-next-line import/no-unresolved
import { GameStatus } from '../../store';

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
  /** Name of the player */
  username: Scalars['String'];
};

export type CurrentGame = {
  __typename?: 'CurrentGame';
  /** Id of existing game */
  gameId: Scalars['String'];
  /** Name of the new game */
  gameName: Scalars['String'];
  /** Game status 'WAITING', 'IN_PROGRESS' or 'FINISHED'  */
  status: Scalars['String'];
  /** Users in the game */
  users: Array<UserInGame>;
};

export type GameResponse = {
  __typename?: 'GameResponse';
  /** Current game */
  game: CurrentGame;
  /** Redis response status */
  redisResponse: Scalars['String'];
};

export type JoinGameInput = {
  /** Name of the new game */
  gameId: Scalars['String'];
  /** Name of the player */
  username: Scalars['String'];
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
};

export type MutationCreateGameArgs = {
  input: CreateGameInput;
};

export type MutationJoinGameArgs = {
  input: JoinGameInput;
};

export type MutationPlayerVoteArgs = {
  input: PlayerVoteInput;
};

export type PlayerVoteInput = {
  /** Player vote */
  vote: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getGameVotes?: Maybe<CurrentGame>;
  getOneGame?: Maybe<CurrentGame>;
  hello: Message;
};

export type QueryGetGameVotesArgs = {
  id: Scalars['String'];
};

export type QueryGetOneGameArgs = {
  id: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  playingGame: CurrentGame;
};

export type SubscriptionPlayingGameArgs = {
  gameId: Scalars['String'];
};

export type UserInGame = {
  __typename?: 'UserInGame';
  /** Describe if the user had voted */
  hasVoted: Scalars['Boolean'];
  /** Role of the player during current game */
  role: Scalars['String'];
  /** Id of existing user */
  userId: Scalars['String'];
  /** Name of the player */
  username: Scalars['String'];
  /** Current vote */
  vote?: Maybe<Scalars['Int']>;
};

export type UserInSession = {
  __typename?: 'UserInSession';
  /** The current session game id */
  gameId: Scalars['String'];
  /** Role of the player during current game */
  role: Scalars['String'];
  /** Id of existing user */
  userId: Scalars['String'];
  /** Name of the player */
  username: Scalars['String'];
};

export type CreateGameMutationVariables = Exact<{
  input: CreateGameInput;
}>;

export type CreateGameMutation = {
  __typename?: 'Mutation';
  createGame: {
    __typename?: 'GameResponse';
    redisResponse: string;
    game: {
      __typename?: 'CurrentGame';
      gameId: string;
      gameName: string;
      status: GameStatus;
      users: Array<{
        __typename?: 'UserInGame';
        userId: string;
        username: string;
        role: string;
        vote?: number | null;
        hasVoted: boolean;
      }>;
    };
  };
};

export type JoinGameMutationVariables = Exact<{
  input: JoinGameInput;
}>;

export type JoinGameMutation = {
  __typename?: 'Mutation';
  joinGame: {
    __typename?: 'GameResponse';
    redisResponse: string;
    game: {
      __typename?: 'CurrentGame';
      gameId: string;
      gameName: string;
      status: GameStatus;
      users: Array<{
        __typename?: 'UserInGame';
        userId: string;
        username: string;
        role: string;
        vote?: number | null;
        hasVoted: boolean;
      }>;
    };
  };
};

export type PlayerVoteMutationVariables = Exact<{
  input: PlayerVoteInput;
}>;

export type PlayerVoteMutation = {
  __typename?: 'Mutation';
  playerVote: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: GameStatus;
    users: Array<{
      __typename?: 'UserInGame';
      userId: string;
      username: string;
      role: string;
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
    role: string;
    gameId: string;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = {
  __typename?: 'Mutation';
  logout: { __typename?: 'Message'; message: string };
};

export type GetOneGameQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetOneGameQuery = {
  __typename?: 'Query';
  getOneGame?: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: GameStatus;
    users: Array<{
      __typename?: 'UserInGame';
      userId: string;
      username: string;
      role: string;
      vote?: number | null;
      hasVoted: boolean;
    }>;
  } | null;
};

export type GetGameVotesQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetGameVotesQuery = {
  __typename?: 'Query';
  getGameVotes?: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: GameStatus;
    users: Array<{
      __typename?: 'UserInGame';
      userId: string;
      username: string;
      role: string;
      vote?: number | null;
      hasVoted: boolean;
    }>;
  } | null;
};

export type SubscribeGameSubscriptionVariables = Exact<{
  gameId: Scalars['String'];
}>;

export type SubscribeGameSubscription = {
  __typename?: 'Subscription';
  playingGame: {
    __typename?: 'CurrentGame';
    gameId: string;
    gameName: string;
    status: GameStatus;
    users: Array<{
      __typename?: 'UserInGame';
      userId: string;
      username: string;
      role: string;
      vote?: number | null;
      hasVoted: boolean;
    }>;
  };
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;

export const CreateGameDocument = gql`
  mutation createGame($input: CreateGameInput!) {
    createGame(input: $input) {
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
      redisResponse
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
  options?:
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
export const JoinGameDocument = gql`
  mutation joinGame($input: JoinGameInput!) {
    joinGame(input: $input) {
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
      redisResponse
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
 *     input: // value for 'input'
 *   },
 * });
 */
export function useJoinGameMutation(
  options?:
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
export const PlayerVoteDocument = gql`
  mutation playerVote($input: PlayerVoteInput!) {
    playerVote(input: $input) {
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
 * __usePlayerVoteMutation__
 *
 * To run a mutation, you first call `usePlayerVoteMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `usePlayerVoteMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = usePlayerVoteMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function usePlayerVoteMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        PlayerVoteMutation,
        PlayerVoteMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          PlayerVoteMutation,
          PlayerVoteMutationVariables
        >
      >,
) {
  return VueApolloComposable.useMutation<
    PlayerVoteMutation,
    PlayerVoteMutationVariables
  >(PlayerVoteDocument, options);
}
export type PlayerVoteMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    PlayerVoteMutation,
    PlayerVoteMutationVariables
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
export const GetOneGameDocument = gql`
  query getOneGame($id: String!) {
    getOneGame(id: $id) {
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
 *   id: // value for 'id'
 * });
 */
export function useGetOneGameQuery(
  variables:
    | GetOneGameQueryVariables
    | Ref<GetOneGameQueryVariables>
    | ReactiveFunction<GetOneGameQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetOneGameQuery,
        GetOneGameQueryVariables
      >
    | Ref<
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
    | Ref<GetOneGameQueryVariables>
    | ReactiveFunction<GetOneGameQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetOneGameQuery,
        GetOneGameQueryVariables
      >
    | Ref<
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
export const GetGameVotesDocument = gql`
  query getGameVotes($id: String!) {
    getGameVotes(id: $id) {
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
 * __useGetGameVotesQuery__
 *
 * To run a query within a Vue component, call `useGetGameVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameVotesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetGameVotesQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetGameVotesQuery(
  variables:
    | GetGameVotesQueryVariables
    | Ref<GetGameVotesQueryVariables>
    | ReactiveFunction<GetGameVotesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetGameVotesQuery,
        GetGameVotesQueryVariables
      >
    | Ref<
        VueApolloComposable.UseQueryOptions<
          GetGameVotesQuery,
          GetGameVotesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetGameVotesQuery,
          GetGameVotesQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useQuery<
    GetGameVotesQuery,
    GetGameVotesQueryVariables
  >(GetGameVotesDocument, variables, options);
}
export function useGetGameVotesLazyQuery(
  variables:
    | GetGameVotesQueryVariables
    | Ref<GetGameVotesQueryVariables>
    | ReactiveFunction<GetGameVotesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetGameVotesQuery,
        GetGameVotesQueryVariables
      >
    | Ref<
        VueApolloComposable.UseQueryOptions<
          GetGameVotesQuery,
          GetGameVotesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetGameVotesQuery,
          GetGameVotesQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useLazyQuery<
    GetGameVotesQuery,
    GetGameVotesQueryVariables
  >(GetGameVotesDocument, variables, options);
}
export type GetGameVotesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetGameVotesQuery,
    GetGameVotesQueryVariables
  >;
export const SubscribeGameDocument = gql`
  subscription subscribeGame($gameId: String!) {
    playingGame(gameId: $gameId) {
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
    | Ref<SubscribeGameSubscriptionVariables>
    | ReactiveFunction<SubscribeGameSubscriptionVariables>,
  options:
    | VueApolloComposable.UseSubscriptionOptions<
        SubscribeGameSubscription,
        SubscribeGameSubscriptionVariables
      >
    | Ref<
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
