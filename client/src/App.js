
import './App.css';
import auth from './Auth';
import Login from './Login';
import GuardedRoute from './GuardedRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Success } from './Success';


export default function App() {

  return (
    <Router>
    <Switch>
      <GuardedRoute path="/success"  component = {Success}/>
      <Route path="/"> <Login /></Route>
    </Switch> 
  </Router>
  )
}

