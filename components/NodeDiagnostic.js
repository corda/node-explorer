import React from 'react';

const NodeDiagnostic = (props) => {

    return(
        <div className="widget">
            <div className="title">Node Information</div>
            <div style={{padding: 10, position: "relative"}}>
                {
                    props.data?
                    <React.Fragment>
                        <div><strong>{props.data.vendor}</strong></div>
                        <div>
                            Version: <strong>{props.data.version}</strong> |
                            Platform Version: <strong>{props.data.platformVersion}</strong>
                        </div>
                        <div style={{position: "absolute", top: 10, right: 10}}>Installed Cordapps: <strong>{props.data.cordapps? props.data.cordapps.length:''}</strong></div>
                        <div style={{marginTop: 10}}>
                            <div><strong>Installed CorDapps</strong></div>
                            {
                                props.data.cordapps?
                                props.data.cordapps.map((cordapp, index) => {
                                    return (
                                                <div key={index} className="appInfo-wrapper">
                                                    <div className="appInfo" style={{marginRight: index%2===0?5:0, marginLeft: index%2===0?0:5}}>
                                                        <div className="app-title">{cordapp.shortName}</div>
                                                        <div><span>Version: </span> {cordapp.version}</div>
                                                        <div><span>Type: </span> {cordapp.type}</div>
                                                        <div><span>Minimum Platform Version: </span> {cordapp.minimumPlatformVersion}</div>
                                                        <div><span>Target Platform Version: </span> {cordapp.targetPlatformVersion}</div>
                                                        <div><span>File: </span> {cordapp.name}.jar</div>
                                                        <div><span>Vendor: </span> {cordapp.vendor}</div>
                                                        <div><span>License: </span> {cordapp.licence}</div>
                                                    </div>
                                                </div>
                                    )
                                }): <div className="no-data">No Installed CorDapps</div>
                            }
                        </div>
                    </React.Fragment>:<div className="no-data" style={{height: 280}}>Corda Version 4.3 and higher is required for this widget</div>
                }
                
            </div>
        </div>    
    );
} 

export default NodeDiagnostic;