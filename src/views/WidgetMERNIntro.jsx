import React from 'react';
import './Widget.css'

function WidgetMERNIntro() {
    return (
        <div className="widget_Single">

            <h1>jQuery vs. React vs. Angular</h1>
            <br>
            </br>
            <br />
            <p>There are many front end web frameworks and libraries that developers use. Of all of them, you will typically hear about jQuery,&nbsp; </p>
            <br></br>
            <br />
            <br />
            <a href="https://reactjs.org/" target="_blank">React
            </a>&nbsp;and&nbsp;
            <a href="https://angular.io/" target="_blank">Angular</a>

            &nbsp;(and Vue). As you can see from the Google trends
            chart below, React and Angular have been getting increasingly popular over the past five years.
            <br></br>

            <img
                src="https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/jqueryreactangular.png" />
            <br />
            <br />

            <p>All of them are used to create front ends for your websites and apps. Let's get a little more specific, however,
                about the differences and similarities between the three of them:</p>
            <h2>jQuery</h2>
            <br />
            <br />

            <p>Developed by Facebook, React is much more of a library than a framework. The distinction is that you can plug React
                into any other framework&nbsp;(if you wanted to) and you would not have much of a problem. Frameworks on the other
                hand, such as Angular, dictate the structure of your app.</p>
            <br />
            <br />
            <p>React is built on the idea of components - modularized parts of a website that are broken up in order to achieve a
                more organized code base. It is written in Javascript and JSX (Javascript that looks like HTML), so knowing HTML and
                Javascript will allow you to quickly pick up React.</p>
            <br />
            <br />
            <p>React does not come with a Router out of the box, so you will typically want to use a third party router, such as
                Reach Router or React Router.&nbsp;</p>
            <br />
            <br />
            <h2>Angular</h2>
            <br />
            <p>Angular is a full fledged framework that comes with a very comprehensive CLI. Angular takes control of how you
                structure your web app by creating a folder structure out of the bag, and you can use to CLI to quickly scaffold new
                components.&nbsp;</p>





        </div>
    );
}

export default WidgetMERNIntro;

