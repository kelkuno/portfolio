import './App.css';
import Home from '../Home/Home.jsx';
import Nav from '../Nav/Nav.jsx';
import Projects from '../Projects/Projects.jsx';
import About from '../About/About.jsx';
import Resume from '../Resume/Resume.jsx';





function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="content-container">
        <button className="content">About</button>
        <div className="content">Resume</div>
        <div className="content">Projects</div>
      </div>
      <Home />
      <Resume />
      <Nav />
      <Projects />
      <About />
      




      <div className="footer">
        <div className="logo">
          Kelsey <br /> Kuno
        </div>
        <div className="title-contact-container">
          <div className="title">software engineer & designer</div>
          <div className="contact-container">
            <div className="contact"><span className="number">01</span>LinkedIn</div>
            <div className="contact"><span className="number">02</span>GitHub</div>
            <div className="contact"><span className="number">03</span>Creative Portfolio</div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
