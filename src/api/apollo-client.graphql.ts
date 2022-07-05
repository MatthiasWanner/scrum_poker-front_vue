import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

import typeDefs from './typeDefs';

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_SCRUM_API_URL}`,
  credentials: 'include',
});

// Create a WebSocket link:
const wsLink = new GraphQLWsLink(
  createClient({
    url: `${import.meta.env.VITE_SCRUM_WS_URL}`,
  }),
);

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers: {},
  credentials: 'include',
});

export default apolloClient;
