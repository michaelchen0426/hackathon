import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient } from "subscriptions-transport-ws";

const httpURI = 'https://subs-demo.azurewebsites.net/graphql';
const wsURI = 'wss://subs-demo.azurewebsites.net/subscriptions';

const httpLink = new HttpLink({ uri: httpURI });

const subscriotionClient = new SubscriptionClient(wsURI, {
  reconnect: true
});

const wsLink = new WebSocketLink(subscriotionClient);

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
