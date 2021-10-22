import React, { Component } from "react";
import { connect } from 'react-redux';
import * as ActionType from '../store/Actions';
import NodeDiagnostic from '../components/NodeDiagnostic'
import '../styles/Dashboard.scss';
import { Column, Row, PageHeader } from "r3-tooling-design-system";
import NetworkParameter from "../components/NetworkParameter";

class Dashboard extends Component{

    componentDidMount(){
        this.props.fetchNodeDiagnostics();
        this.props.fetchNetworkParamters();
    }

    render() {
        return(
            <React.Fragment>
                <PageHeader title="Dashboard" size="small" className="custom-node-explorer-header" >
             Dashboard
              </PageHeader>
                    <Row>
                        <Column lg={8}>
                        <NodeDiagnostic data={this.props.nodeDiagnostic}/>
                        </Column>    
                        <Column lg={4} className="max-height">
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