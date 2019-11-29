import React from 'react';
import '../styles/Header.css';

const header = () => {
    return(
      <div className="Header">
          <div>
              <img src="crda-logo.svg" width="100%" alt="Corda Logo" className="Logo"/>
          </div>
      </div>
    );
}

export default header;