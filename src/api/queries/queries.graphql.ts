import { gql } from 'graphql-tag';

export const getOneGame = gql`
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

export const revealVotes = gql`
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
