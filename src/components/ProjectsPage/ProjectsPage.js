import React, { Component } from "react";
import FooterBar from "../FooterBar/FooterBar";
import { ReactComponent as GithubIcon } from "../../images/projectsPage/githubIcon.svg";
import { ReactComponent as VisitIcon } from "../../images/projectsPage/visitIcon.svg";
import { ReactComponent as Proj1 } from "../../images/projectsPage/proj1.svg";
import { ReactComponent as Proj2 } from "../../images/projectsPage/proj2.svg";
import { ReactComponent as Proj3 } from "../../images/projectsPage/proj3.svg";
import { ReactComponent as Proj4 } from "../../images/projectsPage/proj4.svg";
import { ReactComponent as Proj5 } from "../../images/projectsPage/proj5.svg";
import { ReactComponent as Proj6 } from "../../images/projectsPage/proj6.svg";
import { ReactComponent as Proj7 } from "../../images/projectsPage/proj7.svg";
import "./ProjectsPage.css";

class ProjectsPage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Jacky Tea | Projects";
  }

  render() {
    return (
      <div className="ProjectsPage">
        <div className="landingSection">
          <div className="mainTitle">
            <h1>Projects</h1>
            <p>Some stuff I made.</p>
          </div>
        </div>
        <div className="projectShowcase">
          <div className="projectIcon">
            <Proj1></Proj1>
          </div>
          <div className="projectDescription">
            <h1>Real Time Polling Application</h1>
            <br />
            <p>
              A web application designed to display changing polling results in
              real time. Any user inputted votes are pushed to the backend
              database to be stored. Data is then rendered to a generated
              polling asynchronously so that the webpage is updated without the
              need for a refresh.
              <br />
              <br />
              <button>
                <a href="https://github.com/JackyTea/Real-Time-Polling-Application">
                  Source Code
                </a>{" "}
                <GithubIcon></GithubIcon>
              </button>
              <button>
                <a href="https://sheltered-inlet-92987.herokuapp.com/">
                  Visit Site
                </a>{" "}
                <VisitIcon></VisitIcon>
              </button>
            </p>
          </div>
          <div className="projectTools">
            <span>Languages and Technologies Used: </span>
            <button>JavaScript</button> <button>Node.JS</button>
            <button>MongoDB</button> <button>Pusher</button>
          </div>
        </div>
        <div className="projectShowcase">
          <div className="projectIcon">
            <Proj2></Proj2>
          </div>
          <div className="projectDescription">
            <h1>Arduino Socket Remote Controller</h1>
            <br />
            <p>
              An interface to execute commands remotely onto an Arduino
              microcontroller via a server-client TCP/IP connection. The
              commands are executed with a serial port library that allows
              received data packets to be processed into the appropriate format.
              The library feeds data via a USB connection to the Arduino once
              the client has sent a command to the controlling server module.
              <br />
              <br />
              <button>
                <a href="https://github.com/JackyTea/Arduino-Socket-Controller">
                  Source Code
                </a>{" "}
                <GithubIcon></GithubIcon>
              </button>
            </p>
          </div>
          <div className="projectTools">
            <span>Languages and Technologies Used: </span>
            <button>C++</button> <button>WinSock</button>
            <button>Arduino</button>
          </div>
        </div>
        <div className="projectShowcase">
          <div className="projectIcon">
            <Proj3></Proj3>
          </div>
          <div className="projectDescription">
            <h1>Discord Logger Bot</h1>
            <br />
            <p>
              A Node.JS script designed to log messages written in a designated
              Discord server. The messages are saved to persistent storage in a
              MongoDB database for historical records. Messages are
              distinguished by what user and channel they are sent in, allowing
              for ease of querying.
              <br />
              <br />
              <button>
                <a href="https://github.com/JackyTea/Logger-Bot">Source Code</a>{" "}
                <GithubIcon></GithubIcon>
              </button>
            </p>
          </div>
          <div className="projectTools">
            <span>Languages and Technologies Used: </span>
            <button>JavaScript</button> <button>Node.JS</button>
            <button>Discord.JS</button> <button>MongoDB</button>
          </div>
        </div>
        <div className="projectShowcase">
          <div className="projectIcon">
            <Proj4></Proj4>
          </div>
          <div className="projectDescription">
            <h1>Make It Rain (Browser Game)</h1>
            <br />
            <p>
              A simple browser game that makes use of CSS3 animations and DOM
              manipulation with JavaScript. Optimizes the game through dynamic
              removal of DOM elements that are no longer in use.
              <br />
              <br />
              <button>
                <a href="https://github.com/JackyTea/Make-It-Rain">
                  Source Code
                </a>{" "}
                <GithubIcon></GithubIcon>
              </button>
              <button>
                <a href="https://cryptic-river-57921.herokuapp.com/">
                  Visit Site
                </a>{" "}
                <VisitIcon></VisitIcon>
              </button>
            </p>
          </div>
          <div className="projectTools">
            <span>Languages and Technologies Used: </span>
            <button>JavaScript</button> <button>Node.JS</button>
          </div>
        </div>
        <div className="projectShowcase">
          <div className="projectIcon">
            <Proj5></Proj5>
          </div>
          <div className="projectDescription">
            <h1>Student Enrolment Application</h1>
            <br />
            <p>
              An Angular application designed to render student information
              fetched from a web service and allow students to perform CRUD
              operations on their school account. The application makes use of two-way 
              data binding to render a visual schedule builder for students 
              to easily enrol in courses and see course conflicts as they build
              their timetable.
              <br />
              <br />
              <button className="unavailable">
                  Source Code Unavailable [School Assignment] {" "}
                <GithubIcon></GithubIcon>
              </button>
            </p>
          </div>
          <div className="projectTools">
            <span>Languages and Technologies Used: </span>
            <button>JavaScript</button> <button>Node.JS</button>
            <button>Angular</button> <button>MongoDB</button>
          </div>
        </div>
        <div className="projectShowcase">
          <div className="projectIcon">
            <Proj6></Proj6>
          </div>
          <div className="projectDescription">
            <h1>Daemonized Keyboard Logger</h1>
            <br />
            <p>
              A network driven application that utilizes SSH to inject a targeted machine
              with keyboard logging malware to record keystrokes. The logging malware runs
              in the background for a indefinite amount of time or until a "kill" command 
              is sent from the controlling daemon module. All data collected is then sent back
              via a discrete SFTP connection. 
              <br />
              <br />
              <button className="unavailable">
                  Source Code Unavailable [School Assignment] {" "}
                <GithubIcon></GithubIcon>
              </button>
            </p>
          </div>
          <div className="projectTools">
            <span>Languages and Technologies Used: </span>
            <button>Python 3</button>
          </div>
        </div>
        <div className="projectShowcase">
          <div className="projectIcon">
            <Proj7></Proj7>
          </div>
          <div className="projectDescription">
            <h1>Data Processing Assembly Line</h1>
            <br />
            <p>
              A server-client system that processes data read from 
              configuration files and csv files. Data is serialized to
              optimize transport before being processed in the backend to
              complete an assembly line request.
              <br />
              <br />
              <button className="unavailable">
                  Source Code Unavailable [School Assignment] {" "}
                <GithubIcon></GithubIcon>
              </button>
            </p>
          </div>
          <div className="projectTools">
            <span>Languages and Technologies Used: </span>
            <button>Java</button>
          </div>
        </div>
        <h1 className="endMsg">And more in the works...</h1>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default ProjectsPage;
