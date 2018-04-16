import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
