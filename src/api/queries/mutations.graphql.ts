import { gql } from 'graphql-tag';

export const createGame = gql`
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

export const playerVote = gql`
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

export const me = gql`
  mutation me {
    me {
      userId
      username
      role
      gameId
    }
  }
`;

export const logout = gql`
  mutation logout {
    logout {
      message
    }
  }
`;
