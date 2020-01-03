import React, { Component } from 'react';
import * as ActionType from '../store/actions';
import { connect } from 'react-redux';
import '../styles/Network.css';

let _props = {};

class CordaNetwork extends Component{
  
  constructor(props){
    super(props);
    props.onNetworkLoad();
    _props = props;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  screenHeight = 0;
  screenWidth = 0;
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.screenWidth = window.innerWidth - 120;
    this.screenHeight = this.screenWidth;
  }

  getScreenXPos(posX){
      return this.screenWidth * (posX + 180) / 360 - 5;

  }

  getScreenYPos(posY){
      return this.screenHeight * (this.screenYRelative(posY) - 
          this.screenYRelative(85.05)) / (this.screenYRelative(-85.05) - this.screenYRelative(85.05)) - 5
  }

  screenYRelative = (pos) => {
      return Math.log(Math.tan(pos/ 360 * Math.PI + Math.PI/4))
  }

  render(){
    return (
      <div style={{position: "relative", height:window.outerHeight, overflowY: "auto"}}>
        <img src="WorldMapSquare.png" alt="World Map" width="100%"></img>
        <div style={{position: "absolute", top: "0"}}>
          <div className="side-panel" style={{height:window.innerHeight - 60}}>
              { this.props.self? 
              <div className="node-container">
                  <div className="node-type" onClick={()=> this.props.toggleMyIdentity()}>
                    My Identity
                    <span>{this.props.showMyIdentity? "-" : "+"}</span>
                  </div>
                  <div style={{padding: 10, display: this.props.showMyIdentity? 'block': 'none'}}>
                      <p style={{fontSize: 16, fontWeight: "bold", marginBottom: 5}}>{this.props.self.name}</p>
                      <div>
                        <p><strong>Public Key:</strong> {this.props.self.publicKey}</p>
                        <p><strong>Location: </strong> {this.props.self.city}, {this.props.self.country}</p>
                        <p><strong>Address:</strong> {this.props.self.address}</p>
                      </div>
                  </div>
              </div> : null
              }
              {
                  this.props.notaries ? 
                    <div className="node-container" style={{paddingBottom: 1}}>
                        <div className="node-type" onClick={()=> this.props.toggleNoraties()}>
                          Notaries
                          <span>{this.props.showNotaries? "-" : "+"}</span>
                        </div>     
                  <div style={{display: this.props.showNotaries? 'block': 'none'}}>
                  {
                  this.props.notaries.map((node, index) => {
                    return (
                      <div key={index} style={{padding: 10, margin: 5, backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                            <p style={{fontSize: 16, fontWeight: "bold", marginBottom: 5}}>{node.name}</p>
                            <div>
                              <p><strong>Public Key:</strong> {node.publicKey}</p>
                              <p><strong>Location: </strong> {node.city}, {node.country}</p>
                              <p><strong>Address:</strong> {node.address}</p>
                            </div>
                        </div>
                      )
                    })
                  }
                  </div>
                  </div> : null
              }
              {
                  this.props.peers ? 
                      <div className="node-container" style={{paddingBottom: 1}}>
                          <div className="node-type" onClick={()=> this.props.toggleMyPeers()}>
                            Peers
                            <span>{this.props.showPeers? "-" : "+"}</span>
                          </div>
                        <div style={{display: this.props.showPeers? 'block': 'none'}}>
                    {
                      this.props.peers.map((node, index) => {
                        return (
                          <div key={index} style={{padding: 10, margin: 5, backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                                <p style={{fontSize: 16, fontWeight: "bold", marginBottom: 5}}>{node.name}</p>
                                <div>
                                  <p><strong>Public Key:</strong> {node.publicKey}</p>
                                  <p><strong>Location: </strong> {node.city}, {node.country}</p>
                                  <p><strong>Address:</strong> {node.address}</p>
                                </div>
                          </div>
                        )
                      })
                    }
                      </div>
                      </div> : null
              }
              
          </div>
        </div>
        {
          this.props.self? 
          <div className="pin" style={{top: this.getScreenYPos(this.props.self.lat), left: this.getScreenXPos(this.props.self.lng)}}>
                    <p>{this.props.self.name}</p>
          </div>
          : null
        }
        {   
            this.props.notaries?
            this.props.notaries.map((node, index) => {
              return  <div key={index} className="pin" style={{top: this.getScreenYPos(node.lat), left: this.getScreenXPos(node.lng)}}>
                        <p>{node.name}</p>
                      </div>
            })
            : null
        }
        {
            this.props.peers?
            this.props.peers.map((node, index) => {
              return  <div key={index} className="pin" style={{top: this.getScreenYPos(node.lat), left: this.getScreenXPos(node.lng)}}>
                        <p>{node.name}</p>
                      </div>
            })
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      self: state.netWorkMap.self,
      notaries: state.netWorkMap.notaries,
      peers: state.netWorkMap.peers,
      showMyIdentity: state.showMyIdentity,
      showNotaries: state.showNotaries,
      showPeers: state.showPeers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNetworkLoad: () => dispatch({type: ActionType.FETCH_NETWORK}),
    loadNetworkMap: (data) => dispatch({type: ActionType.LOAD_NETWORK, data: data}),
    toggleMyIdentity: () => dispatch({type: ActionType.TOGGLE_MYIDENTITY}),
    toggleNoraties: () => dispatch({type: ActionType.TOGGLE_NOTARIES}),
    toggleMyPeers: () => dispatch({type: ActionType.TOGGLE_PEERS})
  }
}

export const loadNetworkMap = (data) => {
  _props.loadNetworkMap(data);
}

export default connect(mapStateToProps, mapDispatchToProps)(CordaNetwork);