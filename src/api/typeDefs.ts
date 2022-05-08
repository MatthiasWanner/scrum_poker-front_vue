import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Message {
    # Message text
    message: String!
  }

  type User {
    # Id of existing user
    userId: ID!

    # Name of the player
    username: String!

    # Role of the player during current game
    role: UserRole!
  }

  enum UserRole {
    DEVELOPER
    SCRUMMASTER
  }

  type UserInGame {
    # Id of existing user
    userId: ID!

    # Name of the player
    username: String!

    # Role of the player during current game
    role: UserRole!

    # Current vote
    vote: Int

    # Describe if the user had voted
    hasVoted: Boolean!
  }

  type UserInSession {
    # Id of existing user
    userId: ID!

    # Name of the player
    username: String!

    # Role of the player during current game
    role: UserRole!

    # The current session game id
    gameId: ID!
  }

  type CurrentGame {
    # Id of existing game
    gameId: ID!

    # Name of the new game
    gameName: String!

    # Number of max players allowed
    maxPlayers: Int

    # Users in the game
    users: [UserInGame!]!

    # Game status 'WAITING', 'IN_PROGRESS' or 'FINISHED'
    status: Status!

    # Array of deleted users IDs
    deletedUsers: [ID!]!
  }

  # Game status
  enum Status {
    WAITING
    IN_PROGRESS
    FINISHED
  }

  type GameResponse {
    # New user subscribing
    user: User!

    # Current game
    game: CurrentGame!

    # Redis response status
    redisResponse: String!
  }

  type GameSubscriptionEvent {
    eventType: GameEvents!
  }

  # Game events
  enum GameEvents {
    USERJOINGAME
    USERVOTE
    USERLEFTGAME
    USERSDELETED
    STATUSCHANGED
    GAMENAMECHANGED
    REVEALVOTES
    RESETVOTES
  }

  type UserVotePayload {
    userId: ID!
    vote: Int!
  }

  type Query {
    hello: Message!
    getOneGame(
      # Game id
      gameId: ID!
    ): CurrentGame
    getGameVotes(
      # Game id
      gameId: ID!
    ): CurrentGame
  }

  type Mutation {
    createGame(input: CreateGameInput!): GameResponse!
    joinGame(
      # Game ID
      gameId: ID!

      # Join game input
      input: JoinGameInput!
    ): GameResponse!
    playerVote(
      # Id of existing game
      gameId: ID!

      # Player vote in game input
      input: PlayerVoteInput!
    ): CurrentGame!
    updateGame(
      # Id of existing game
      gameId: ID!

      # Input containing updated game datas
      input: UpdateGameInput!
    ): CurrentGame!
    quitGame(gameId: ID!): Message!
    me: UserInSession!
    logout: Message!
  }

  input CreateGameInput {
    # Name of the player
    username: String!

    # Name of the new game
    gameName: String!

    # Max players allowed
    maxPlayers: Int = 10
  }

  input JoinGameInput {
    # Name of the player
    username: String!
  }

  input PlayerVoteInput {
    # Player vote
    vote: Vote!
  }

  # Player vote according to a fibonacci sequence
  enum Vote {
    ONE
    TWO
    THREE
    FIVE
    EIGHT
    THIRTEEN
    TWENTYONE
  }

  input UpdateGameInput {
    # New name of the game
    gameName: String

    # New status of the game
    status: Status

    # Array of user IDs to be deleted
    deleteUsers: [ID!]

    # Use this field to reset all players votes
    resetVotes: Boolean
  }

  type Subscription {
    playingGame(gameId: String!): [GameEventResponse!]!
  }

  union GameEventResponse =
      JoinGameEvent
    | GameVoteEvent
    | LeftGameEvent
    | DeleteUsersEvent
    | GameStatusEvent
    | GameChangeNameEvent
    | GameRevealVoteEvent
    | GameResetEvent

  type JoinGameEvent {
    eventType: GameEvents!
    payload: User!
  }

  type GameVoteEvent {
    eventType: GameEvents!

    # Id of the player who just voted
    payload: ID!
  }

  type LeftGameEvent {
    eventType: GameEvents!
    payload: ID!
  }

  type DeleteUsersEvent {
    eventType: GameEvents!

    # List of deleted user ids
    payload: [ID!]!
  }

  type GameStatusEvent {
    eventType: GameEvents!

    # Game status: WAITING, IN_PROGRESS, FINISHED
    payload: Status!
  }

  type GameChangeNameEvent {
    eventType: GameEvents!
    payload: String!
  }

  type GameRevealVoteEvent {
    eventType: GameEvents!
    payload: [UserVotePayload!]!
  }

  type GameResetEvent {
    eventType: GameEvents!
    payload: String
  }
`;

export default typeDefs;
