import React from 'react';
import Header from './Header';
import SubNav_Chapter from './SubNav_Chapter';
import Sidebar_MERN from './Sidebar_MERN';
import WidgetMERNOOP from './WidgetMERNOOP';

function MERN_OOP() {
    return (
        <div className="main">
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNav_Chapter />
                <div className="dash__container">
                    <Sidebar_MERN />
                    <WidgetMERNOOP></WidgetMERNOOP>
                </div>
            </div>
        </div>

    );
}

export default MERN_OOP;
