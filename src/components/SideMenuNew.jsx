import React, {useState} from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import PublicIcon from '@material-ui/icons/Public';
import SyncAltRoundedIcon from '@material-ui/icons/SyncAltRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { SideBar, SideBarItem } from '@r3/r3-tooling-design-system';
import '../styles/SideMenu.css';

const SideMenu = (props) => {

    
    const [isActiveSideBarItem] = useState(false);

    return (

        <SideBar toggable className="sidebar-toggable">
            <SideBarItem
              icon="ViewDashboard"
              onClick={() =>this.props.changeScreen(0)}
                title={
                  'Dashboard'
                }
        ></SideBarItem>
         <SideBarItem
              icon="Earth"
              onClick={() => this.props.changeScreen(1)}
                title={
                  'Networks'
                }
              ></SideBarItem>
          <SideBarItem
              icon="SwapHorizontal"
              onClick={() =>props.changeScreen(2)}
                title={
                  'Transactions'
                }
        ></SideBarItem>
        <SideBarItem
              icon="SafeSquareOutline"
              onClick={() =>props.changeScreen(3)}
                title={
                  'Vault'
                }
        ></SideBarItem>
         <SideBarItem
              icon="CogOutline"
              onClick={() =>props.changeScreen(4)}
                title={
                  'Settings'
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