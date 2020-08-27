import {Button, Grid, TextField, Checkbox, FormControlLabel} from '@material-ui/core';
import React, { Component } from 'react';
import '../styles/Login.css';
import * as ActionType from '../store/Actions';
import { connect } from 'react-redux';
import SplashScreen from '../components/Splash';

class Login extends Component {

    state = {
      hostName: "",
      port: "",
      username: "",
      password: "",

        ssh: {
            //hostName: "",
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
          //sshHostName: false,
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
                //sshHostName: this.state.ssh.hostName.length === 0,
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
                    <div>
                    <Grid container>
                        {/*<Grid item xs={6}>*/}
                        {/*    <TextField label="ssh Hostname" value={this.state.ssh.hostName}*/}
                        {/*               onChange={e => this.setState({ssh: {...this.state.ssh, hostName: e.target.value}})}*/}
                        {/*               error={this.shouldMarkError("sshHostName")}*/}
                        {/*               helperText={this.shouldMarkError("sshHostName") ? 'Please Enter ssh Hostname' : ''}*/}
                        {/*               onBlur={this.handleBlur("sshHostName")}/>*/}
                        {/*</Grid>*/}
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
                    </div>
                )
            }
        }

        if (!this.props.isServerAwake) {
            this.props.onLoadAction();
            return (<SplashScreen/>)
        } else {

            return (
                <div style={{position: 'relative'}}>
                    <img src="global-map.png" alt="Global Map" width="100%"></img>
                    <div className="center-container">
                        <div>
                            <div>
                                <img src="crda-logo.svg" alt="Corda Logo" width="250px"></img>
                                <div className="explorer-text">Node Explorer</div>
                            </div>
                            <Grid container style={{marginTop: "20px"}} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField label="Node Hostname" value={this.state.hostName}
                                               onChange={e => this.setState({hostName: e.target.value})}
                                               error={this.shouldMarkError("hostName")}
                                               helperText={this.shouldMarkError("hostName") ? 'Please Enter Node Hostname' : ''}
                                               onBlur={this.handleBlur("hostName")}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label="RPC Port" type="number"
                                               onChange={e => this.setState({port: e.target.value})}
                                               error={this.shouldMarkError("port")}
                                               helperText={this.shouldMarkError("port") ? 'Please Enter Node Port Number' : ''}
                                               onBlur={this.handleBlur("port")}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="RPC Username" fullWidth
                                                onChange={e => this.setState({username: e.target.value})}
                                                error={this.shouldMarkError("username")}
                                                helperText={this.shouldMarkError("username") ? 'Please Enter RPC Username' : ''}
                                                onBlur={this.handleBlur("username")}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="RPC Password" type="password" fullWidth
                                                onInput={e => this.setState({password: e.target.value})}
                                                error={this.shouldMarkError("password")}
                                                helperText={this.shouldMarkError("password") ? 'Please Enter RPC Password' : ''}
                                                onBlur={this.handleBlur("password")}/>
                                </Grid>
                                <Grid item xs={12} style={{marginTop: "5px", textAlign: "left"}}>
                                    <FormControlLabel control={
                                        <Checkbox
                                            checked={this.sshChecked}
                                            onChange={e => this.setState({sshChecked: e.target.checked})}
                                            value="primary"
                                        />
                                    } label={"Use SSH"} />
                                    {sshCredentials()}
                                </Grid>
                                <Grid item xs={12} style={{marginTop: "20px", textAlign: "right"}}>
                                    <Button variant="contained" type="submit" color="primary" onClick={this.doLogin}
                                            disabled={isDisabled || this.props.loginProcessing}>{this.props.loginProcessing? 'Please Wait...': 'Connect'}</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
  
const mapStateToProps = state => {
    return {
        isServerAwake: state.common.isServerAwake,
        loginProcessing: state.common.loginProcessing
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onLoadAction:() => dispatch(ActionType.server_awake()),
      onLoginAction:(data) => dispatch(ActionType.login(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);