import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Main from './views/Main';
import { Switch, Route, Link } from 'react-router-dom';
import Orientation_Rules from './views/Orientation_Rules';
import React, { useEffect, useState } from 'react';
import Orientation_Req from './views/Orientation_Req';
import Orientation_Exams from './views/Orientation_Exams';
import Orientation_AH from './views/Orientation_AH';
import Orientation_Surveys from './views/Orientation_Surveys';
import MERN_Intro from './views/MERN_Intro';
import MERN_IntrotoNode from './views/MERN_IntrotoNode';
import MERN_OOP from './views/MERN_OOP';
import MERN_Fundamentals from './views/MERN_Fundamentals';
import MERN_Functional from './views/MERN_Functional';
import MERN_NPM from './views/MERN_NPM'


function App() {

  return (


    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/dojo/:_id/1">
          <Orientation_Rules />


        </Route>
        <Route exact path="/dojo/:_id/2">
          <Orientation_Req />
        </Route>

        <Route exact path="/dojo/:_id/3">
          <Orientation_Exams />
        </Route>

        <Route exact path="/dojo/:_id/4">
          <Orientation_AH />
        </Route>

        <Route exact path='/dojo/:_id/5'>
          <Orientation_Surveys />

        </Route>

        <Route exact path='/dojo/:_id/6'>
          <MERN_Intro />
        </Route>

        <Route exact path='/dojo/:_id/7'>
          <MERN_IntrotoNode />
        </Route>

        <Route exact peth='/dojo/:_id/8'>
          <MERN_Fundamentals />
        </Route>

        <Route exact path='/dojo/:_id/9'>
          <MERN_OOP />
        </Route>

        <Route exact path='/dojo/:_id/11'>
          <MERN_Functional />
        </Route>

        <Route exact path='/dojo/:_id/12'>
          <MERN_NPM />
        </Route>


      </Switch>


      <Link to={"/dojo/:_id"}></Link>



    </div>


  );

}

export default App;
