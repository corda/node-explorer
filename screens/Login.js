import {Button, Grid, TextField, Checkbox, FormControlLabel} from '@material-ui/core';
import React, { Component } from 'react';
import '../styles/Login.css';
import * as ActionType from '../store/Actions';
import { connect } from 'react-redux';
import SplashScreen from '../components/Splash';
import GlobalMap from '../assets/global-map.png';
import CrdaLogo from '../assets/crda-logo.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        action: {
          disabledBackground: 'var(--vscode-button-background)'
        }
      },
    overrides: {
        MuiButton: {
            containedPrimary: {
                backgroundColor: 'var(--vscode-button-hoverBackground)',
                color: '#FFFFFF',
                '&:hover': {
                    backgroundColor: 'var(--vscode-list-highlightForeground)',
                    color: '#FFFFFF'
                },
            },
            containedSecondary: {
                backgroundColor: 'var(--vscode-list-highlightForeground)',
                color: 'var(--vscode-sideBarSectionHeader-foreground)'
            }
        },
        MuiInputBase: {
            root: {
                color: 'var(--vscode-sideBarSectionHeader-foreground)'
            }
        },
        MuiInputLabel: { 
            root: { 
                color: 'var(--vscode-sideBarSectionHeader-foreground)'
            }
        },
        MuiFormControlLabel: { 
            root: { 
                color: 'var(--vscode-sideBarSectionHeader-foreground)'
            }
        },
        MuiInput: {
            underline: {
              "&:before": {
                borderBottom: '1px solid #FFFFFF'
              }
            }
        },
        MuiCheckbox: {
            root: {
                color: 'var(--vscode-sideBarSectionHeader-foreground)'
            }
        }
    }
});

class Login extends Component {

    state = {
      hostName: "",
      port: "",
      username: "",
      password: "",
        ssh: {
            port: "",
            username: "",
            password: "",
        },
        sshChecked: false,
      touched: {
        hostName: false,
        port: false,
        username: false,
        password: false,
          sshPort: false,
          sshUsername: false,
          sshPassword: false,
      },
    };

    handleBlur = field => evt => {
      this.setState({
        touched: { ...this.state.touched, [field]: true }
      });
    };

    validate = () => {
        if (!this.state.sshChecked) {
            return {
                hostName: this.state.hostName.length === 0,
                port: this.state.port.length === 0,
                username: this.state.username.length === 0,
                password: this.state.password.length === 0
            };
        } else {
            return {
                hostName: this.state.hostName.length === 0,
                port: this.state.port.length === 0,
                username: this.state.username.length === 0,
                password: this.state.password.length === 0,
                sshPort: this.state.ssh.port.length === 0,
                sshUsername: this.state.ssh.username.length === 0,
                sshPassword: this.state.ssh.password.length === 0
            }
        }
    }

    handleBlur = field => evt => {
      this.setState({
        touched: { ...this.state.touched, [field]: true }
      });
    };

