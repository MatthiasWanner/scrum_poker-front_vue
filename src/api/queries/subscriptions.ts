import { gql } from 'graphql-tag';

export const subscribeGame = gql`
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
