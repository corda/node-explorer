import { Button, FormControl, InputLabel, MenuItem, Select, Table, TableCell, TableContainer, TableHead, TableRow, TextField, TableBody } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionType from '../store/actions';
import '../styles/Transaction.css';

let _props = {};

class TransactionExplorer extends Component{
    state = {
        open: false,
        flowSelected: false
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
        _props = props;
        props.fetchFlowList();
        props.fetchTrnxList();
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
            flowSelected: true
        });
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
                                    <Select labelId="flow-select-label" id="demo-simple-select" onChange={this.handleFlowSelection} autoWidth>
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
                                                // param.paramType === "java.lang.String" ? 
                                                <div key={index} style={{width: "50%", float: "left"}}>
                                                    <div style={{paddingRight: index%2===0? 5:0, paddingLeft: index%2===1? 5:0}}>
                                                        <TextField label={param.paramName} fullWidth/> 
                                                    </div>
                                                </div> 
                                                // : null
                                           )
                                       })
                                   }
                                   {
                                       this.state.flowSelected?
                                        <Button style={{float: "right", marginTop: 10}} variant="contained" color="primary">Execute</Button>
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
                                this.props.transactionList ?
                                this.props.transactionList.map((trnx, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell style={{maxWidth: 200, fontSize: 12}}>{trnx.transactionId}</TableCell>
                                            <TableCell>{trnx.inputTypes? trnx.inputTypes.map((typeCnt) => {
                                                return ( <div> {typeCnt.type + "(" + typeCnt.count + ")" }</div>);
                                            }) :"-"}
                                            </TableCell>
                                            <TableCell>{trnx.outputTypes? trnx.outputTypes.map((typeCnt) => {
                                                return ( <div> {typeCnt.type + "(" + typeCnt.count + ")" }</div>);
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
                                :""
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}

export const loadFlowList = (data) => {
    console.log("Flow from server:"+ JSON.stringify(data.flowInfoList));
    _props.loadFlowList(data.flowInfoList);
}

export const loadTrnxList = (data) => {
    console.log("Trnxs from server:"+ JSON.stringify(data.transactionData));
    _props.loadTrnxList(data.transactionData);
}

const mapStateToProps = state => {
    return {
        registeredFlows: state.registeredFlows,
        flowParams: state.flowParams,
        transactionList: state.trnxList
    }
}

const mapDispatchToProps = dispatch => {
    const page = {
        pageSize: 10,
        offset: 0
    }
    return {
        fetchTrnxList: () => dispatch({type: ActionType.FETCH_TRNXS, data: page}),
        loadTrnxList: (data) => dispatch({type: ActionType.LOAD_TRNXS, data: data}),
        fetchFlowList: () => dispatch({type: ActionType.FETCH_FLOWS}),
        loadFlowList: (data) => dispatch({type: ActionType.LOAD_FLOWS, data: data}),
        loadFlowParams: (data) => dispatch({type: ActionType.LOAD_FLOW_PARAMS, data: data}) 
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TransactionExplorer);