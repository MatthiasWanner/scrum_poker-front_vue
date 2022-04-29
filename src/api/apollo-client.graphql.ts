import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

// eslint-disable-next-line import/no-unresolved
import typeDefs from './schema.graphql';

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_SCRUM_API_URL}`,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers: {},
});

export default apolloClient;
