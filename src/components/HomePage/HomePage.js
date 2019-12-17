import React, { Component } from "react";
import SkillsPage from "../SkillsPage/SkillsPage";
import FooterBar from "../FooterBar/FooterBar";
import "./HomePage.css";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";

//homepage class
class HomePage extends Component {
  //state
  state = {};

  componentDidMount() {
    document.title = "Jacky Tea | Home";
  }

  //html for homepage
  render() {
    return (
      <div className="HomePage" id="theHomePage" ref={this.props.divRef}>
        <div className="landingSection" id="theHomePageLanding">
          <div className="mainTitle">
            <div className="introContainer">
              <h1>Hi, I'm Jacky.</h1>
              <h3>I'm a software development student.</h3>
              <button>
                <a href="#theProjectsPage">Check out my projects.</a>
              </button>
            </div>
          </div>
        </div>
        {/*
        <div className="aboutSection">
          <div className="aboutMe">
            <h1>About Me</h1>
            <p>
              Hey there, I am a software development student dedicated to
              solving problems and building applications to make the lives of
              others easier.
            </p>
            {/*
            <button>
              <a href="/" download>
                Download Resume ▼
              </a>
            </button>
          </div>
          <div className="bracketsVector">
            <DevIcon></DevIcon>
          </div>
        </div>
        */}
        <div id="projSkills">
          <div id="theProjectsPage">
            <ProjectsPage></ProjectsPage>
          </div>
          <div id="theSkillsPage">
            <SkillsPage></SkillsPage>
          </div>
        </div>
        <div id="theAboutPage">
        <AboutPage></AboutPage>
          </div>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default HomePage;
