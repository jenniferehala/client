import React from 'react';
import Header from './Header';
import SubNav_Chapter from './SubNav_Chapter';
import SidebarSingle from './SidebarSingle';
import WidgetOriAh from './WidgetOriAh';

function Orientation_AH() {
    return (
        <div className="main">
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNav_Chapter />
                <div className="dash__container">
                    <SidebarSingle />
                    <WidgetOriAh />
                </div>
            </div>
        </div>
    )
        ;
}

export default Orientation_AH;
