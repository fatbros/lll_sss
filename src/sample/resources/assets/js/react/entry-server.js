/* global context, dispatch */

import App from './app';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';
const sagaMiddleware = createSagaMiddleware()

// Compile an initial state
const { packages } = context;

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
// 検証用にwindowにstoreを公開しておく
global.STORE = store;

sagaMiddleware.run(rootSaga)

const html = ReactDOMServer.renderToString(
    <div id="app">
        <Provider store={store}>
            <StaticRouter location={context.url}>
                <App packages={packages} />
            </StaticRouter>
        </Provider>
    </div>
);

dispatch(html);
