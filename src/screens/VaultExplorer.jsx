import React, { Component } from 'react';
import '../styles/Vault.scss';
import Filter from '../components/Filter';
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import { TablePagination } from '@material-ui/core';
import {Column, PageHeader, Row , DashboardItem} from 'r3-tooling-design-system'

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
                  <PageHeader title="The Vault" size="small" className="custom-node-explorer-header" >
                        The Vault
                    </PageHeader>

                    <Row>
                        <Column  lg={3}><Filter filter={this.props.filters} handler={(type, value, checked) => this.handleFilterUpdate(type, value, checked)}/></Column>
                        <Column  lg={9}>
                        <Row>
                         
                        {
                            this.props.states?
                            this.props.states.map((state, idx) => {
                                return (
                                       <Column lg={6}>
                                        <div className="vault-tile-container">
                                        <div className="tile-header  ">
                                            <div className="label">{this.props.statesMetaData?this.props.statesMetaData[idx].contractStateClassName:null}</div>
                                            <div className="label-data ">StateRef: {state.ref.txhash}({state.ref.index})</div>
                                        </div>
                                      
                                                <div className="state-content">
                                                    {this.renderJson(state.state.data, 0)}
                                                </div>
                                   
                                                {
                                                    this.props.statesMetaData?
                                                    <React.Fragment>
                                                     
                                                        <div className="meta-container">
                                                            <div><span><strong>Contract: &nbsp;</strong></span> {state.state.contract}</div>
                                                            <div><span><strong>Recorded Time: &nbsp;</strong></span> {this.props.statesMetaData[idx].recordedTime}</div>
                                                            {this.props.statesMetaData[idx].consumedTime?
                                                                <div><span><strong>ConsumedTime: &nbsp;</strong></span> {this.props.statesMetaData[idx].consumedTime}</div>
                                                            :null
                                                            }
                                                            <div><span><strong>Notary: &nbsp;</strong></span> {this.props.statesMetaData[idx].notary}</div>
                                                            
                                                        </div>
                                                           <div className="tile-footer">
                                                            <div className={`pill ${this.props.statesMetaData[idx].relevancyStatus === 'RELEVANT' ? 'blue' : 'grey'}`}>{this.props.statesMetaData[idx].relevancyStatus}</div>
                                                            <div className={`pill ${this.props.statesMetaData[idx].status==='CONSUMED'?'red':'green'}`}>{this.props.statesMetaData[idx].status}</div>
                                                        </div>
                                                    </React.Fragment>
                                                    :null
                                                }
                                   
                                    </div>
                                    </Column>
                                )
                            }): null

                        
                        }
                        
                        </Row>
                        {
                            !this.props.states || this.props.states.length === 0? 
                                 <div className="no-data-found">
                                        <DashboardItem icon="AstronautSittingOnPlanet">
                                            No States Recorded in The Vault
                                        </DashboardItem>
                                    </div>  : null
                          
                        }
                        {
                            <TablePagination style= {{padding: "0 10px", marginTop: 20}}
                                rowsPerPageOptions={[]}
                                component="div"
                                count={this.props.totalResults}
                                rowsPerPage={this.state.filter.pageSize}
                                page={this.state.filter.offset}
                                onChangePage={this.handleChangePage}
                            />
                        }
                    </Column>
                    </Row>

                    
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
