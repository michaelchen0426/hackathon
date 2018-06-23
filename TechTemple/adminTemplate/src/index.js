/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import AppIndex from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./favicon.ico');
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import { ApolloProvider } from 'react-apollo';
import client from './apollo/apolloClient';

injectTapEventPlugin();

render(
  <ApolloProvider client={client}>
    <AppIndex />
  </ApolloProvider>, document.getElementById('app')
);
