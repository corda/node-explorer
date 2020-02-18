import { Button, Grid, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import '../styles/Login.css';
import * as ActionType from '../store/Actions';
import { connect } from 'react-redux';

class Login extends Component {

    state = {
      hostName: "",
      port: "",
      username: "",
      password: "",

      touched: {
        hostName: false,
        port: false,
        username: false,
        password: false
      }
    };

    handleBlur = field => evt => {
      this.setState({
        touched: { ...this.state.touched, [field]: true }
      });
    };

    validate = () => {
      return {
        hostName: this.state.hostName.length === 0,
        port: this.state.port.length === 0,
        username: this.state.username.length === 0,
        password: this.state.password.length === 0
      };
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
        this.props.onLoginAction(data);
      }
    }

    render() {

        const errors = this.validate();
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        if (!this.props.isServerAwake) {
            this.props.onLoadAction();
            return <div>Please wait, loading...</div>
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
                            <Grid container style={{marginTop: "20px"}}>
                                <Grid item xs={6}>
                                    <TextField label="Hostname" value={this.state.hostName}
                                               onChange={e => this.setState({hostName: e.target.value})}
                                               error={this.shouldMarkError("hostName")}
                                               helperText={this.shouldMarkError("hostName") ? 'Please Enter Hostname' : ''}
                                               onBlur={this.handleBlur("hostName")}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label="Port" type="number"
                                               onChange={e => this.setState({port: e.target.value})}
                                               error={this.shouldMarkError("port")}
                                               helperText={this.shouldMarkError("port") ? 'Please Enter Port Number' : ''}
                                               onBlur={this.handleBlur("port")}/>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <TextField label="Username" fullWidth
                                                   onChange={e => this.setState({username: e.target.value})}
                                                   error={this.shouldMarkError("username")}
                                                   helperText={this.shouldMarkError("username") ? 'Please Enter Username' : ''}
                                                   onBlur={this.handleBlur("username")}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Password" type="password" fullWidth
                                                   onInput={e => this.setState({password: e.target.value})}
                                                   error={this.shouldMarkError("password")}
                                                   helperText={this.shouldMarkError("password") ? 'Please Enter Password' : ''}
                                                   onBlur={this.handleBlur("password")}/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} style={{marginTop: "20px", textAlign: "right"}}>
                                    <Button variant="contained" type="submit" color="primary" onClick={this.doLogin}
                                            disabled={isDisabled}>Connect</Button>
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
        isServerAwake: state.common.isServerAwake
    }
}

const mapDispatchToProps = dispatch => {
    const data = {
      hostName: "localhost",
      port: "10006",
      username: "user1",
      password: "test",
    }
    return {
      onLoadAction:() => dispatch(ActionType.server_awake()),
      onLoginAction:(data) => dispatch(ActionType.login(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);