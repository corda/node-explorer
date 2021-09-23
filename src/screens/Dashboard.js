import React, { Component } from "react";
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import NodeDiagnostic from '../components/NodeDiagnostic'
import '../styles/Dashboard.scss';
import { Container, Column, Row } from "@r3/r3-tooling-design-system";
import NetworkParameter from "../components/NetworkParameter";

class Dashboard extends Component{

    componentDidMount(){
        this.props.fetchNodeDiagnostics();
        this.props.fetchNetworkParamters();
    }

    render() {
        return(
            <React.Fragment>
             
                    <Row>
                        <Column item lg={6}>
                        <NodeDiagnostic data={this.props.nodeDiagnostic}/>
                        </Column>    
                        <Column item lg={6}>
                            <NetworkParameter data={this.props.networkParameter}/>
                        </Column>    
                    </Row>                   
           
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