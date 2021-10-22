import React from 'react';
import { Card, Column, Row } from 'r3-tooling-design-system'
import DonutChart from './DonutChart';

const NetworkParameter = (props) => {

    return(
        <Card title={"Network Parameters"} className="max-height">
            <Row>
                <Column lg={6}>
                    <DonutChart title="Minumum Platform Version" value={props.data.minimumPlatformVersion} singleColor="#df0a1b" valueLabel="v"/>
                </Column>
                  <Column lg={6}>
                    <DonutChart title="Max Transaction Size" value={props.data.maxTransactionSize/(1024 * 1024)} singleColor="#df0a1b" valueLabel="MB"/>
                </Column>
            
            </Row>
            <div style={{padding: 10, position: "relative"}}>

                <div className="item"> Last Modified: <strong>{props.data.modifiedTime}</strong></div>
                <div style={{position: "absolute", top: 10, right: 10}}>Version: <strong>{props.data.epoch}</strong></div>
                <div style={{marginTop: 10}}>
                    <div><strong>Notaries</strong></div>
                    {   
                        props.data.notaries && props.data.notaries.length > 0?
                        props.data.notaries.map((notary, index) => {
                            return (
                                        <div key={index} className="appInfo-wrapper">
                                            <div className="appInfo" style={{marginRight: index%2===0?5:0, marginLeft: index%2===0?0:5, marginTop: 5}}>
                                                <div><span>Name: </span>{notary.identity}</div>
                                                <div><span>Type: </span> {notary.validating?'Validating':'Non-Validating'}</div>
                                            </div>
                                        </div>
                            )
                        }): <div style={{padding: "10px 0"}}>No Notaries Found</div>
                    }
                </div>

                <div style={{marginTop: 10}}>
                    <div><strong>Whitelisted Contracts</strong></div>
                    {   
                        props.data.whitelistedContractImplementations && props.data.whitelistedContractImplementations.length > 0?
                        Object.keys(props.data.whitelistedContractImplementations).map((contract, index) => {
                            return (
                                        <div key={index} className="appInfo-wrapper" style={{width: "100%"}}>
                                            <div className="appInfo" style={{marginTop: 5}}>
                                                <div><span>Contract: </span>{contract}</div>
                                                <div><span>Hash: </span> {props.data.whitelistedContractImplementations[contract]}</div>
                                            </div>
                                        </div>
                            )
                        }): <div style={{padding: "10px 0"}}>No Whitelisted Contracts Found</div>
                    }
                </div>
            </div>
        </Card>    
    );
} 

export default NetworkParameter;