import React, { Component } from 'react';
import '../styles/Login.scss';
import * as ActionType from '../store/Actions';
import { connect } from 'react-redux';
import SplashScreen from '../components/Splash';
import { Container, Column, Row, Button, TextInput, PasswordInput, IconCustom } from 'r3-tooling-design-system'

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
                return (
        <React.Fragment>
                        {/*<Grid item xs={6}>*/}
                        {/*    <TextInput label="ssh Hostname" value={this.state.ssh.hostName}*/}
                        {/*               onChange={e => this.setState({ssh: {...this.state.ssh, hostName: e.target.value}})}*/}
                        {/*               error={this.shouldMarkError("sshHostName")}*/}
                        {/*               helperText={this.shouldMarkError("sshHostName") ? 'Please Enter ssh Hostname' : ''}*/}
                        {/*               onBlur={this.handleBlur("sshHostName")}/>*/}
                            {/*</Grid>*/}
                        <Row>
                        <Column lg={4}>
                            <TextInput label="SSH Port" type="number" value={this.state.ssh.port}
                                       onChange={e => this.setState({ssh: {...this.state.ssh, port: e.target.value}})}
                                       errorMessage={this.shouldMarkError("sshPort")}
                                       helpText={this.shouldMarkError("sshPort") ? 'Please Enter SSH Port Number' : ''}
                                       onBlur={this.handleBlur("sshPort")}/>
                        </Column>                    
                            <Column lg={8}>
                                <TextInput label="SSH Username" value={this.state.ssh.username}
                                           onChange={e => this.setState({ssh: {...this.state.ssh, username: e.target.value}})}
                                           errorMessage={this.shouldMarkError("sshUsername")}
                                           helpText={this.shouldMarkError("sshUsername") ? 'Please Enter SSH Username' : ''}
                                           onBlur={this.handleBlur("sshUsername")}/>
                            </Column>
                            <Column lg={12}>
                                <PasswordInput label="SSH Password" type="password" 
                                        value={this.state.ssh.password}
                                           onChange={e => this.setState({ssh: {...this.state.ssh, password: e.target.value}})}
                                           errorMessage={this.shouldMarkError("sshPassword")}
                                           helpText={this.shouldMarkError("sshPassword") ? 'Please Enter SSH Password' : ''}
                                           onBlur={this.handleBlur("sshPassword")}/>
                            </Column>
                        </Row>
            </React.Fragment>
                )
            
        }

        if (!this.props.isServerAwake) {
            this.props.onLoadAction();
            return (<SplashScreen/>)
        } else {

            return (
                <Container fluid className="login-view-container">
                    <Row className="max-height no-gap">
                        <Column md={6} lg={5} className="max-height container-left">
                            <div className="center-container">
                                <div className="logo-container">
                                    <img src="crda-logo.svg" alt="Corda Logo" width="250px"></img>
                                    <div className="hidden-logo-text">
                                            <div className="screen-text">
                                            <h2>Node Explorer</h2>
                                            <h4>Interact with your Nodes, Cordapps and Vault.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-title">
                                     <h2>Login</h2>
                                </div>
                                    <div className="login-form-container">
                                    <Row>
                                        <Column lg={8}>
                                            <TextInput label="Node Hostname" value={this.state.hostName}
                                                onChange={e => this.setState({hostName: e.target.value})}
                                                errorMessage={this.shouldMarkError("hostName")}
                                                helpText={this.shouldMarkError("hostName") ? 'Please Enter Node Hostname' : ''}
                                                onBlur={this.handleBlur("hostName")}/>
                                        </Column>
                                        <Column lg={4}>
                                            <TextInput label="RPC Port" type="number" value={this.state.port}
                                                onChange={e => this.setState({port: e.target.value})}
                                                errorMessage={this.shouldMarkError("port")}
                                                helpText={this.shouldMarkError("port") ? 'Please Enter Node Port Number' : ''}
                                                onBlur={this.handleBlur("port")}/>                                   
                                        </Column>                               
                                        <Column lg={12}>
                                            <TextInput label="RPC Username" 
                                                value={this.state.username}
                                                onChange={e => this.setState({username: e.target.value})}
                                                errorMessage={this.shouldMarkError("username")}
                                                helpText={this.shouldMarkError("username") ? 'Please Enter RPC Username' : ''}
                                                />
                                        </Column>
                                        <Column lg={12}>
                                            <PasswordInput label="RPC Password" 
                                                value={this.state.password}
                                                onChange={e => this.setState({password: e.target.value})}
                                                errorMessage={this.shouldMarkError("password")}
                                                helpText={this.shouldMarkError("password") ? 'Please Enter RPC Password' : ''}
                                                />
                                        </Column>
                                    </Row>
                                    <Row>
                                        <Column lg={12}>
                                            <p className="separator-tag">or Login with ssh</p>
                                        </Column>
                                    </Row>
                                    
                                    {sshCredentials()}
                                    <Row className="cta-container">
                                        <Column lg={12}>
                                             <Button variant="primary" width="100%" type="submit" onClick={this.doLogin}
                                                    disabled={isDisabled || this.props.loginProcessing}>{this.props.loginProcessing? 'Please Wait...': 'Connect'}</Button>
                                        </Column>
                                    </Row>
                                </div>      
                            </div>      
                        </Column>
                        <Column md={6} lg={7} className="container-right">
                            <div className="blocks">
                                <div className="block-right">
                                    <h4>Track your CorDapps</h4>
                                    <span className="icon-cordapp">
                                </span>
                                </div>
                                <div className="block-left">
                                    <h4>Manage your Transactions</h4>
                                    <span className="icon-holder">
                                        <IconCustom icon="SwapHorizontal" />
                                </span>
                                </div>
                                <div className="screen-text">
                                <h2>Node Explorer</h2>
                                <h4>Interact with your Nodes, Cordapps and Vault.</h4>
                            </div>
                            </div>
                           
                            
                        </Column>                                    
                    </Row>
                </Container>             
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