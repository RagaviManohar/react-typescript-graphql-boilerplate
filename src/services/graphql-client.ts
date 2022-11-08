import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

import config from 'config';

export const fetchNetworkOnly = 'network-only';

/**
 * @function setHeaders
 * To set authorization with bearer token in api header
 */
export const setHeaders = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    // ...getAuthHeaders(),
  },
}));

/**
 * @function errorLink
 * To handle errors based on the response from 'graphQLErrors.[0].extensions.response.status'
 */
export const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          // clearStorage();
          break;
        default:
          break;
      }
    }
  }
});

const httpLink = createHttpLink({
  uri: config.graphqlUrl,
});

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: ApolloLink.from([errorLink, setHeaders, httpLink]),
});

export default client;
