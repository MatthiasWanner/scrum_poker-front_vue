import { gql } from 'graphql-tag';

export const createGame = gql`
  mutation game($input: CreateGameInput!) {
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

export const joinGame = gql`
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

export const vote = gql`
  mutation vote($input: PlayerVoteInput!) {
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
