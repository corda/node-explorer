import { Button, FormControl, InputLabel, MenuItem, Select, Table, TableCell, TableContainer, 
    TableHead, TableRow, TextField, TableBody, TablePagination } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import '../styles/Transaction.css';

let _props = {};

class TransactionExplorer extends Component{
    state = {
        open: false,
        flowSelected: false,
        page: {
            pageSize: 10,
            offset: 0
        },
        flowInfo: {},
        selectedFlow: ""
    }

    handleClose = () => {
        this.props.loadFlowParams([]);
        this.setState({
            open: false,
            flowSelected: false
        });
    }

    handleOpen = () => {
        this.setState({
            open: true
        });
    }

    constructor(props){
        super(props);
        props.fetchFlowList();
        props.fetchTrnxList(this.state.page);
        props.fetchParties();
    }

    handleFlowSelection = (event) => {
        for(var i=0; i<this.props.registeredFlows.length;i++){
            const flow = this.props.registeredFlows[i];
            if(flow.flowName === event.target.value){
                this.props.loadFlowParams(flow.flowParams);
                break;
            }
        }
        this.setState({
            flowSelected: true,
            selectedFlow: event.target.value
        });
    }


    handleChangePage = (event, newPage) => {

        this.setState({
            page: {
                pageSize: 10,
                offset: newPage
            }
        }, this.loadNewPage);
        
    }

    loadNewPage = () => {
        this.props.fetchTrnxList(this.state.page);
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            page: {
                pageSize: event.target.value,
                offset: this.state.page.offset
            }
        }, this.loadNewPage);
    }

    prepareFlowDataToStart = () => {
        console.log("Selected Flow " +  this.state.selectedFlow);
        let _flowParams = [];
        for(var i=0; i<this.props.flowParams.length;i++){
            _flowParams.push({
                paramName: this.props.flowParams[i].paramName,
                paramType: this.props.flowParams[i].paramType,
                paramValue: this.props.flowParams[i].paramValue.value
            })
        }
        this.setState({
            flowInfo: {
                flowName: this.state.selectedFlow,
                flowParams: _flowParams
            },
            open: false
        }, () => this.props.startFlow(this.state.flowInfo));
    }

    render(){
        return(
            <div style={{padding: 20}}>
                <div className="page-title">
                    <span>Transaction Explorer</span>
                    <Button style={{float: "right"}} variant="contained" color="primary" onClick={this.handleOpen}>New Transaction</Button>
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                        >
                        <div className="paper">
                            <h3 id="simple-modal-title">Please Select a Flow to Execute</h3>
                            <div>
                                <FormControl style={{minWidth: 250}}>
                                    <InputLabel id="flow-select-label">Select A Flow to Execute</InputLabel>
                                    <Select labelId="flow-select-label" onChange={this.handleFlowSelection} autoWidth>
                                        {
                                            this.props.registeredFlows.map((flow, index) => {
                                                return(
                                                    <MenuItem key={index} value={flow.flowName}>{flow.flowName}</MenuItem>
                                                );
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                   {
                                       this.props.flowParams.map((param, index) => {
                                           return (
                                                <div key={index} style={{width: "50%", float: "left"}}>
                                                    {
                                                        // param.paramType === 'java.util.List' || param.paramType === 'java.util.Set'?
                                                        //     param.parameterizedType === 'net.corda.core.identity.Party' ? 
                                                        //     <div style={{paddingRight: index%2===0? 5:0, paddingLeft: index%2===1? 5:0}}>
                                                        //         <FormControl fullWidth>
                                                        //             <InputLabel id="flow-party-label">{param.paramName}</InputLabel>
                                                        //             <Select labelId="flow-party-label" autoWidth>
                                                        //                 {
                                                        //                     this.props.parties.map((party, index) => {
                                                        //                         return(
                                                        //                             <MenuItem key={index} value={party}>{party}</MenuItem>
                                                        //                         );
                                                        //                     })
                                                        //                 }
                                                        //             </Select>
                                                        //         </FormControl>
                                                        //         <ul className="selection">
                                                        //             <li>PartyA<span>x</span></li>
                                                        //             <li>PartyB<span>x</span></li>
                                                        //         </ul>
                                                        //     </div>
                                                        //     :
                                                        //     <div style={{paddingRight: index%2===0? 5:0, paddingLeft: index%2===1? 5:0}}>
                                                        //         <TextField label={param.paramName} fullWidth/> 
                                                        //     </div>  
                                                        // : 
                                                        <div style={{paddingRight: index%2===0? 5:0, paddingLeft: index%2===1? 5:0}}>
                                                            <TextField inputRef={ref => {param.paramValue = ref}} label={param.paramName} fullWidth/> 
                                                        </div>
                                                    }
                                                </div> 
                                                // : null
                                           )
                                       })
                                   }
                                   {
                                       this.state.flowSelected?
                                        <Button onClick={() => this.prepareFlowDataToStart()} style={{float: "right", marginTop: 10}} variant="contained" color="primary">Execute</Button>
                                       :null
                                   }
                            </div>
                        </div>
                    </Modal>
                </div>
                <div>
                    <TableContainer>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Transaction Id</TableCell>
                                    <TableCell>Inputs</TableCell>
                                    <TableCell>Outputs</TableCell>
                                    <TableCell>Commands</TableCell>
                                </TableRow>    
                            </TableHead>
                            <TableBody>
                            {
                                this.props.transactionList && this.props.transactionList.length > 0 ?
                                this.props.transactionList.map((trnx, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell style={{maxWidth: 200, fontSize: 12}}>{trnx.transactionId}</TableCell>
                                            <TableCell>{trnx.inputTypes? trnx.inputTypes.map((typeCnt, index) => {
                                                return ( <div key={index}> {typeCnt.type + "(" + typeCnt.count + ")" }</div>);
                                            }) :"-"}
                                            </TableCell>
                                            <TableCell>{trnx.outputTypes? trnx.outputTypes.map((typeCnt, index) => {
                                                return ( <div key={index}> {typeCnt.type + "(" + typeCnt.count + ")" }</div>);
                                            }) :"-"}
                                            </TableCell>
                                            <TableCell>{trnx.commands.map( command => {
                                                return (<div>{command}</div>)
                                                    }
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                                : 
                                    <TableRow>
                                        <TableCell colSpan="4">No Data Found</TableCell>
                                    </TableRow>
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        component="div"
                        count={this.props.totalRecords}
                        rowsPerPage={this.state.page.pageSize}
                        page={this.state.page.offset}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        registeredFlows: state.trnx.registeredFlows,
        flowParams: state.trnx.flowParams,
        transactionList: state.trnx.trnxList,
        totalRecords: state.trnx.trnxListPage,
        parties: state.trnx.parties
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTrnxList: (page) => dispatch(ActionType.fetchTransactions(page)),
        startFlow: (flowInfo) => dispatch(ActionType.startFlow(flowInfo)),
        fetchFlowList: () => dispatch(ActionType.fetchFlows()),
        fetchParties: () => dispatch(ActionType.fetchParties()),
        loadFlowParams: (data) => dispatch({type: ActionType.LOAD_FLOW_PARAMS, data: data}) 
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TransactionExplorer);