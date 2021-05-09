//Basic dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Styling
import "./App.css";

//Pages
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Services from "./Pages/Services/Services.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import About from "./Pages/About/About.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
