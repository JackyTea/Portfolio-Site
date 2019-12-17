import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar></NavigationBar>
        {/*}
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/" render={() => <Redirect to="/" />} />
          <Route exact path="/skills" render={() => <SkillsPage />} />
          <Route exact path="/projects" render={() => <ProjectsPage />} />
          <Route render={() => <NotFoundPage />} />
        </Switch>
            */}
            <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
