import { gql } from 'graphql-tag';

export const subscribeGame = gql`
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
