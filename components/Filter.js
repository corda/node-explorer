import React, { Component } from 'react';
import '../styles/Vault.css';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';

class Filter extends Component{

    componentDidMount(){

        window.addEventListener('scroll', (event) => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            if(winScroll>50){
                this.refs.filterPane.style.top= (winScroll-50) + "px";
            }else{
                this.refs.filterPane.style.top= "0px";
            }
        })
    }
    
    render(){
        return (
            <React.Fragment>
                <div className="filter-container" ref="filterPane">
                    <div className="filter-group">
                        <div className="filter-title">Contract State</div>
                        <div style={{padding: "0 10px"}}>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <FormControlLabel label="Relevent" 
                                        control={ <Checkbox checked="" onChange="" value="checkedB" color="primary" size="small"/>}
                                    />
                                </Grid>  
                                <Grid item xs={12}>
                                    <FormControlLabel label="Not Relevant" 
                                        control={ <Checkbox checked="" onChange="" value="checkedB" color="primary" size="small"/>}
                                    />
                                </Grid>      
                            </Grid>
                        </div>
                    </div>
                    <div className="filter-group">
                        <div className="filter-title">Status</div>
                        <div style={{padding: "4px 10px"}}>
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <FormControlLabel label="Consumed" 
                                        control={ <Checkbox checked="" onChange="" value="checkedB" color="primary" size="small"/>}
                                    />
                                </Grid>  
                                <Grid item xs={6}>
                                    <FormControlLabel label="Unconsumed" 
                                        control={ <Checkbox checked="" onChange="" value="checkedB" color="primary" size="small"/>}
                                    />
                                </Grid>      
                            </Grid>
                        </div>
                    </div>
                    <div className="filter-group">
                        <div className="filter-title">Relevancy Status</div>
                        <div style={{padding: "4px 10px"}}>
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <FormControlLabel label="Relevent" 
                                        control={ <Checkbox checked="" onChange="" value="checkedB" color="primary" size="small"/>}
                                    />
                                </Grid>  
                                <Grid item xs={6}>
                                    <FormControlLabel label="Not Relevant" 
                                        control={ <Checkbox checked="" onChange="" value="checkedB" color="primary" size="small"/>}
                                    />
                                </Grid>      
                            </Grid>
                        </div>
                    </div>
                    <div className="filter-group">
                        <div className="filter-title">Notary</div>
                        <div style={{padding: "0 10px"}}>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <FormControlLabel label="Relevent" 
                                        control={ <Checkbox checked="" onChange="" value="checkedB" color="primary" size="small"/>}
                                    />
                                </Grid>  
                                <Grid item xs={12}>
                                    <FormControlLabel label="Not Relevant" 
                                        control={ <Checkbox checked="" onChange="" value="checkedB" color="primary" size="small"/>}
                                    />
                                </Grid>      
                            </Grid>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Filter;