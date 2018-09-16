import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import configureStore, {history} from './store'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
