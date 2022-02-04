import React from 'react';
import Header from './Header';
import SubNav_Chapter from './SubNav_Chapter';
import Sidebar_MERN from './Sidebar_MERN';
import WidgetMERNNode from './WidgetMERNNode'

function MERN_IntrotoNode() {
    return (
        <div className="main">
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNav_Chapter />
                <div className="dash__container">
                    <Sidebar_MERN />
                    <WidgetMERNNode />
                </div>
            </div>
        </div>
    );
}

export default MERN_IntrotoNode;
