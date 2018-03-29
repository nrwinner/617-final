// @flow
// React
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Root Component
import App from './App';


const root = document.getElementById('root');
const client = new ApolloClient({
    uri: "http://localhost:4000"
});

if (root) {
    ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    , root);
    registerServiceWorker();
} else {
    // error handling
    console.error('Where\'s your root element bruh?');
}
