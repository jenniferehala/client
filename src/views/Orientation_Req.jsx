import React from 'react';
import Header from './Header';
import SubNav_Chapter from './SubNav_Chapter';
import SidebarSingle from './SidebarSingle';
import WidgetOriReq from './WidgetOriReq';

function Orientation_Req() {
    return (
        <div className="main">
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNav_Chapter />
                <div className="dash__container">
                    <SidebarSingle></SidebarSingle>
                    <WidgetOriReq></WidgetOriReq>

                </div>
            </div>
        </div>
    );
}

export default Orientation_Req;
