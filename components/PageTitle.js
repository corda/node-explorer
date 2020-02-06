import React from 'react';

const pageTitle = (props) => {

    return(
        <div style={{padding: "20px 20px 10px"}}>
            <div className="page-title">
                <span>{props.value}</span>
            </div> 
        </div>    
    );
} 

export default pageTitle;