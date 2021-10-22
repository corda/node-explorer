import React, {useState} from 'react';
import '../styles/Network.scss';

const ListBoxWithTitle = props => {
    const [show, setShow] = useState(true);

    const toggle = () => {
        setShow(!show);
    }

    return (
      <React.Fragment>
        { props.list? 
          <div className="node-container" style={{paddingBottom: 1}}>
            <div className="node-type" onClick={toggle}>{props.title}
                <span>{show? "-" : "+"}</span>
            </div>     
            
            <div style={{display: show? 'block': 'none'}}>
                {
                  props.list.map((node, index) => {
                    return (
                      <div key={index} style={{padding: 10, margin: 5, backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                            <p style={{fontSize: 16, fontWeight: "bold", marginBottom: 5}}>{node.name}</p>
                            <div>
                              <p><strong>Public Key: </strong> {node.publicKey}</p>
                              <p><strong>Location: </strong> {node.city}, {node.country}</p>
                              <p><strong>Address: </strong> {node.address}</p>
                            </div>
                        </div>
                      )
                    })
                }
            </div>
          </div>: null
        }
      </React.Fragment>  
    )
}

export default ListBoxWithTitle;