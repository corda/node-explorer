import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PublicIcon from '@material-ui/icons/Public';
import SyncAltRoundedIcon from '@material-ui/icons/SyncAltRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import '../styles/SideMenu.css';

const sideMenu = (props) => {
    return (
        <div className="SideMenu">
            <ul>
                <li>
                    <div>
                        <DashboardIcon fontSize="large"></DashboardIcon>
                    </div>
                    <span>Dashboard</span>
                </li>
                <li className="active">
                    <div>
                        <PublicIcon fontSize="large"></PublicIcon>
                    </div>
                    <span>Network</span>
                </li>
                <li>
                    <div>
                        <SyncAltRoundedIcon fontSize="large"></SyncAltRoundedIcon>
                    </div>
                    <span>Transactions</span>
                </li>
                <li>
                    <div>
                        <SecurityRoundedIcon fontSize="large"></SecurityRoundedIcon>
                    </div>
                    <span>Vault</span>
                </li>
            </ul>
        </div>
    );
}

export default sideMenu;