import React from 'react';
import Header from './Header';
import SubNav_Chapter from './SubNav_Chapter';
import SidebarSingle from './SidebarSingle';
import WidgetSingle from './WidgetSingle';

function SinglePage() {
    return (
        <div className="main">
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNav_Chapter />
                <div className="dash__container">
                    <SidebarSingle></SidebarSingle>
                    <WidgetSingle></WidgetSingle>
                </div>

            </div>

        </div>);
}

export default SinglePage;
