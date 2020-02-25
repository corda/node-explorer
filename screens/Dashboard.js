import React, { Component } from "react";
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import NodeDiagnostic from '../components/NodeDiagnostic'
import '../styles/Dashboard.css';
import { Grid } from "@material-ui/core";
import NetworkParameter from "../components/NetworkParameter";

class Dashboard extends Component{

    componentDidMount(){
        this.props.fetchNodeDiagnostics();
        this.props.fetchNetworkParamters();
    }

    render() {
        return(
            <React.Fragment>
                <Grid container>
                    <Grid item xs={6}>
                        <NodeDiagnostic data={this.props.nodeDiagnostic}/>
                    </Grid>    
                    <Grid item xs={6}>
                        <NetworkParameter data={this.props.networkParameter}/>
                    </Grid>    
                </Grid>    
            </React.Fragment>
        );
    }    
}

const mapStateToProps = state => {
    return {
        nodeDiagnostic: state.dashboard.nodeDiagnostic,
        networkParameter: state.dashboard.networkParameter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNodeDiagnostics: () => dispatch(ActionType.fetchNodeDiagnostic()),
        fetchNetworkParamters: () => dispatch(ActionType.fetchNetworkParameter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);