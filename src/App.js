import './App.css';
import Login from "./pages/login";
import Gradebook from 'pages/gradebook';
import {
  BrowseRouter as Router,
  Switch,
  Route} from "react-router-dom";


function App() {
  const [gradeState, setGradeState] = useState(grades)

  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const changeUser = (event) => {
    event.preventDefault();
    if (username && password) {
      setUser(username);
      setLoggedIn(!loggedIn);
    } else if (username && !password) {
      window.alert('Enter Password Here')
    } else if (!username && password) {
      window.alert('Enter Username Here')
    } 
  };

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  };
  
  const logInToggle = () => {
    setLoggedIn(!loggedIn);
  };
  
  return (
    <Router>
      <Login login={loggedIn} loginToggle={logInToggle} user={user} />
      <Switch>
        <Route exact path="/gradebook">
          {loggedIn ? <Gradebook login={loggedIn} projects={gradeState}/> : <Redirect to="/" />}
        </Route>
        <Route exact path="/project/:project">
          {loggedIn ? <Project login={loggedIn} projects={gradeState}/> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          <Home handleChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} login={loggedIn} setUser={changeUser} user={user}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;