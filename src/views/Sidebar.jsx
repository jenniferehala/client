import React from 'react';
import '../views/Sidebar.css'
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (

        <div className="sidebar">
            <div className="course_title">
                <h1>Course Progress </h1>
                <h4> $ Course_Title - Python</h4>
            </div>
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/Arrays.png?1524468437" />}
                title="${chapter - Orientation}"
                score="${assignmentsdone}" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/python.png?1459493418" />}
                title="${chapter - Fundamentals}"
                score="${assignmentsdone}" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/flask.png?1459493434" />}
                title="${chapter - Flask}"
                score="${assignmentsdone}" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/mysql.png?1450147378" />}
                title="${chapter - MySQL}"
                score="${assignmentsdone}" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/Arrays.png?1524468437" />}
                title="${chapter - Flask + MySQL}"
                score="${assignmentsdone}" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/Arrays.png?1524468437" />}
                title="${chapter - AJAX v20.4}"
                score="${assignmentsdone}" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/deployment.png?1448531694" />}
                title="${chapter - Flask Deployment}"
                score="${assignmentsdone}" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/trial.png" />}
                title="${chapter - Projects}"
                score="${assignmentsdone}" />


        </div>);
}

export default Sidebar;

