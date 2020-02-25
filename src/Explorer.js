import React, { Component } from 'react';
import { connect } from 'react-redux';
import CordaNetwork from './screens/CordaNetwork';
import TransactionExplorer from './screens/TransactionExplorer';
import Header from './components/Header';
import Login from './screens/Login';
import SideMenu from './components/SideMenu';
import * as ActionType from './store/Actions';
import VaultExplorer from './screens/VaultExplorer';
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';

class Explorer extends Component {

    componentDidMount(){
        this.props.getApplicationState();
    }

    render(){
      return (
        <React.Fragment>
            {this.props.isLoggedIn ?
              <div>
                  <Header/>
                  <SideMenu></SideMenu>
                  <div style={{marginLeft: 120}}>
                    <div className="content-pane">
                      {
                        this.props.spinner? 
                        <div className="spinner">
                          <div>
                              <img style={{width: 100}} src="spinner.svg" alt="Spinner"></img>
                          </div>
                          </div>:null
                      }
                      {
                        this.props.currentPage === 0 ? <Dashboard/>: 
                        this.props.currentPage === 1 ? <CordaNetwork/>: 
                        this.props.currentPage === 2 ? <TransactionExplorer/>:
                        this.props.currentPage === 3 ? <VaultExplorer/>: 
                        this.props.currentPage === 4 ? <Settings/>: 
                        <Dashboard/>
                      }
                    </div> 
                  </div> 
              </div> 
              : 
              <Login></Login>
            }
        </React.Fragment>
      );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.common.isLoggedIn,
        currentPage: state.common.currentPage,
        spinner: state.common.spinner
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onLoginSuccess: () => dispatch({type: ActionType.LOGIN_SUCCESS}),
      getApplicationState: () => dispatch({type: ActionType.LOAD_APP_STATE}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);