import React from 'react';
import "./SidebarRow.css"

function SidebarRow(props) {
    return (

        <div className="sidebarRow">
            {props.logo}
            <h4>{props.title} ({props.score})</h4>
        </div>
    );
}

export default SidebarRow;
