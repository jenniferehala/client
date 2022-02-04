import React from 'react';
import './Widget.css'

function WidgetOriSurveys() {
    return (
        <div className="widget_Single">
            <p id="lesson_content">Surveys</p>
            <div className="lesson_image">
                <img
                    src={"https://s3.us-east-1.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/1619804754__celpax-1Lf5Adh9SCg-unsplash.jpg"}
                />
            </div>
            <br></br>
            <p><strong>Purpose:</strong>
                <br></br>
                <br></br>
                These surveys play an integral part in receiving feedback from you for the purposes of improving your experience. Whether it's by our TAs, Instructors, Curriculum Developers and Coding Dojo leadership, your feedback is reviewed daily by the respective staff and by leadership who are tasked to help ensure appropriate actions are taken.</p>
            <br></br>
            <br></br>
            <h6><strong> Frequency</strong>  </h6>
            <ul>
                <li>1 Mid-Track Survey (in each Stack, at the half way mark)</li>
                <li>1 Final-Track Survey (in each Stack, at the end of your stack).</li>
                <li>Student Satisfaction Survey (2-3 times per week)</li>
                <li>An unavoidable geographical transfer (eg. moving).</li>
            </ul>
            <h6> <strong>Monday Recap</strong> </h6>

            <ul><li><strong>Purpose:</strong> Recap student feedback from the previous week, from the daily surveys, and mid-track survey if applicable</li></ul>
            <br></br>
        </div>)
        ;
}

export default WidgetOriSurveys;
