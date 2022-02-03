import React from 'react';
import "./SidebarRow.css"
import ProgressBar from 'react-bootstrap/ProgressBar'

function SidebarRow(props) {
    return (

        <div>
            <div className="sidebarRow">
                {props.logo}
                <h4><a href="">{props.title}</a> ({props.score})</h4>
            </div>
        </div>



    );
}

export default SidebarRow;
