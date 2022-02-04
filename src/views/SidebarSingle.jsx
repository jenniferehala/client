import React from 'react';
import '../views/Sidebar.css'
import SidebarRowSingle from './SidebarRowSingle';

function SidebarSingle() {
    return (
        <div className="sidebar">
            <div className="course_title">
                <p>Python v20.1 </p>
            </div>
            <br></br>

            <div>Stack Orientation</div>
            <br></br>
            <div data-toggle="dropdown" >
                <select>
                    <option value="python"></option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                </select>
            </div>
            <SidebarRowSingle
                title="Rules"
                logo={<img src="https://assets.codingdojo.com/learn_platform/user/courses/module_sidebar_icons_v2.png"></img>
                }>

            </SidebarRowSingle>

            <SidebarRowSingle
                title="Requirements"
                logo={<img src="https://assets.codingdojo.com/learn_platform/user/courses/module_sidebar_icons_v2.png"></img>
                }>

            </SidebarRowSingle>

            <SidebarRowSingle
                title="Exams"
                logo={<img src="https://assets.codingdojo.com/learn_platform/user/courses/module_sidebar_icons_v2.png"></img>
                }>

            </SidebarRowSingle>

            <SidebarRowSingle
                title="Academic Honesty"
                logo={<img src="https://assets.codingdojo.com/learn_platform/user/courses/module_sidebar_icons_v2.png"></img>
                }>

            </SidebarRowSingle>

            <SidebarRowSingle
                title="Surveys"
                logo={<img src="https://assets.codingdojo.com/learn_platform/user/courses/module_sidebar_icons_v2.png"></img>
                }>

            </SidebarRowSingle>




        </div>);
}

export default SidebarSingle;
