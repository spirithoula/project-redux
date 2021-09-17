import './App.css';
import Login from "./pages/login";
import Gradebook from 'pages/gradebook';
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
      <Login login={loggedIn} loginToggle={logInToggle} user={user} setPassword={setPassword} setUsername={setUsername}/>
      <Switch>
        <Route exact path="/gradebook">
          {loggedIn ? <Gradebook login={loggedIn} projects={gradeState}/> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;