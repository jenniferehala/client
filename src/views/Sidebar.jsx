import React from 'react';
import '../views/Sidebar.css'
import SidebarRow from './SidebarRow';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import 'bootstrap/dist/css/bootstrap.css'

function Sidebar() {
    return (

        <div className="sidebar">
            <div className="course_title">
                <p>Course Progress </p>
                <div className='dropdown' data-toggle="dropdown" >
                    <ArrowRightIcon className="arrow_icon"/>
                    <p>Python</p>
                </div>
            </div>
            <div className="progress_label">
                <span className="boxlabel_left"></span>
                <div className="label_left">
                    On-Time Progress
                </div>
                <span className="boxlabel_right" ></span>
                <div className="label_right">
                    Out-of-schedule Progress
                </div>

            </div>
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/Arrays.png?1524468437" />}
                title="Orientation"
                score="0/16" />

            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/python.png?1459493418" />}
                title="Fundamentals"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/flask.png?1459493434" />}
                title="Flask"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/mysql.png?1450147378" />}
                title="MySQL"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/Arrays.png?1524468437" />}
                title="Flask + MySQL"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/Arrays.png?1524468437" />}
                title="AJAX v20.4"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/deployment.png?1448531694" />}
                title="Flask Deployment"
                score="0/16" />
            <SidebarRow
                logo={<img src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/course_icons/trial.png" />}
                title="Projects"
                score="0/16" />


        </div>);
}

export default Sidebar;
