import React from 'react';
import CrdaLogo from '../assets/crda-logo.svg';

const splashScreen = () => {

    return(
        <div className="splash">
            <img src={CrdaLogo} alt="Corda Logo" width="550px" style={{marginTop: "-50px"}}></img>
            <div style={{color: "#DF0A1B", fontWeight: "bold", marginTop: 20}}>Initializing... Please Wait...</div>
        </div>    
    );
} 

export default splashScreen;