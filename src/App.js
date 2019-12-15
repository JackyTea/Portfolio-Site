import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import "./App.css";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/" render={() => <Redirect to="/" />} />
          <Route exact path="/skills" render={() => <SkillsPage />} />
          <Route exact path="/projects" render={() => <ProjectsPage />} />
          <Route render={() => <NotFoundPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
