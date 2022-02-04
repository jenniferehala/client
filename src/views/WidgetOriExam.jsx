import React from 'react';
import '../views/Widget.css'

function WidgetOriExam() {
    return (
        <div>
            <div className="widget_Single">
                <p id="lesson_content">Exams</p>
                <h5>Requirements to Unlock an Exam</h5>
                <ul>
                    <li>Students must complete 90% of all Core Assignments to be eligible to unlock and attempt</li>
                </ul>
                <p>Students must complete 90% of all Core Assignments to be eligible to unlock and attempt the exam. </p>

                <h5>Exam Grading</h5>

                <ul>
                    <li><strong>Passing</strong> - Score 8/10 or higher, the exams include the most critical fundamental concepts necessary for students to show proficiency in the stack. These challenges and features are imperative to be well understood.</li>
                </ul>

                <p>For more details, see your catalog in 'My Files' section of your learn profile</p>

            </div>
        </div>
    );
}

export default WidgetOriExam;
