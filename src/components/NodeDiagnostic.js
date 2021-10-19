import React from 'react';
import { Card } from 'r3-tooling-design-system'
import Tile from './Tile';
const NodeDiagnostic = (props) => {

    return (
        <React.Fragment>

            <Card title="Node Information">
                 <div style={{padding: 10, position: "relative"}}>
                    <h2><strong>{props.data.vendor}</strong></h2>
                        <div>
                            Version: <strong>{props.data.version}</strong> |
                            Platform Version: <strong>{props.data.platformVersion}</strong>
                        </div>
                        <div style={{position: "absolute", top: 10, right: 10}}>Installed Cordapps: <strong>{props.data.cordapps? props.data.cordapps.length:''}</strong></div>
                </div>
            </Card>
            <Card title="Installed CorDapps" style={{marginTop: 10}}>
                  <div className="tile-block" style={{padding: 10, position: "relative"}}>
                {
                    props.data?
                    <React.Fragment>
                            {
                                props.data.cordapps?
                                props.data.cordapps.map((cordapp, index) => {
                                    return (

                                        <Tile title={cordapp.shortName} footer={cordapp.licence} key={index}>
                                             <div key={index} className="appInfo-wrapper">
                                                    <div className="" style={{marginRight: index%2===0?5:0, marginLeft: index%2===0?0:5}}>
                                                        <div><span>Version: </span> {cordapp.version}</div>
                                                        <div><span>Type: </span> {cordapp.type}</div>
                                                        <div><span>Minimum Platform Version: </span> {cordapp.minimumPlatformVersion}</div>
                                                        <div><span>Target Platform Version: </span> {cordapp.targetPlatformVersion}</div>
                                                        <div><span>File: </span> {cordapp.name}.jar</div>
                                                        <div><span>Vendor: </span> {cordapp.vendor}</div>
                                                    </div>
                                                </div>
                                        </Tile>

                                               
                                    )
                                }): <div className="no-data">No Installed CorDapps</div>
                            }
                    </React.Fragment>:<div className="no-data" style={{height: 280}}>Corda Version 4.3 and higher is required for this widget</div>
                }
                
            </div>
            </Card>
        </React.Fragment>
    );
} 

export default NodeDiagnostic;