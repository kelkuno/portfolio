import './App.css';
import Home from '../Home/Home.jsx';
import Projects from '../Projects/Projects.jsx';
import About from '../About/About.jsx';
import Nav from '../Nav/Nav.jsx';

import Resume from '../Resume/Resume.jsx';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";




function App() {
  return (
 
      <Router>
        <div className="App">
          <Route
            path="/"
            exact>
            <Home />
          </Route>
          <Route
            path="/resume">
            <Resume />
          </Route>
          <Route
            path="/projects">
            <Projects />
          </Route>
          <Route
            path="/about">
            <About />
          </Route>
          <Nav />
        </div>
      </Router>


  );
}

export default App;
