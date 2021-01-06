import React from "react";
import GlobalStyle from "./components/globalStyles";
import { Switch, Route, HashRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Milestones from "./pages/Milestones";
import Travels from "./pages/Travels";

function App() {
  return (
    <HashRouter basename="/">
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/milestones">
          <Milestones />
        </Route>
        <Route exact path="/travels">
        <Travels />
      </Route>
      </Switch>
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
