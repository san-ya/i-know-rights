import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {NavBar, HumanRights, WomenRights, ConsumerRights, LandPage, Footer } from './Components'


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path = '/human-rights'>
          <HumanRights/>
        </Route>
        <Route exact path = '/consumer-rights'>
          <ConsumerRights/>
        </Route>
        <Route exact path = '/'>
          <LandPage/>
        </Route>
        <Route exact path = '/women-rights'>
          <WomenRights/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
