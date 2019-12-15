import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterBar from "../FooterBar/FooterBar";
import { ReactComponent as DevIcon } from "../../images/homePage/devIcon.svg";
import "./HomePage.css";

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
      <div className="HomePage">
        <div className="landingSection">
          <div className="topBar"></div>
          <div className="mainTitle">
            <div className="introContainer">
              <h1>Hi, I'm Jacky.</h1>
              <h3>A software development student.</h3>
              <button>
                <Link to="/projects">Check out my stuff.</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="aboutSection">
          <div className="aboutMe">
            <h1>About Me</h1>
            <p>
              I am a driven individual with the goal of solving practical
              problems and building software for the benefit of others.
              Currently enrolled in a software development program, my main
              areas of focus include web development and network-driven
              applications. Alongside my current concentration, I have started
              projects involving UI/UX design, game development and mobile
              development. In the future, I plan on looking into projects
              involving machine learning and robotics.
            </p>
            {/*
            <button>
              <a href="/" download>
                Download Resume ▼
              </a>
            </button>
             */}
          </div>
          <div className="bracketsVector">
            <DevIcon></DevIcon>
          </div>
        </div>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default HomePage;
