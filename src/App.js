import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Login from '../src/pages/login';
import Gradebook from '../src/pages/gradebook';
import {
  BrowseRouter as Router,
  Switch,
  Route} from "react-router-dom";


function App() {
  const user = (event) => {
    event.preventDefault();
  };
  const logInToggle = () => {
    setLoggedIn(!loggedIn);
  };
  
  const [user] = useState("");

  const [setPassword] = useState("");

  const [setUsername] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const [gradeState] = useState(grades)


  return (
    <Router>
      <Login Login={loggedIn} loginToggle={logInToggle} user={user} setPassword={setPassword} setUsername={setUsername}/>
      <Switch>
        <Route exact path="/gradebook">
          {loggedIn ? <Gradebook login={loggedIn} projects={gradeState}/> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;