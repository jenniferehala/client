import React from 'react';
import '../views/Widget.css'
import Card from './Card';

function WidgetSingle() {
    return (
        <div>
            <div className="widget">
                {/* <div className="widget"> */}
                <div className="widget"><a href="" id="tracks_link">Rules</a></div>
                {/* </div> */}
                {/* <div className="widget__section"> */}
                <img
                    src={"https://s3.us-east-1.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/1619804205__heylagostechie-kwzWjTnDPLk-unsplash.jpg"}
                />
                {/* </div> */}
                <div className="widget">
                    <ul>
                        <li>Be Present</li>
                        <li>Be Humble</li>
                        <li>Be Strength through Struggle</li>
                    </ul>
                </div>

                <div className="widget">
                    <a href="" id="tracks_link">Professionalism</a>
                </div>
                <ul>
                    <li>Do not use explicit language on/through any Coding Dojo resource</li>
                </ul>
                <div className="widget">
                    <a href="" id="tracks_link">Zero Tolerance</a>
                </div>
                <Card
                    src={"https://s3.us-east-1.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/1619804522__jon-tyson-2TzSuQZOHe4-unsplash.jpg"}
                />
                <ul>
                    <li>Disrespect</li>
                    <li>Negative Attitude</li>
                    <li>Dishonesty
                        <ul>
                            <li>Cheating on Assignments (pair programming is encouraged, you should still be writing your own code, not copy/pasting your classmates work, this also helps you better retain the information</li>
                            <li>Cheating on Exams (upon review, may result to immediate expulsion)</li>
                        </ul>

                    </li>
                </ul>
            </div>
        </div>


    );
}

export default WidgetSingle;
