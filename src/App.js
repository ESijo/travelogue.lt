import './App.css';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home'
import AboutUs from './components/AboutUs'

function App() {
  

  return (
    <Router>
      <div className="app">
      <NavigationBar />
      <Switch>
        <Route path="/contacts">
          <AboutUs />
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
