import React from 'react';
import Header from './Header';
import SubNav_Chapter from './SubNav_Chapter';
import SidebarSingle from './SidebarSingle';
import WidgetOriExam from './WidgetOriExam'

function Orientation_Exams() {
    return (
        <div className="main">
            <div className="top">
                <Header />
            </div>
            <div className="container">
                <SubNav_Chapter />
                <div className="dash__container">
                    <SidebarSingle></SidebarSingle>
                    <WidgetOriExam></WidgetOriExam>
                </div>
            </div>
        </div>
    );
}

export default Orientation_Exams;
