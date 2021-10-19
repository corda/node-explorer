import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import commonReducer from './store/reducers/CommonReducer';
import explorerReducer from './store/reducers/ExplorerReducer';
import txReducer from './store/reducers/TxExplorerReducer'
import vltReducer from './store/reducers/VaultReducer'
import dsbdReducer from './store/reducers/DashboardReducer'
import thunk from "redux-thunk";
import Explorer from './Explorer';
import './index.scss';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'r3-tooling-design-system/lib/index.scss';


const rootReducer = combineReducers({
    common: commonReducer,
    explorer: explorerReducer,
    trnx: txReducer,
    toastr: toastrReducer,
    vault: vltReducer,
    dashboard: dsbdReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <div style={{height: "100%"}}>
        <Explorer/>
        <ReduxToastr
            timeOut={3000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            getState={(state) => state.toastr}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            s
            closeOnToastrClick/>
    </div>
    </Provider>, 
document.getElementById('root'));
serviceWorker.unregister();
