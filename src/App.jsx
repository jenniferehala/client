import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Main from './views/Main';
import Course from './views/Course';
import { Switch, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className="app">

      <Switch>
        <Route>
          <Main exact path="/" />
        </Route>
        <Route>
          <Course exact path="/dojo/:_id" />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
