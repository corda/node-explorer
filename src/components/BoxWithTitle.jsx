import React, {useState} from 'react';
import '../styles/Network.scss';

const BoxWithTitle = props => {
    const [show, setShow] = useState(true);

    const toggle = () => {
        setShow(!show);
    }

    return (
        <React.Fragment>
        { props.node? 
            <div className="node-container">
                <div className="node-type" onClick={toggle}>My Identity<span>{show? "-" : "+"}</span></div>
                <div style={{padding: 10, display: show? 'block': 'none'}}>
                    <p style={{fontSize: 16, fontWeight: "bold", marginBottom: 5}}>{props.node.name}</p>
                    <div>
                    <p><strong>Public Key:</strong> {props.node.publicKey}</p>
                    <p><strong>Location: </strong> {props.node.city}, {props.node.country}</p>
                    <p><strong>Address:</strong> {props.node.address}</p>
                    </div>
                </div>
            </div> : null
        }
        </React.Fragment>
    )
}

export default BoxWithTitle;