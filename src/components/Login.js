import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import '../styles/Login.css';
import * as ActionType from '../store/actions';
import { connect } from 'react-redux';

const login = props => {

    return (
        <div style={{position: 'relative'}}>
          <img src="global-map.png" alt="Global Map" width="100%"></img>
          <div className="center-container">
            <div>
              <div>
                <img  src="crda-logo.svg" alt="Corda Logo" width="250px"></img> 
                <div className="explorer-text">Node Explorer</div>
              </div>
              <Grid container style={{marginTop: "20px"}}>
                <Grid item xs={6}>
                    <TextField label="Hostname" ></TextField>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Port" ></TextField>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField label="Username" fullWidth></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Password" type="password" fullWidth></TextField>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{marginTop: "20px", textAlign:"right"}}>
                  <Button variant="contained" color="primary" onClick={() => props.onLoginAction()}>Connect</Button>
                </Grid>
              </Grid>
            </div>
          </div>    
        </div>
    );
}
  
const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    const message = {
      hostName: 'localhost',
      port: 10006,
      username: 'user1',
      password: 'test'
    }
    return {
      onLoginAction:() => dispatch({type: ActionType.LOGIN_ACTION, message: message})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(login);