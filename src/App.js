import React from "react";
import GlobalStyle from "./components/globalStyles";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Milestones from "./pages/Milestones";
import Travels from "./pages/Travels";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/my-portfolio">
          <Home />
        </Route>
        <Route exact path="/my-portfolio/projects">
          <Projects />
        </Route>
        <Route exact path="/my-portfolio/milestones">
          <Milestones />
        </Route>
        <Route exact path="/my-portfolio/travels">
        <Travels />
      </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
