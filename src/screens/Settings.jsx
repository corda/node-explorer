import { Grid, TextField } from "@material-ui/core";
import axios from 'axios';
import React, { Component } from "react";
import { PageHeader} from 'r3-tooling-design-system'
import * as ActionType from "../store/Actions";

class Settings extends Component{

    state = {
        cordappDirectory: "",
        dateFormat: "",
        dateTimeFormat: ""
    }

    dirty = {
        cordappDirectory: false,
        dateFormat: false,
        dateTimeFormat: false
    }

    componentDidMount(){
        this.loadSettings();
    }

    loadSettings = () => {
        axios.get( ActionType.SERVER_BASE_URL + "/settings")
        .then(({data}) => {
            if(data.status){
                const settings = data.data;
                this.setState({
                    cordappDirectory: settings.cordappDirectory,
                    dateFormat: settings.dateFormat,
                    dateTimeFormat: settings.dateTimeFormat
                });
            }else{
                ActionType.errorHandler(data);
            }
        }).catch( error => {
            ActionType.errorHandler(error);
        });
    }

    handleChange = (event, type) => {
        switch(type){
            case "cordappDir":
                this.setState({cordappDirectory: event.target.value});
                this.dirty.cordappDirectory = true;
                break;
            case "dateFormat":
                this.setState({dateFormat: event.target.value});
                this.dirty.dateFormat = true;
                break;
            case "dateTimeFormat":
                this.setState({dateTimeFormat: event.target.value});
                this.dirty.dateTimeFormat = true;
                break;
            default:
                return;    
        }
    }

    handleBlur = (type) => {
        switch(type){
            case "cordappDir":
                if(this.dirty.cordappDirectory){
                    ActionType.updateSettings(this.state, 'cordappDir');
                    this.dirty.cordappDirectory = false;
                }
                break;
            case "dateFormat":
                if(this.dirty.dateFormat){
                    ActionType.updateSettings(this.state, 'dateFormat');
                    this.dirty.dateFormat = false;
                }
                break;
            case "dateTimeFormat":
                if(this.dirty.dateTimeFormat){
                    ActionType.updateSettings(this.state, 'dateTimeFormat');
                    this.dirty.dateTimeFormat = false;
                }
                break;   
            default:
                return;     
        }
    }

    render() {
        return( 
            <React.Fragment>
                  <PageHeader title="The Vault" size="small" className="custom-node-explorer-header" >
                       Settings
                    </PageHeader>
                <div style={{padding: "10px 20px"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>                        
                            <TextField label="Enter the path of your cordapps directory" fullWidth
                                value={this.state.cordappDirectory}
                                onChange={event => this.handleChange(event, 'cordappDir')} 
                                onBlur={() => this.handleBlur('cordappDir')} />
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}>
                            <TextField label="Date Format" fullWidth
                                value={this.state.dateFormat}
                                onChange={event => this.handleChange(event, 'dateFormat')} 
                                onBlur={() => this.handleBlur('dateFormat')} />
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}>
                            <TextField label="Date Time Format" fullWidth
                                value={this.state.dateTimeFormat}
                                onChange={event => this.handleChange(event, 'dateTimeFormat')} 
                                onBlur={() => this.handleBlur('dateTimeFormat')} />
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default Settings;