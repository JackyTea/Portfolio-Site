import React, { Component } from "react";
import { ReactComponent as MenuIcon } from "../../images/icons/menuIcon.svg";
import "./NavigationBar.css";

//close sidebar if user clicks outside of it
document.onclick = event => {
  let sideNav = document.getElementById("sideNav");
  let sideIcon = document.getElementById("sideBarIcon");
  let overLay = document.getElementById("overLay");
  if (event.target.className !== "sideBar") {
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

//change transparency based on scrolling

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 100) {
    document.getElementById("theNav").style.background = "none";
    document.getElementById("theNav").style.boxShadow = "none";
    document.getElementById("logoMain").style.color = "white";
  } else {
    document.getElementById("theNav").style.background = "white";
    document.getElementById("theNav").style.boxShadow =
      "2vh 2vh 3vh rgba(0, 0, 0, 0.388)";
    document.getElementById("logoMain").style.color = "black";
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("theNav").style.top = "0";
  } else {
    document.getElementById("theNav").style.top = "-20vh";
  }
  prevScrollpos = currentScrollPos;
};

class NavigationBar extends Component {
  state = {};

  changeTitle(title) {
    document.title = "Jacky Tea | " + title;
  }

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
              <a id="logoMain" href="#theHomePageLanding" onClick={() => {
                this.changeTitle("Home");
              }}>
                Jacky Tea
              </a>
            </h1>
          </div>
          <div className="navigationLinks">
            <nav>
              <a
                onClick={() => {
                  this.changeTitle("Home");
                }}
                href="#theHomePageLanding"
              >
                Home
              </a>
              <a
                onClick={() => {
                  this.changeTitle("Skills");
                }}
                href="#theSkillsPage"
              >
                Skills
              </a>
              <a
                onClick={() => {
                  this.changeTitle("Experience");
                }}
                href="#theExperiencePage"
              >
                Experience
              </a>
              <a
                onClick={() => {
                  this.changeTitle("Projects");
                }}
                href="#theProjectsPage"
              >
                Projects
              </a>
              <button aria-label="open menu" className="sideNavButton">
                <i
                  className="fa fa-lg fa-bars"
                  id="sideBarIcon"
                  onClick={this.toggleSideNav}
                ><MenuIcon></MenuIcon></i>
              </button>
            </nav>
          </div>
        </div>
        <div className="sideBar" id="sideNav">
          <a
            className="sideLink"
            onClick={() => {
              this.changeTitle("Home");
            }}
            href="#theHomePageLanding"
          >
            Home
          </a>
          <a
            className="sideLink"
            onClick={() => {
              this.changeTitle("Skills");
            }}
            href="#theSkillsPage"
          >
            Skills
          </a>
          <a
            className="sideLink"
            onClick={() => {
              this.changeTitle("Experience");
            }}
            href="#theExperiencePage"
          >
            Experience
          </a>
          <a
            className="sideLink"
            onClick={() => {
              this.changeTitle("Projects");
            }}
            href="#theProjectsPage"
          >
            Projects
          </a>
          <a
            className="sideLink"
            href="https://github.com/JackyTea"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="sideLink"
            href="https://linkedin.com/in/jackytea"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <button aria-label="close menu" onClick={this.closeSideNav} className="sideLink">
            Close
          </button>
        </div>
        <div className="overlayShadow" id="overLay"></div>
      </div>
    );
  }
}

export default NavigationBar;
