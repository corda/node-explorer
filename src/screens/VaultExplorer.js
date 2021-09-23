import React, { Component } from 'react';
import '../styles/Vault.css';
import PageTitle from '../components/PageTitle';
import Filter from '../components/Filter';
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import { Grid, TablePagination } from '@material-ui/core';

class VaultExplorer extends Component{

    state = {
        filter: {
            offset: 0,
            pageSize: 10,
            stateTypes: [],
            statuses: [],
            relevancies: [],
            parties: [],
            notaries: []
        }
    }

    handleFilterUpdate = (type, value, checked) => {
        
        if(type === 'stateType'){
            this.handleStateFilters(value, checked);
        }else if(type === 'status'){
            this.handleStatusFilters(value, checked);
        }else if(type === 'relevancy'){
            this.handleRelevancyFilters(value, checked);
        }else if(type === 'party'){
            this.handlePartyFilters(value, checked);
        }
    }

    handleStateFilters = (value, checked) => {
        let list = this.state.filter.stateTypes;
        if(checked)
            list.push(value);
        else
            list = list.filter((val) => val!==value);

        this.setState({
            filter: {
                offset: this.state.filter.offset,
                pageSize: this.state.filter.pageSize,
                stateTypes: list,
                statuses: this.state.filter.statuses,
                relevancies: this.state.filter.relevancies,
                parties: this.state.filter.parties,
                notaries: this.state.filter.notaries
            }
        }, this.loadNewPage);
    }

    handleStatusFilters = (value, checked) => {
        let list = this.state.filter.statuses;
        if(checked)
            list.push(value);
        else
            list = list.filter((val) => val!==value);
                
        this.setState({
            filter: {
                offset: this.state.filter.offset,
                pageSize: this.state.filter.pageSize,
                stateTypes: this.state.filter.stateTypes,
                statuses: list,
                relevancies: this.state.filter.relevancies,
                parties: this.state.filter.parties,
                notaries: this.state.filter.notaries
            }
        }, this.loadNewPage)
    }

    handleRelevancyFilters = (value, checked) => {
        let list = this.state.filter.relevancies;
        if(checked)
            list.push(value);
        else
            list = list.filter((val) => val!==value);

        this.setState({
            filter: {
                offset: this.state.filter.offset,
                pageSize: this.state.filter.pageSize,
                stateTypes: this.state.filter.stateTypes,
                statuses: this.state.filter.statuses,
                relevancies: list,
                parties: this.state.filter.parties,
                notaries: this.state.filter.notaries
            }
        }, this.loadNewPage)
    }

    handlePartyFilters = (value, checked) => {
        let list = this.state.filter.parties;
        if(checked)
            list.push(value);
        else
            list = list.filter((val) => val!==value);

        this.setState({
            filter: {
                offset: this.state.filter.offset,
                pageSize: this.state.filter.pageSize,
                stateTypes: this.state.filter.stateTypes,
                statuses: this.state.filter.statuses,
                relevancies: this.state.filter.relevancies,
                parties: list,
                notaries: this.state.filter.notaries
            }
        }, this.loadNewPage)
    }

    handleChangePage = (event, newPage) => {
        this.setState({
            filter: {
                pageSize: 10,
                offset: newPage,
                stateTypes: this.state.filter.stateTypes,
                statuses: this.state.filter.statuses,
                relevancies: this.state.filter.relevancies,
                parties: this.state.filter.parties,
                notaries: this.state.filter.notaries
            }
        }, this.loadNewPage);
    }

    componentDidMount(){
        this.loadNewPage();
        this.props.fetchFilters();
    }

    loadNewPage = () => {
        this.props.fetchStates(this.state.filter);   
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
                <PageTitle value="The Vault" />
                <Grid container spacing={0}>
                    <Grid item xs={3}><Filter filter={this.props.filters} handler={(type, value, checked) => this.handleFilterUpdate(type, value, checked)}/></Grid>
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
                        {
                            !this.props.states || this.props.states.length === 0? 
                            <div className="empty">No States Recorded in The Vault</div>:null
                        }
                        {
                            <TablePagination style= {{padding: "0 10px", marginTop: -15}}
                                rowsPerPageOptions={[]}
                                component="div"
                                count={this.props.totalResults}
                                rowsPerPage={this.state.filter.pageSize}
                                page={this.state.filter.offset}
                                onChangePage={this.handleChangePage}
                            />
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
        statesMetaData: state.vault.stateMetadata,
        totalResults: state.vault.totalResults,
        filters: state.vault.filters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStates: (filters) => dispatch(ActionType.fetchStates(filters)),
        fetchFilters: () => dispatch(ActionType.fetchVaultFilters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VaultExplorer);
