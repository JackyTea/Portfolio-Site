import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

//close sidebar if user clicks outside of it
document.onclick = event => {
  let sideNav = document.getElementById("sideNav");
  let sideIcon = document.getElementById("sideBarIcon");
  let overLay = document.getElementById("overLay");
  if (
    event.target.className !== "sideBar" &&
    event.target.className !== "sideLink"
  ) {
    overLay.style.width = "";
    sideNav.style.width = "";
    sideIcon.className = "fa fa-lg fa-bars";
  }
};

//close sidebar if window is resized
window.onresize = () => {
  let sideNav = document.getElementById("sideNav");
  let sideIcon = document.getElementById("sideBarIcon");
  let overLay = document.getElementById("overLay");
  overLay.style.width = "";
  sideNav.style.width = "";
  sideIcon.className = "fa fa-lg fa-bars";
};

class NavigationBar extends Component {
  state = {};

  /*
  componentDidMount() {
    let navigationBar = document.getElementById("theNav");
    if(window.location.pathname === "/" || window.location.pathname === "/skills" || window.location.pathname === "/projects") {
      navigationBar.style.display = "block";
    } else {
      navigationBar.style.display = "none";
    }
  }
  */

  //sidebar toggle
  toggleSideNav = () => {
    let sideNav = document.getElementById("sideNav");
    let sideIcon = document.getElementById("sideBarIcon");
    let overLay = document.getElementById("overLay");
    if (sideNav.style.width === "") {
      overLay.style.width = "100%";
      sideNav.style.width = "50%";
      sideIcon.className = "fa fa-lg fa-close";
    } else {
      overLay.style.width = "";
      sideNav.style.width = "";
      sideIcon.className = "fa fa-lg fa-bars";
    }
  };

  //close sidebar
  closeSideNav = () => {
    let sideNav = document.getElementById("sideNav");
    let sideIcon = document.getElementById("sideBarIcon");
    let overLay = document.getElementById("overLay");
    overLay.style.width = "";
    sideNav.style.width = "";
    sideIcon.className = "fa fa-lg fa-bars";
  };

  render() {
    return (
      <div id="theNav" className="NavigationBar">
        <div className="navigationBar">
          <div className="mainLogo">
            <h1>
              <Link to="/">
                Jacky Tea <span id="blinkingCursor">_</span>
              </Link>
            </h1>
          </div>
          <div className="navigationLinks">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <a className="sideLink" href="https://github.com/JackyTea">
                GitHub
              </a>
              <a className="sideLink" href="https://linkedin.com/in/jackytea">
                LinkedIn
              </a>
              <button className="sideNavButton">
                <i
                  className="fa fa-lg fa-bars"
                  id="sideBarIcon"
                  onClick={this.toggleSideNav}
                ></i>
              </button>
            </nav>
          </div>
        </div>
        <div className="sideBar" id="sideNav">
          <Link className="sideLink" to="/">
            Home
          </Link>
          <Link className="sideLink" to="/skills">
            Skills
          </Link>
          <Link className="sideLink" to="/projects">
            Projects
          </Link>
          <a className="sideLink" href="https://github.com/JackyTea">
            GitHub
          </a>
          <a className="sideLink" href="https://linkedin.com/in/jackytea">
            LinkedIn
          </a>
          <button onClick={this.closeSideNav} className="sideLink">
            Close
          </button>
        </div>
        <div className="overlayShadow" id="overLay"></div>
      </div>
    );
  }
}

export default NavigationBar;
