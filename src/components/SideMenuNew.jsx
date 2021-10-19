import React from 'react';
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import { SideBar, SideBarItem } from 'r3-tooling-design-system';
import '../styles/SideMenu.scss';

const SideMenu = (props) => {


    return (

        <SideBar toggable className="sidebar-toggable">
            <SideBarItem
          icon="ViewDashboard"
          active={props.currentPage === 0? "active":""}
                title={
                  <span onClick={() => props.changeScreen(0)}>
                   Dashboard
                </span>
                }
        ></SideBarItem>
         <SideBarItem
          icon="Earth"
          active={props.currentPage === 1? "active":""}
                title={
                  <span onClick={() => props.changeScreen(1)}>
                   Networks
                </span>
                }
              ></SideBarItem>
          <SideBarItem
          icon="SwapHorizontal"
          active={props.currentPage === 2? "active":""}
                title={
                  <span  onClick={() => props.changeScreen(2)}>
                  Transactions
                </span>
                }
        ></SideBarItem>
        <SideBarItem
              icon="SafeSquareOutline"
              active={props.currentPage === 3? "active":""}
                title={
                  <span onClick={() => props.changeScreen(3)}>
             Vault
                </span>
                }
        ></SideBarItem>
         <SideBarItem
              icon="CogOutline"
              active={props.currentPage === 4? "active":""}
                title={
                   <span onClick={() => props.changeScreen(4)}>
                   Settings
                </span>
                }
              ></SideBarItem>
      </SideBar>
    );
}


const mapStateToProps = state => {
    return {
        currentPage: state.common.currentPage
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        changeScreen: (page) => dispatch({type: ActionType.CHANGE_SCREEN, page: page}),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);