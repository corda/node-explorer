import * as ActionType from '../Actions';

const initialState = {
    isServerAwake: false,
    isLoggedIn: false,
    currentPage: 1,
    loginProcessing: false,
    spinner: false,
    profile: {},
    gradleNodesList: {},
    currentNode: {},
    currentCorDappDir: "",
    currentNodeChanged: false,
    remoteLogin: false,
    extRemoteLoginFlag: false,
    extRemoteLoginFlagBurned: false,
    gradleNodesRunning: false
};

const getNodeData = () => {
    const nodeDefaults = document.getElementById('nodeDefaults').innerHTML;
    const nodeList = document.getElementById('nodeList').innerHTML;

    // deployNodes needs to exist and be found in project build.gradle
    if (nodeDefaults != 'undefined' && nodeList != '[]') {
      const defaultSettings = JSON.parse(nodeDefaults);
      const allNodes = JSON.parse(nodeList);

      var connections = {}

      allNodes.forEach(function(node) {
          if(!node.notary){
              connections[node.name] = {
                  host: node.rpcSettings.address,
                  cordappDir: node.cordappDir   
              }
              if(node.rpcUsers){
                  connections[node.name].username = node.rpcUsers.user;
                  connections[node.name].password = node.rpcUsers.password;
                  
              }else{
                  connections[node.name].username = defaultSettings.rpcUsers.user;
                  connections[node.name].password = defaultSettings.rpcUsers.password;
              }
          }
      });
      return connections;
    }
}

const reducer = (state = initialState, action) => {

    
    const settings = {
        cordappDirectory: state.currentCorDappDir,
        dateFormat: "",
        dateTimeFormat: ""
    }

    switch ( action.type ) {
       
        case ActionType.UPDATE_CURRENT_NODE:
            console.log(state)
            return {
                ...state,
                isLoggedIn: false,
                remoteLogin: false,
                currentNode: action.payload,
                currentNodeChanged: true
            }
        case ActionType.USE_GRADLE_NODES:
            ActionType.updateSettings(settings, 'cordappDir');  
            // return {
            //     ...state,
            //     isLoggedIn: true,
            //     remoteLogin: false
            // }
            return {
                ...state,
                isLoggedIn: false,
                remoteLogin: false,
                currentNodeChanged: true,
                gradleNodesRunning: true
            }
        case ActionType.UPDATE_GRADLE_NODES_LIST:
            const nodes = getNodeData();
            const gradleNodesRunning = JSON.parse(document.getElementById('gradleNodesRunning').innerHTML);
            console.log("gradle nodes running " + gradleNodesRunning);
            if (nodes != undefined) {
                const currentNode = nodes[Object.keys(nodes)[0]];
                const hostNameSplit = currentNode.host.split(":");
                const data = {
                    hostName: hostNameSplit[0],
                    port: hostNameSplit[1],
                    username: currentNode.username,
                    password: currentNode.password
                }
                return {
                    ...state,
                    gradleNodesList: {...nodes},
                    currentNode: data,
                    currentNodeChanged: true,
                    currentCorDappDir: currentNode.cordappDir,
                    gradleNodesRunning: gradleNodesRunning
                }
            } else return state;
        case ActionType.SERVER_AWAKE:
            return {
                ...state,
                isServerAwake: true
            }
        case ActionType.LOGIN_SUCCESS:
            const extRemoteLoginFlag = !state.extRemoteLoginFlagBurned ? (document.getElementById('remotelogin').innerHTML === 'true') : state.extRemoteLoginFlag;
            const remoteLogin = extRemoteLoginFlag ? extRemoteLoginFlag : state.remoteLogin;
            console.log(remoteLogin);
            ActionType.updateSettings(settings, 'cordappDir');   
            return {
                ...state,
                isLoggedIn: true,
                profile: action.payload,
                loginProcessing: false,
                currentNodeChanged: false,
                remoteLogin: remoteLogin,
                extRemoteLoginFlag: extRemoteLoginFlag,
                extRemoteLoginFlagBurned: true
            }
        case ActionType.CHANGE_SCREEN:
            // sessionStorage.setItem('currentPage', action.page);    
            return {
                ...state,
                currentPage: action.page
            }
        case ActionType.LOAD_APP_STATE: 
            // const isLoggedIn = sessionStorage.getItem("isLoggedIn");
            // const currentPage = Number(sessionStorage.getItem("currentPage"));
            // const profile =  JSON.parse(sessionStorage.getItem('profile'));   
            return{
                ...state
                // isLoggedIn: isLoggedIn,
                // currentPage: currentPage,
                // profile: profile
            }
        case ActionType.LOGOUT: 
            return{
                ...state,
                isLoggedIn: false,
                currentPage: 1,
                remoteLogin: true
            }    
        case ActionType.SET_LOGIN_PROCESSING_FLAG:
            return{
                ...state,
                loginProcessing: action.data
            }
        case ActionType.SHOW_HIDE_SPINNER:
            return{
                ...state,
                spinner: action.data
            }     
        default:
            return state;    
    }
}

export default reducer;