import React, { Component } from 'react';
import '../styles/Vault.css';
import PageTitle from '../components/PageTitle';
import Filter from '../components/Filter';
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import { Grid } from '@material-ui/core';

class VaultExplorer extends Component{

    componentDidMount(){
        this.props.fetchStates({});   
    }

    renderJson = (jsonObj, lvl) => {
        return(
            Object.keys(jsonObj).filter((key) => key !== "@class").map((key) => {
                return (
                    jsonObj[key] ?
                    <div style={{marginLeft: lvl * 15, paddingBottom: lvl === 0?5:0}}>
                        {lvl === 0?
                        <span><strong>{key}: &nbsp;</strong></span>
                        :
                        <span>{key}: &nbsp;</span>
                        }

                        {typeof jsonObj[key] === 'object'?
                            this.renderJson(jsonObj[key], lvl+1)
                        :
                        jsonObj[key]+""}
                    </div>:null
                )
            }) 
        )
    }

    render() {
        return(
            <React.Fragment>
                <PageTitle value="Vault Explorer" />
                <Grid container spacing={0}>
                    <Grid item xs={3}><Filter/></Grid>
                    <Grid item xs={9}>
                        {
                            this.props.states?
                            this.props.states.map((state, idx) => {
                                return (
                                    <div className="state-wrapper">
                                        <div className="state-title">
                                            <div style={{display:"inline=block"}}>{this.props.statesMetaData?this.props.statesMetaData[idx].contractStateClassName:null}</div>
                                            <div className="tx">StateRef: {state.ref.txhash}({state.ref.index})</div>
                                        </div>
                                        <Grid container spacing={0} style={{padding:10}}>
                                            <Grid item xs={9}>
                                                <div className="state-content">
                                                    {this.renderJson(state.state.data, 0)}
                                                </div>
                                            </Grid>
                                            <Grid item xs={3}>
                                                {
                                                    this.props.statesMetaData?
                                                    <React.Fragment>
                                                        <div className="bar">
                                                            <div className={this.props.statesMetaData[idx].relevancyStatus==='RELEVANT'?'blue':'grey'}>{this.props.statesMetaData[idx].relevancyStatus}</div>
                                                            <div className={this.props.statesMetaData[idx].status==='CONSUMED'?'red':'green'}>{this.props.statesMetaData[idx].status}</div>
                                                        </div>
                                                        <div className="meta-container">
                                                            <div><span><strong>Contract: &nbsp;</strong></span> {state.state.contract}</div>
                                                            <div><span><strong>Recorded Time: &nbsp;</strong></span> {this.props.statesMetaData[idx].recordedTime}</div>
                                                            {this.props.statesMetaData[idx].consumedTime?
                                                                <div><span><strong>ConsumedTime: &nbsp;</strong></span> {this.props.statesMetaData[idx].consumedTime}</div>
                                                            :null
                                                            }
                                                            <div><span><strong>Notary: &nbsp;</strong></span> {this.props.statesMetaData[idx].notary}</div>
                                                        </div>
                                                    </React.Fragment>
                                                    :null
                                                }
                                            </Grid>
                                        </Grid>
                                    </div>
                                )
                            }): null
                        }
                    </Grid>
                </Grid>
                    
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        states: state.vault.vaultStates,
        statesMetaData: state.vault.stateMetadata
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchStates: (filters) => dispatch(ActionType.fetchStates())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VaultExplorer);
