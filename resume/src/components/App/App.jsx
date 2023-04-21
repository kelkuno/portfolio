import './App.css';
import Home from '../Home/Home.jsx';
import Projects from '../Projects/Projects.jsx';
import About from '../About/About.jsx';
import Nav from '../Nav/Nav.jsx';
import PhotoPalette from '../PhotoPalette/PhotoPalette.jsx';
import EmployeeTracker from '../EmployeeTracker/EmployeeTracker.jsx';



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
          <Route
            path="/photo-palette">
            <PhotoPalette />
          </Route>
          <Route
            path="/employee-tracker">
            <EmployeeTracker />
          </Route>
          <Nav />
        </div>
      </Router>


  );
}

export default App;
