import { gql } from 'graphql-tag';

export const joinGame = gql`
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

export const sendVote = gql`
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

export const quitGame = gql`
  mutation quitGame($gameId: ID!) {
    quitGame(gameId: $gameId) {
      message
    }
  }
`;
