import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Main from './views/Main';
import { Switch, Route, Link } from 'react-router-dom';
import SinglePage from './views/SinglePage';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  return (


    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/dojo/:_id">
          <SinglePage />
        </Route>
      </Switch>


      <Link to={"/dojo/:_id"}></Link>



    </div>


  );

}

export default App;
