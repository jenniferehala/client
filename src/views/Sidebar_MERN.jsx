import React from 'react';
import '../views/Sidebar.css'
import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';


function Sidebar_MERN() {


    return (
        <div>

            <div className="sidebar">
                <div className="course_title">
                    <p>MERN </p>
                </div>
                <br></br>
                <div>
                    <p>Javascript</p>
                </div>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        Course Overview
                    </AccordionSummary>
                    <AccordionDetails>
                        Intro to MERN
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        Node
                    </AccordionSummary>
                    <AccordionDetails>
                        Intro to Node
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        Fundamentals
                    </AccordionSummary>
                    <AccordionDetails>
                        Overview
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        OOP
                    </AccordionSummary>
                    <AccordionDetails>
                        Overview
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        Functional Programming
                    </AccordionSummary>
                    <AccordionDetails>
                        Multi-Paradigm
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        NPM
                    </AccordionSummary>
                    <AccordionDetails>
                        Node Package Manager
                    </AccordionDetails>
                </Accordion>





            </div>
        </div >
    );
}


export default Sidebar_MERN;
