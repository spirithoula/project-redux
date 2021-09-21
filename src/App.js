import './App.css';
import Login from '../src/pages/login';
import Gradebook from '../src/pages/gradebook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect exact from="/" to="gradebook" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="gradebook" />
        </Route>
      </Switch>
    </Router>
  );
}

