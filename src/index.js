// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let root = document.getElementById('root');
if (root) {
    ReactDOM.render(<App />, root);
    registerServiceWorker();
} else {
    // error handling
    console.error('Where\'s your root element bruh?');
}
