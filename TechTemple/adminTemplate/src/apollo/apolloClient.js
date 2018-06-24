import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const httpURI = 'https://subs-demo.azurewebsites.net/graphql';
const wsURI = 'wss://subs-demo.azurewebsites.net/subscriptions';

const httpLink = new HttpLink({ uri: httpURI });

const wsLink = new WebSocketLink({
    uri: wsURI,
    options: {
        reconnect: true,
        reconnectionAttempts: 1000000,
        wsTimeout: 9999999
    }
});

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
