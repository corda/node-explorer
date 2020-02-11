import { Button, FormControl, InputLabel, MenuItem, Select, Table, TableCell, TableContainer, 
    TableHead, TableRow, TextField, TableBody, TablePagination, Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ForwardIcon from '@material-ui/icons/Forward';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import '../styles/Transaction.css';

class TransactionExplorer extends Component{
    state = {
        open: false,
        flowSelected: false,
        page: {
            pageSize: 10,
            offset: 0
        },
        flowInfo: {},
        selectedFlow: "",
        trnxDetail: []
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
            },
            trnxDetail: []
        }, this.loadNewPage);
        
    }

    loadNewPage = () => {
        this.props.fetchTrnxList(this.state.page);
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            page: {
                pageSize: event.target.value,
                offset: 0
            },
            trnxDetail: []
        }, this.loadNewPage);
    }

    prepareFlowDataToStart = () => {
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

    showTrnxDetails = (trnx, index) => {
        let txDetail = this.state.trnxDetail;
        txDetail[index] = !this.state.trnxDetail[index]
        this.setState({
            trnxDetail : txDetail
        });
    }

    renderJson = (jsonObj, lvl) => {
        return(
            Object.keys(jsonObj).map((key, index) => {
                return (
                    jsonObj[key] ?
                    <div key={index} style={{marginLeft: lvl * 15, paddingBottom: lvl === 0?5:0}}>
                        {lvl === 0?
                        <span><strong>{key}: &nbsp;</strong></span>
                        :
                        <span>{key}: &nbsp;</span>
                        }

                        {typeof jsonObj[key] === 'object'?
                            this.renderJson(jsonObj[key], lvl+1)
                        :
                        jsonObj[key]}
                    </div>:null
                )
            }) 
        )
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
                                    <TableCell style={{width: 40}}></TableCell>
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
                                        <React.Fragment>
                                            <TableRow key={index} style={{cursor: "pointer"}} onClick={() => this.showTrnxDetails(trnx, index)}
                                                className={this.state.trnxDetail[index]?"open":null}>
                                                <TableCell style={{width: 40}}>
                                                    {
                                                        this.state.trnxDetail[index]?
                                                        <ExpandLessIcon></ExpandLessIcon>:
                                                        <ExpandMoreIcon></ExpandMoreIcon> 
                                                    }
                                                </TableCell>
                                                <TableCell style={{maxWidth: 200, fontSize: 12}}>{trnx.transactionId}</TableCell>
                                                <TableCell>{trnx.inputTypes? trnx.inputTypes.map((typeCnt, index) => {
                                                    return ( <div key={index}> {typeCnt.type + "(" + typeCnt.count + ")" }</div>);
                                                }) :"-"}
                                                </TableCell>
                                                <TableCell>{trnx.outputTypes && trnx.outputTypes.length > 0 ? trnx.outputTypes.map((typeCnt, index) => {
                                                    return ( <div key={index}> {typeCnt.type + "(" + typeCnt.count + ")" }</div>);
                                                }) :"-"}
                                                </TableCell>
                                                <TableCell>{trnx.commands.map( command => {
                                                    return (<div>{command}</div>)
                                                        }
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                            {
                                                this.state.trnxDetail[index]?
                                                <TableRow style={{backgroundColor: "#EEEEEE"}}>
                                                    <TableCell colSpan="5">
                                                    <div style={{textAlign: "center", padding: "0 30px"}}>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={5}>
                                                                <div className="wrapper">
                                                                    <div className="wtitle">Inputs</div>
                                                                    {
                                                                        trnx.inputs?
                                                                        trnx.inputs.map((input, idx) => {
                                                                            return (
                                                                                <div className="content">
                                                                                    {this.renderJson(input, 0)}
                                                                                </div>
                                                                            )
                                                                        }):
                                                                            <div className="content stripe"></div>
                                                                    }
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={2}>
                                                                <div className="cmd-wrapper">
                                                                    <ForwardIcon style={{color: "#DE0A1B", fontSize: 120}}></ForwardIcon>
                                                                    <div style={{position: "relative", top: -15}}>
                                                                        {trnx.commands.map( command => {
                                                                            return (<div>{command}</div>)
                                                                                }
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </Grid>
                                                            <Grid item xs={5}>
                                                            <div className="wrapper">
                                                                <div className="wtitle">Outputs</div>
                                                                {
                                                                    trnx.outputs && trnx.outputs.length > 0?
                                                                    trnx.outputs.map((output, idx) => {
                                                                        return (
                                                                            <div className="content">
                                                                                {this.renderJson(output, 0)}
                                                                            </div>    
                                                                        )
                                                                    }):<div className="content stripe"></div>
                                                                }
                                                            </div>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                            <div className="wrapper" style={{marginTop: 20, minWidth: "auto", height: "auto"}}>
                                                                <div className="wtitle">Signatures</div>
                                                                <div style={{padding: "10px"}}>
                                                                    {
                                                                        trnx.signers && trnx.signers.length > 0?
                                                                        trnx.signers.map((sig, idx) => {
                                                                            return (
                                                                                <div>{sig.signature.bytes}<strong>({sig.partyName})</strong></div>
                                                                            )
                                                                        })
                                                                        :
                                                                        <div>Transaction has no signatures</div>

                                                                    }
                                                                </div>
                                                            </div>
                                                            </Grid>
                                                        </Grid>
                                                        
                                                    </div>
                                                    </TableCell>
                                                </TableRow>
                                                :""
                                            }
                                        </React.Fragment>
                                    );
                                })
                                : 
                                    <TableRow>
                                        <TableCell colSpan="5">No Data Found</TableCell>
                                    </TableRow>
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {
                    this.props.totalRecords?
                        <TablePagination
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        component="div"
                        count={this.props.totalRecords}
                        rowsPerPage={this.state.page.pageSize}
                        page={this.state.page.offset}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                        :null
                    }
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