import React from 'react';
import './Widget.css'

function WidgetMERNFunc() {
    return (
        <div>
            <div class="content">
                <div id="lesson_content">
                    <h1 class="text-center">JavaScript is Multi-Paradigm</h1>
                    <p></p>
                    <p>When JavaScript was initially being designed, it was envisioned that the language would work like popular
                        functional languages like Lisp, however at the time Java (an Object Oriented Language) was (and still
                        is) very popular and it was decided to make JavaScript resemble a scripting version of Java. As such
                        JavaScript retains a syntax that at least superficially resembles Java, but functions are (first class)
                        treated like just any other variable and JavaScript also supports writing programs in an OOP style
                        (through prototype inheritance). As such JavaScript is multi-paradigm and we can write it procedurally,
                        functionally, or object oriented-ly or any combination of the above.</p>
                    <p></p>
                </div>
            </div>
        </div>);
}

export default WidgetMERNFunc;
