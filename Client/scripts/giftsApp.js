import React from 'react';
import {BrowserRouter as Router,
    Route,
    Link} from 'react-router-dom';

import Form from "./form";
import ShippingInfo from "./shippingInfo";

export default class GiftsApp extends React.Component{

    render(){
        return(
            <Router>
             <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="navbar-brand">Gifts</div>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/form">form</Link></li>
                            <li><Link to="/shippingInfo">shippingInfo</Link></li>
                        </ul>
                     </div>
                 </nav>
                    <Route path="/form" component={Form} /> 
                    <Route path="/shippingInfo" component={ShippingInfo} /> 
                </div>
            </Router>
            );
    }      
}
                
