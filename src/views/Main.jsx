import Header from './Header'
import SubNavigation from './SubNavigation';
import Sidebar from './Sidebar'
import Widget from './Widget';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';


function Main() {
    return (

        <div className="main">
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNavigation />
                <div className="dash__container">
                    <Sidebar />
                    <Widget />
                </div>
            </div>
        </div>
    );
}

export default Main;
