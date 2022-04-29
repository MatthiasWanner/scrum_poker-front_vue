import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Message {
    # Message text
    message: String!
  }

  type UserInGame {
    # Id of existing user
    userId: String!

    # Name of the player
    username: String!

    # Role of the player during current game
    role: String!

    # Current vote
    vote: Int

    # Describe if the user had voted
    hasVoted: Boolean!
  }

  type CurrentGame {
    # Id of existing game
    gameId: String!

    # Name of the new game
    gameName: String!

    # Users in the game
    users: [UserInGame!]!

    # Game status 'WAITING', 'IN_PROGRESS' or 'FINISHED'
    status: String!
  }

  type GameResponse {
    # Current game
    game: CurrentGame!

    # Redis response status
    redisResponse: String!
  }

  type Query {
    hello: Message!
    getOneGame(id: String!): CurrentGame
    getGameVotes(
      # Game id
      id: String!
    ): CurrentGame
  }

  type Mutation {
    createGame(input: CreateGameInput!): GameResponse!
    joinGame(input: JoinGameInput!): GameResponse!
    playerVote(input: PlayerVoteInput!): CurrentGame!
  }

  input CreateGameInput {
    # Name of the player
    username: String!

    # Name of the new game
    gameName: String!
  }

  input JoinGameInput {
    # Id of the game
    gameId: String!

    # Name of the player
    username: String!
  }

  input PlayerVoteInput {
    # Player vote
    vote: Int!
  }

  type Subscription {
    playingGame(gameId: String!): CurrentGame!
  }
`;

export default typeDefs;
