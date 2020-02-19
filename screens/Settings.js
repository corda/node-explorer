import { Grid, TextField } from "@material-ui/core";
import axios from 'axios';
import React, { Component } from "react";
import PageTitle from "../components/PageTitle";
import * as ActionType from "../store/Actions";

class Settings extends Component{

    state = {
        cordappDirectory: ""
    }

    dirty = {
        cordappDirectory: false
    }

    componentDidMount(){
        this.loadSettings();
    }

    loadSettings = () => {
        axios.get("http://localhost:8080/settings")
        .then(({data}) => {
            if(data.status){
                const settings = data.data;
                this.setState({
                    cordappDirectory: settings.cordappDirectory
                });
            }else{
                ActionType.errorHandler(data);
            }
        }).catch( error => {
            ActionType.errorHandler(error);
        });
    }

    handleChange = (event, type) => {
        if(type === 'cordappDir'){
            this.setState({cordappDirectory: event.target.value});
            this.dirty.cordappDirectory = true;
        }
    }

    handleBlur = (type) => {
        if(type === 'cordappDir'){
            if(this.dirty.cordappDirectory){
                ActionType.updateSettings(this.state);
                this.dirty.cordappDirectory = false;
            }
        }
    }

    render() {
        return( 
            <React.Fragment>
                <PageTitle value="Settings" />
                <div style={{padding: "10px 20px"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField label="Enter the path of your cordapps directory" fullWidth
                            value={this.state.cordappDirectory}
                            onChange={event => this.handleChange(event, 'cordappDir')} 
                            onBlur={() => this.handleBlur('cordappDir')} />
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default Settings;