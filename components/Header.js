import React from 'react';
import '../styles/Header.css';
import { Button, Popper, Paper, Grow, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core';
import * as ActionType from '../store/Actions'
import { connect } from 'react-redux';
import CrdaLogo from '../assets/crda-logo.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({

    overrides: {
        MuiButton: {
            outlinedPrimary: {
                backgroundColor: 'var(--vscode-button-hoverBackground)',
                color: '#FFFFFF',
                border: '0px',
                '&:hover': {
                    backgroundColor: 'var(--vscode-list-highlightForeground)',
                    border: '0px',
                    color: '#FFFFFF'
                },
            },
            outlinedSecondary: {
                backgroundColor: 'var(--vscode-list-highlightForeground)',
                color: 'var(--vscode-sideBarSectionHeader-foreground)'
            }
        }
    }
});

const Header = (props) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
      setOpen(prevOpen => !prevOpen);
    };
  
    const handleClose = event => {
      setOpen(false);
    };

  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

      prevOpen.current = open;
    }, [open]);

    const serverLocation = (!props.localNodes ? "Gradle Node" : "Manual Node");

    const localNodesList = () => {
      return (
        <div>
        {Object.keys(props.gradleNodes).map(function(key, index) {
            const nodeName = key.match("O=(.*),L")[1];
            if (nodeName != props.profile.name)
              return (<MenuItem onClick={() => onLogin(props.gradleNodes[key])}>{nodeName}</MenuItem>)
            else return null; // don't list CURRENT NODE
        })}
        <hr />
        </div>
      )
    }

    const onLogin = (node) => {
      console.log(node);
      const hostNameSplit = node.host.split(":");
      const data = {
        hostName: hostNameSplit[0],
        port: hostNameSplit[1],
        username: node.username,
        password: node.password
      }
      props.updateCurrentNode(data);
    }
  
    return(
      <ThemeProvider theme={theme}>
      <div className="Header">
          <div>
                <img src={CrdaLogo} width="100%" alt="Corda Logo" className="Logo"/>
                <div className="profile">
                  <Button color="primary" variant="outlined" ref={anchorRef} onClick={handleToggle}>
                    {props.profile.name} - ({serverLocation})
                  </Button>
                  <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                        >
                          <Paper>
                            <div style={{padding: 10}}>
                                <span style={{display: "block", paddingBottom: 3}}>
                                  {props.profile.name}
                                </span>
                                <span style={{fontSize: 12, display: "block"}}>{props.profile.city}, {props.profile.country}</span>
                            </div>
                            <hr style={{margin: 0}}/>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{padding: 0}}>
                                {props.localNodes ? null : localNodesList()}
                                <MenuItem onClick={props.onLogout}>Logout</MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                </div>
          </div>
      </div>
      </ThemeProvider>
    );
}

const mapStateToProps = state => {
  return {
    profile: state.common.profile,
    gradleNodes: state.common.gradleNodesList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onLogout: () => dispatch({type: ActionType.LOGOUT}),
      updateCurrentNode:(data) => dispatch({type: ActionType.UPDATE_CURRENT_NODE, payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);