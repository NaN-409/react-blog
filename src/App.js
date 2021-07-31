import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settingss/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Home from './pages/home/Home'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
        <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/register">{user ? <Home/> :< Register/>}</Route>
      <Route path="/login">{user ? <Home/> :< Login/>}</Route>
      <Route path="/write">{user ? <Write/> :< Write/>}</Route>
      <Route path="/settings">{user ? <Settings/> :< Settings/>}</Route>
      <Route path="/singlepost">{user ? <SinglePost/> :< SinglePost/>}</Route>
      <Route path="/post/:postId">< Single/></Route>
        </Switch>
    </Router>
  );
}

export default App;