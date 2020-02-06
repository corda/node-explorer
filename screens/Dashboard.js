import React, { Component } from "react";
import PageTitle from "../components/PageTitle";

class Dashboard extends Component{

    render() {
        return(
            <React.Fragment>
                <PageTitle value="Dashboard" />
            </React.Fragment>
        );
    }    
}

export default Dashboard;