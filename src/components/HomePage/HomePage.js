import React, { Component } from "react";
import SkillsPage from "../SkillsPage/SkillsPage";
import FooterBar from "../FooterBar/FooterBar";
import "./HomePage.css";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";

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
        <div onMouseEnter={()=> {this.changeTitle("Home")}} className="landingSection" id="theHomePageLanding">
          <div className="mainTitle">
            <div className="introContainer">
              <h1>Hi, I'm Jacky.</h1>
              <h3>I'm a software development student.</h3>
              <button>
                <a
                  onClick={() => {
                    this.changeTitle("Projects");
                  }}
                  href="#theProjectsPage"
                >
                  Check out my projects.
                </a>
              </button>
            </div>
          </div>
        </div>
        <div id="projSkills">
          <div id="theProjectsPage" onMouseEnter={()=> {this.changeTitle("Projects")}}>
            <ProjectsPage></ProjectsPage>
          </div>
          <div id="theSkillsPage" onMouseEnter={()=> {this.changeTitle("Skills")}}>
            <SkillsPage></SkillsPage>
          </div>
        </div>
        <div id="theAboutPage" onMouseEnter={()=> {this.changeTitle("Resume")}}>
          <AboutPage></AboutPage>
        </div>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default HomePage;
