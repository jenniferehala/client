import React from 'react';
import '../views/Widget.css'
import Card from './Card';

function Widget() {
    return (
        <div className="widget">
            {/* Banner */}
            <div className="banner">
                <h1>Tracks</h1>
                <h4>continue learning</h4>
                <h5>Mandatory Pre-bootcamp Track</h5>
                <Card src="https://assets.codingdojo.com/learn_platform/user/dashboard/track_bg/full_stack_essentials_bg.png" />
            </div>
            <div className="card">
                <h5>Your Major Tricks</h5>
                <Card
                    src="https://assets.codingdojo.com/learn_platform/user/dashboard/track_bg/full_stack_essentials_bg.png"
                    title="" />
                <Card
                    src="https://assets.codingdojo.com/learn_platform/user/dashboard/track_bg/python_bg.png"
                    title="" />
            </div>
            <div className="card">
                <Card
                    src="https://assets.codingdojo.com/learn_platform/user/dashboard/track_bg/full_stack_essentials_bg.png"
                    title="" />
                <Card
                    src="https://assets.codingdojo.com/learn_platform/user/dashboard/track_bg/web_fundamentals_bg.png"
                    title="" />
            </div>
        </div>);
}

export default Widget;
