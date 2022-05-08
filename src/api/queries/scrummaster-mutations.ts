import { gql } from 'graphql-tag';

export const createGame = gql`
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

export const changeGameStatus = gql`
  mutation changeGameStatus($gameId: ID!, $input: UpdateGameInput!) {
    changeGameStatus: updateGame(gameId: $gameId, input: $input) {
      gameId
      gameName
      status
    }
  }
`;

export const deleteUsers = gql`
  mutation deleteUsers($gameId: ID!, $input: UpdateGameInput!) {
    deleteUsers: updateGame(gameId: $gameId, input: $input) {
      gameId
      gameName
      status
      deletedUsers
    }
  }
`;

export const resetUsersVotes = gql`
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
