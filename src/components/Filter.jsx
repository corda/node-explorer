import React, { Component } from 'react';
import '../styles/Vault.scss';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';

class Filter extends Component{

    state = {
        page: {
            stateType: false,
            notary: false,
            status: false,
            relevancy: false,
            party: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            if(winScroll>50){
                this.refs.filterPane.style.top= (winScroll-50) + "px";
            }else{
                this.refs.filterPane.style.top= "0px";
            }
    }

    handleStateTypeUpdate(value, event){
        this.props.handler('stateType',  value, event.target.checked);
    }

    handleStatusUpdate(value, event){
        this.props.handler('status',  value, event.target.checked);
    }

    handleRelevancyUpdate(value, event){
        this.props.handler('relevancy',  value, event.target.checked);
    }

    handleNotaryUpdate(value, event){
        this.props.handler('notary',  value, event.target.checked);
    }

    handlePartiesUpdate(value, event){
        this.props.handler('party',  value, event.target.checked);
    }
    
    render(){
        return (
            <React.Fragment>
                <div className="filter-container" ref="filterPane">
                    {this.props.filter && Object.keys(this.props.filter.stateTypes).length > 0?
                    <div className="filter-group">
                        <div className="filter-title">Contract State</div>
                        <div style={{padding: "0 10px", minHeight: 40}}>
                            <Grid container spacing={0}>
                                {
                                    this.props.filter?
                                    Object.keys(this.props.filter.stateTypes).map((key, index) => {
                                        return(
                                            <Grid key={index} item xs={12}>
                                                <FormControlLabel label={key} 
                                                    control={ <Checkbox checked={this.state.stateType} 
                                                    onChange={(event) => this.handleStateTypeUpdate(this.props.filter.stateTypes[key], event)} 
                                                    value={this.props.filter.stateTypes[key]} color="primary" size="small" />}
                                                />
                                            </Grid>
                                        )
                                    }): null
                                }
                                   
                            </Grid>
                        </div>
                    </div>:null
                    }
                    <div className="filter-group">
                        <div className="filter-title">Status</div>
                        <div style={{padding: "4px 10px", minHeight: 40}}>
                            <Grid container spacing={0}>
                                {
                                    this.props.filter?
                                    Object.keys(this.props.filter.status).map((key) => {
                                        return(
                                            <Grid item xs={6}>
                                                <FormControlLabel label={key} 
                                                    control={ <Checkbox checked={this.state.status} 
                                                    onChange={(event) => this.handleStatusUpdate(this.props.filter.status[key], event)} 
                                                    value={this.props.filter.status[key]} color="primary" size="small"/>}
                                                />
                                            </Grid>  
                                        )
                                    }):null
                                }  
                            </Grid>
                        </div>
                    </div>
                    <div className="filter-group">
                        <div className="filter-title">Relevancy Status</div>
                        <div style={{padding: "4px 10px", minHeight: 40}}>
                            <Grid container spacing={0}>
                                    {
                                        this.props.filter?
                                        Object.keys(this.props.filter.relevancy).map((key) => {
                                            return(
                                                <Grid item xs={6}>
                                                    <FormControlLabel label={key} 
                                                        control={ <Checkbox checked={this.state.relevancy} 
                                                        onChange={(event) => this.handleRelevancyUpdate(this.props.filter.relevancy[key], event)} 
                                                        value={this.props.filter.relevancy[key]}  color="primary" size="small"/>}
                                                    />
                                                </Grid> 
                                            )
                                        }):null
                                    }     
                            </Grid>
                        </div>
                    </div>
                    <div className="filter-group">
                        <div className="filter-title">Parties</div>
                        <div style={{padding: "0 10px", minHeight: 40}}>
                            <Grid container spacing={0}>
                                {
                                    this.props.filter?
                                    Object.keys(this.props.filter.parties).map((key) => {
                                        return(
                                            <Grid item xs={12}>
                                                <FormControlLabel label={this.props.filter.parties[key]} 
                                                    control={ <Checkbox checked={this.state.party} 
                                                    onChange={(event) => this.handlePartiesUpdate(this.props.filter.parties[key], event)}
                                                    value={this.props.filter.parties[key]} color="primary" size="small"/>}
                                                />
                                            </Grid>
                                        )
                                    }):null
                                }   
                            </Grid>
                        </div>
                    </div>
                    {/* <div className="filter-group">
                        <div className="filter-title">Notary</div>
                        <div style={{padding: "0 10px"}}>
                            <Grid container spacing={0}>
                                {
                                    this.props.filter?
                                    Object.keys(this.props.filter.notaries).map((key) => {
                                        return(
                                            <Grid item xs={12}>
                                                <FormControlLabel label={this.props.filter.notaries[key]} 
                                                    control={ <Checkbox checked="" onChange="" value="checkedB" color="primary" size="small"/>}
                                                />
                                            </Grid>
                                        )
                                    }):null
                                }   
                            </Grid>
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
}

export default Filter;