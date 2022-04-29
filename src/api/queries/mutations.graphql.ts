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
