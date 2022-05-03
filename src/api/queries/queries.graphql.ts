import { gql } from 'graphql-tag';

export const getOneGame = gql`
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

export const getGameVotes = gql`
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
