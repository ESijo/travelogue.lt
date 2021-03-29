import './App.css';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Articles from './components/Articles'
import Itineraries from './components/Itineraries'
import Contacts from './components/Contacts'

function App() {
  

  return (
    <Router>
      <div className="app">
      <NavigationBar />
      <Switch>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/itineraries">
          <Itineraries />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>  
    </div>
    </Router>
  );
}

export default App;
