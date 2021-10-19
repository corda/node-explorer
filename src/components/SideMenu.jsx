import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import PublicIcon from '@material-ui/icons/Public';
import SyncAltRoundedIcon from '@material-ui/icons/SyncAltRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import '../styles/SideMenu.scss';

const sideMenu = (props) => {
    return (
        <div className="SideMenu">
            <ul>
                <li className={props.currentPage === 0? "active":""} onClick={() => props.changeScreen(0)}>
                    <div>
                        <DashboardIcon fontSize="large"></DashboardIcon>
                    </div>
                    <span>Dashboard</span>
                </li>
                <li className={props.currentPage === 1? "active":""} onClick={() => props.changeScreen(1)}>
                    <div>
                        <PublicIcon fontSize="large"></PublicIcon>
                    </div>
                    <span>Network</span>
                </li>
                <li className={props.currentPage === 2? "active":""} onClick={() => props.changeScreen(2)}>
                    <div>
                        <SyncAltRoundedIcon fontSize="large"></SyncAltRoundedIcon>
                    </div>
                    <span>Transactions</span>
                </li>
                <li className={props.currentPage === 3? "active":""} onClick={() => props.changeScreen(3)}>
                    <div>
                        <SecurityRoundedIcon fontSize="large"></SecurityRoundedIcon>
                    </div>
                    <span>Vault</span>
                </li>
                <li className={props.currentPage === 4? "active":""} onClick={() => props.changeScreen(4)}>
                    <div>
                        <SettingsApplicationsIcon fontSize="large"></SettingsApplicationsIcon>
                    </div>
                    <span>Settings</span>
                </li>
            </ul>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(sideMenu);