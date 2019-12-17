import React, { Component } from "react";
import "./AboutPage.css";

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div className="AboutPage">
        <div className="aboutSection">
          <div className="aboutMe">
            <h1>Resume</h1>
            <p>
              I am a software development student dedicated to solving problems{" "}
              and building applications to make the lives of others easier.
            </p>
            <a
                href="https://docs.google.com/document/d/1fxIK0bZKRfrvqch1RhrzKIg8T-B5cEbkdk8ZV7A0Bws/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
            <button>
                View Resume ⯈
            </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
