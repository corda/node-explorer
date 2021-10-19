import React from 'react';
import '../styles/Network.scss';

const Pin = props => {
    return (
        <div className="pin" style={{top: props.top, left: props.left}}>
                    <p>{props.name}</p>
        </div>
    )
}

export default Pin;