    shouldMarkError = field => {
      let errors = this.validate();
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    useGradle = () => {
        this.props.useGradleNodes();
    }

    // excutes a login
    doLogin = () => {
      const errors = this.validate();
      const hasErrors = Object.keys(errors).some(x => errors[x]);
      if(!hasErrors){
        let data = {...this.state};
        delete data.touched;
        delete data.sshChecked;
        if (!this.state.sshChecked) delete data.ssh;
        this.props.onLoginAction(data);
      }
    }

    render() {
        const errors = this.validate();
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        const sshCredentials = () => {
            // user, password/key, host, port
            if (this.state.sshChecked) {
                return (
                    <ThemeProvider theme={theme}>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField label="SSH Port" type="number" value={this.state.ssh.port}
                                       onChange={e => this.setState({ssh: {...this.state.ssh, port: e.target.value}})}
                                       error={this.shouldMarkError("sshPort")}
                                       helperText={this.shouldMarkError("sshPort") ? 'Please Enter SSH Port Number' : ''}
                                       onBlur={this.handleBlur("sshPort")}/>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField label="SSH Username" fullWidth value={this.state.ssh.username}
                                           onChange={e => this.setState({ssh: {...this.state.ssh, username: e.target.value}})}
                                           error={this.shouldMarkError("sshUsername")}
                                           helperText={this.shouldMarkError("sshUsername") ? 'Please Enter SSH Username' : ''}
                                           onBlur={this.handleBlur("sshUsername")}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="SSH Password" type="password" fullWidth
                                           onInput={e => this.setState({ssh: {...this.state.ssh, password: e.target.value}})}
                                           error={this.shouldMarkError("sshPassword")}
                                           helperText={this.shouldMarkError("sshPassword") ? 'Please Enter SSH Password' : ''}
                                           onBlur={this.handleBlur("sshPassword")}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    </ThemeProvider>
                )
            }
        }
        // Wait with splash screen for client to come up AND for connect to take place if there is a node set
        if (!this.props.isServerAwake || this.props.loginProcessing) {
            this.props.onLoadAction();
            return (<SplashScreen/>)
        } 
        else { 
            // first attempt to connect to default gradle nodes if available and user hasn't requested
            // explict remote login
            if (!this.props.remoteLogin && this.props.currentNodeChanged && this.props.gradleNodesRunning) {
                this.props.onLoginAction(this.props.currentNode);
            }
            return ( // else Show manual login screen
                <ThemeProvider theme={theme}>
                <div style={{position: 'relative'}}>
                    <img src={GlobalMap} alt="Global Map" width="100%"></img>
                    <div className="center-container">
                        <div>
                            <div>
                                <img src={CrdaLogo} alt="Corda Logo" width="250px"></img>
                                <div className="explorer-text">Node Explorer</div>
                            </div>
                            <Grid container style={{marginTop: "10px"}} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField label="Node Hostname" value={this.state.hostName}
                                               onChange={e => this.setState({hostName: e.target.value})}
                                               error={this.shouldMarkError("hostName")}
                                               helperText={this.shouldMarkError("hostName") ? 'Please Enter Node Hostname' : ''}
                                               onBlur={this.handleBlur("hostName")}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label="Node Port" type="number"
                                               value={this.state.port}
                                               onChange={e => this.setState({port: e.target.value})}
                                               error={this.shouldMarkError("port")}
                                               helperText={this.shouldMarkError("port") ? 'Please Enter Node Port Number' : ''}
                                               onBlur={this.handleBlur("port")}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="RPC Username" fullWidth
                                                value={this.state.username}
                                                onChange={e => this.setState({username: e.target.value})}
                                                error={this.shouldMarkError("username")}
                                                helperText={this.shouldMarkError("username") ? 'Please Enter RPC Username' : ''}
                                                onBlur={this.handleBlur("username")}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="RPC Password" type="password" fullWidth
                                                value={this.state.password}
                                                onInput={e => this.setState({password: e.target.value})}
                                                error={this.shouldMarkError("password")}
                                                helperText={this.shouldMarkError("password") ? 'Please Enter RPC Password' : ''}
                                                onBlur={this.handleBlur("password")}/>
                                </Grid>
                                <Grid item xs={12} style={{marginTop: "4px", textAlign: "left"}}>
                                    <FormControlLabel control={
                                        <Checkbox
                                            checked={this.sshChecked}
                                            onChange={e => this.setState({sshChecked: e.target.checked})}
                                            value="primary"
                                        />
                                        } label="Use SSH" />
                                    {sshCredentials()}
                                </Grid>
                                <Grid container justify="center" spacing={3}>
                                    {(this.props.remoteLogin && !this.props.extRemoteLoginFlag) &&
                                        <Grid item> 
                                        <Button variant="contained" type="submit" color="primary" onClick={this.useGradle}
                                                disabled={this.props.extRemoteLoginFlag || this.props.loginProcessing}>{this.props.loginProcessing? 'Please Wait...': 'Use Gradle Nodes'}</Button>
                                        </Grid>
                                    }
                                    <Grid item>
                                            <Button variant="contained" type="submit" color="primary" onClick={this.doLogin}
                                                    disabled={isDisabled || this.props.loginProcessing}>{this.props.loginProcessing? 'Please Wait...': 'Connect'}</Button>
                                    </Grid>   
                                </Grid>  
                            </Grid>
                        </div>
                    </div>
                </div>
                </ThemeProvider>
            );
        }
    }
}
  
const mapStateToProps = state => {
    return {
        isServerAwake: state.common.isServerAwake,
        loginProcessing: state.common.loginProcessing,
        gradleNodesList: state.common.gradleNodesList,
        currentNode: state.common.currentNode,
        remoteLogin: state.common.remoteLogin,
        extRemoteLoginFlag: state.common.extRemoteLoginFlag,
        currentNodeChanged: state.common.currentNodeChanged,
        gradleNodesRunning: state.common.gradleNodesRunning
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onLoadAction:() => dispatch(ActionType.server_awake()),
      onLoginAction:(data) => dispatch(ActionType.login(data)),
      useGradleNodes:() => dispatch({type: ActionType.USE_GRADLE_NODES}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);