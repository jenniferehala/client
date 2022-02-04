import React from 'react';
import '../views/Widget.css'

function WidgetOriAh() {
    return (
        <div className="widget_Single">
            <p id="lesson_content">Academic Honesty</p>
            <br></br>


            <h6><strong>Assignment Rules</strong></h6>
            <br></br>
            <br />

            <ul>
                <li>Cannot be the majority of an existing application or repo made by anyone other than yourself</li>
                <li>Cannot be an exact replica of an instructor/TA demo</li>
                <li>Code you can reference or take snippets from</li>
                <ul>Cannot be an exact replica of an instructor/TA demo
                    <li>Code you’ve created (or peer-programmed)</li>
                    <li>Code on the Learn Platform</li>
                    <li>Code created in class demos</li>
                    <li>Code present in official language documentation (or sites that write articles relating to documentation, like CSS Tricks)</li>
                    <li>Code present in help topics or Q&A sites (like StackOverflow)</li>
                    <li>*Code found on GitHub (you can reference it but not use it wholesale and say it’s your own work)</li>
                </ul>
                <li>Collaboration with other students is allowed</li>
            </ul>









            <h6>Exam Rules</h6>

            <ul>
                <li>Cannot be the majority of an existing application or repo made by anyone other than yourself</li>
                <li>Cannot be an exact replica of an instructor/TA demo</li>
                <li>Must be your own new application</li>
                <li>Majority of code must be your own</li>
                <li>Referencing documentation/help topics from the learning platform and relevant documentation is still okay</li>
                <li>Can reference help topics or Q&A sites (like Stack Overflow), past exams, past assignments.</li>
                <li>Cannot reference other’s Coding Dojo exams</li>
                <li>Cannot collaborate with others</li>
            </ul>




        </div >
    );
}

export default WidgetOriAh;
