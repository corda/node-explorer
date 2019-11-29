import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Explorer from './Explorer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><Explorer/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
