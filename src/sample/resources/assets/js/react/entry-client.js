import App from './app';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

// Grab the state from a global variable injected into the server-generated HTML
const { packages } = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = createStore(reducer);
// 検証用にwindowにstoreを公開しておく
global.STORE = store;

render(
    <Provider store={store}>
        <BrowserRouter>
            <App packages={packages} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
