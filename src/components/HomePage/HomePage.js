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
                <Link to="/projects">Check out my projects.</Link>
              </button>
            </div>
          </div>
        </div>
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
