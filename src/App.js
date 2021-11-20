import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { HumanRights, WomenRights, ConsumerRights } from './Components'
import Landing from './Components/LandPage/Landing';
import Header from './Components/Navbar/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path = '/human-rights'>
          <HumanRights/>
        </Route>
        <Route exact path = '/consumer-rights'>
          <ConsumerRights/>
        </Route>
        <Route exact path = '/'>
          <Landing />
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
