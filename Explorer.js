import React from 'react';
import { connect } from 'react-redux';
import CordaNetwork from './components/CordaNetwork';
import Header from './components/Header';
import Login from './components/Login';
import SideMenu from './components/SideMenu';
import * as ActionType from './store/actions';

let _props = {};

export const loginSuccess = () => {
   _props.onLoginSuccess();
}

const explorer = props => {

  _props = props;

    return (
      <div>
          {props.isLoggedIn ?
            <div>
                <Header/>
                <SideMenu></SideMenu>
                <div style={{marginLeft: 120}}>
                  <div className="content-pane">

                      <CordaNetwork></CordaNetwork>
                  </div> 
                </div> 
            </div> 
            : 
            <Login></Login>
          }
      </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        networkMap: state.networkMap
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onLoginSuccess: () => dispatch({type: ActionType.LOGIN_SUCCESS}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(explorer);