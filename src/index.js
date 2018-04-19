// @flow
// React
import React from 'react';
import ReactDOM from 'react-dom';

// Apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Root Component
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { appReducer } from './reducers'

const store = createStore(appReducer);

const root = document.getElementById('root');
const client = new ApolloClient({
    uri: "http://localhost:4000"
});

if (root) {
    ReactDOM.render(
        <Provider store={store}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Provider>
    , root);
} else {
    // error handling
    console.error('Where\'s your root element bruh?');
}
