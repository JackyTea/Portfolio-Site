import React, { Component } from "react";
import SkillsPage from "../SkillsPage/SkillsPage";
import FooterBar from "../FooterBar/FooterBar";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ExperiencePage from "../ExperiencePage/ExperiencePage";
import "./HomePage.css";

//homepage class
class HomePage extends Component {

  componentDidMount() {
    document.title = "Jacky Tea | Home";
  }

  changeTitle(title) {
    document.title = "Jacky Tea | " + title;
  }

  //html for homepage
  render() {
    return (
      <div className="HomePage" id="theHomePage" ref={this.props.divRef}>
        <div onMouseEnter={() => { this.changeTitle("Home") }} className="landingSection" id="theHomePageLanding">
          <div className="mainTitle">
            <div className="introContainer">
              <h1>Hi, I'm Jacky.</h1>
              <h3>I'm a software developer.</h3>
              <a
                className="sideLink"
                href="https://github.com/JackyTea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button aria-label="view resume">
                  Check out my GitHub.
              </button>
              </a>
            </div>
          </div>
        </div>
        <div id="projSkills">
          <div id="theSkillsPage" onMouseEnter={() => { this.changeTitle("Skills") }}>
            <SkillsPage></SkillsPage>
          </div>
          <div id="theExperiencePage" onMouseEnter={() => { this.changeTitle("Experience") }}>
            <ExperiencePage></ExperiencePage>
          </div>
          <div id="theProjectsPage" onMouseEnter={() => { this.changeTitle("Projects") }}>
            <ProjectsPage></ProjectsPage>
          </div>
        </div>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default HomePage;
