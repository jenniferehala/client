import React from 'react';
import Header from './Header';
import SubNav_Chapter from './SubNav_Chapter';
import SidebarSingle from './SidebarSingle'
import WidgetOriSurveys from './WidgetOriSurveys'


function Orientation_Surveys() {
    return (
        <div className="main">
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNav_Chapter />
                <div className="dash__container">
                    <SidebarSingle />
                    <WidgetOriSurveys></WidgetOriSurveys>

                </div>
            </div>
        </div>
    );
}

export default Orientation_Surveys;
