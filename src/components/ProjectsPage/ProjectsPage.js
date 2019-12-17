import React, { Component } from "react";
import FooterBar from "../FooterBar/FooterBar";
import { ReactComponent as GithubIcon } from "../../images/projectsPage/githubIcon.svg";
import { ReactComponent as VisitIcon } from "../../images/projectsPage/visitIcon.svg";
import { ReactComponent as XIcon } from "../../images/projectsPage/xIcon.svg";
import { ReactComponent as EyeIcon } from "../../images/projectsPage/eyeIcon.svg";
import { ReactComponent as ProjectsIcon } from "../../images/projectsPage/projectsIcon.svg";
import { ReactComponent as SkillsIcon } from "../../images/projectsPage/skillsIcon.svg";
import { ReactComponent as Proj1 } from "../../images/projectsPage/proj1.svg";
import { ReactComponent as Proj2 } from "../../images/projectsPage/proj2.svg";
import { ReactComponent as Proj3 } from "../../images/projectsPage/proj3.svg";
import { ReactComponent as Proj4 } from "../../images/projectsPage/proj4.svg";
import { ReactComponent as Proj5 } from "../../images/projectsPage/proj5.svg";
import { ReactComponent as Proj6 } from "../../images/projectsPage/proj6.svg";
import { ReactComponent as Proj7 } from "../../images/projectsPage/proj7.svg";
import "./ProjectsPage.css";
import { Redirect } from "react-router-dom";

class ProjectsPage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Jacky Tea | Projects";
  }

  render() {
    return (
      <div className="ProjectsPage">
        <h1 className="title">Projects</h1>
        <div className="projectContainer">
          <div className="projectCard">
            <img src="https://doc-0g-bg-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/cl85d3ru0s58v4dolh1pk00arfj8cvlt/1576548000000/07294837811039641421/*/1uki6Z6bbngSq6mrYQ6cTq0Ag2yceSZeN"></img>
            <h1>Real Time Polling Application</h1>
            <br />
            <p>
              A web application designed to display changing polling results in
              real time. Any user inputted votes are pushed to the backend
              database to be stored. Data is then rendered to a generated
              polling asynchronously so that the webpage is updated without the
              need for a refresh.
            </p>
            <br />
            <div className="projectTools">
              Technologies Used:&nbsp;
              <button>JavaScript</button> <button>Node.JS</button>
              <button>MongoDB</button>
              <button>Pusher API</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> Heroku site may take time to connect.
              </span>
            </div>
            <div className="projectLinks">
              <a href="https://sheltered-inlet-92987.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Visit Site <VisitIcon></VisitIcon>
              </a>
              <a href="https://github.com/JackyTea/Real-Time-Polling-Application" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
          <div className="projectCard">
            <img src="https://doc-0o-bg-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/r5j48oqjr0hkp35k6qafundgb7niocsl/1576548000000/07294837811039641421/*/1wmlDv3voZdoexaP4G2KfN-13nj44Dn9S"></img>
            <h1>Make It Rain (Browser Game)</h1>
            <br />
            <p>
              A simple browser clicker game that makes use of CSS3 animations
              and DOM manipulation with JavaScript. The game is optimized
              through dynamic removal of DOM elements that are no longer in use.
              JavaScript is also used here to take care of game logic and serve
              the Node.JS application.
            </p>
            <br />
            <br />
            <div className="projectTools">
              Technologies Used:&nbsp;
              <button>JavaScript</button> <button>Node.JS</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> Heroku site may take time to connect.
              </span>
            </div>
            <div className="projectLinks">
              <a href="https://cryptic-river-57921.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Visit Site <VisitIcon></VisitIcon>
              </a>
              <a href="https://github.com/JackyTea/Make-It-Rain" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectCard">
            <img src="https://doc-0g-bg-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/cl85d3ru0s58v4dolh1pk00arfj8cvlt/1576548000000/07294837811039641421/*/1uki6Z6bbngSq6mrYQ6cTq0Ag2yceSZeN"></img>
            <h1>Student Enrolment Application</h1>
            <br />
            <p>
              An Angular application designed to render student information
              fetched from a web service and allow students to perform CRUD
              operations on their school account. The application makes use of
              two-way data binding to render a visual schedule builder for
              students to easily enrol in courses and see course conflicts as
              they build their timetable.
            </p>
            <br />
            <div className="projectTools">
              Technologies Used:&nbsp;
              <button>JavaScript</button> <button>Angular</button>
              <button>Node.JS</button>
              <button>MongoDB</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> Heroku site may take time to connect.
              </span>
            </div>
            <div className="projectLinks">
              <a href="https://quiet-cliffs-46230.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Visit Site <VisitIcon></VisitIcon>
              </a>
              <a href="https://github.com/JackyTea/Real-Time-Polling-Application" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
          <div className="projectCard">
            <img src="https://doc-0o-bg-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/r5j48oqjr0hkp35k6qafundgb7niocsl/1576548000000/07294837811039641421/*/1wmlDv3voZdoexaP4G2KfN-13nj44Dn9S"></img>
            <h1>Arduino Socket Remote Controller</h1>
            <br />
            <p>
              An interface to execute commands remotely onto an Arduino
              microcontroller via a server-client TCP/IP connection. The
              commands are executed with a serial port library that allows
              received data packets to be processed into the appropriate format.
              The library feeds data via a USB connection to the Arduino once
              the client has sent a command to the controlling server module. In
              this iteration, the controlled system is an LED circuit.
            </p>
            <br />
            <br />
            <div className="projectTools">
              Technologies Used:&nbsp;
              <button>C++</button> <button>WinSock</button>{" "}
              <button>Arduino</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No notes here.
              </span>
            </div>
            <div className="projectLinks">
              <a className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </a>
              <a href="https://github.com/JackyTea/Arduino-Socket-Controller" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectCard">
            <img src="https://doc-0g-bg-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/cl85d3ru0s58v4dolh1pk00arfj8cvlt/1576548000000/07294837811039641421/*/1uki6Z6bbngSq6mrYQ6cTq0Ag2yceSZeN"></img>
            <h1>Daemonized Keyboard Logger</h1>
            <br />
            <p>
              A network driven application that utilizes SSH to inject a
              targeted machine with keyboard logging malware to record
              keystrokes. The logging malware runs in the background for a
              indefinite amount of time or until a "kill" command is sent from
              the controlling daemon module. All data collected is then sent
              back via a discrete SFTP connection.
            </p>
            <br />
            <div className="projectTools">
              Technologies Used:&nbsp;
              <button>Python 3</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No notes here.
              </span>
            </div>
            <div className="projectLinks">
              <a className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </a>
              <a className="unavailable">
                Source Code Unavailable <XIcon></XIcon>
              </a>
            </div>
          </div>
          <div className="projectCard">
            <img src="https://doc-0o-bg-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/r5j48oqjr0hkp35k6qafundgb7niocsl/1576548000000/07294837811039641421/*/1wmlDv3voZdoexaP4G2KfN-13nj44Dn9S"></img>
            <h1>Data Processing Assembly Line</h1>
            <br />
            <p>
              A server-client system that processes data read from configuration
              files and csv files. Data is serialized to optimize transport
              before being processed in the backend to complete an assembly line
              request. All processed data is then printed to the terminal on
              both the client and server ends and into files for logging
              purposes.
            </p>
            <br />
            <br />
            <div className="projectTools">
              Technologies Used:&nbsp;
              <button>Java</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No notes here.
              </span>
            </div>
            <div className="projectLinks">
              <a className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </a>
              <a href="https://github.com/JackyTea/Make-It-Rain" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectCard">
            <img src="https://doc-0g-bg-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/cl85d3ru0s58v4dolh1pk00arfj8cvlt/1576548000000/07294837811039641421/*/1uki6Z6bbngSq6mrYQ6cTq0Ag2yceSZeN"></img>
            <h1>Discord Logger Bot</h1>
            <br />
            <p>
              A Node.JS script designed to log messages written in a designated
              Discord server. The messages are saved to persistent storage in a
              MongoDB database for historical records. Messages are
              distinguished by what user and channel they are sent in, allowing
              for ease of querying.
            </p>
            <br />
            <div className="projectTools">
              Technologies Used:&nbsp;
              <button>JavaScript</button> <button>Node.JS</button>
              <button>Discord.JS</button> <button>MongoDB</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No notes here.
              </span>
            </div>
            <div className="projectLinks">
              <a className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </a>
              <a href="https://github.com/JackyTea/Logger-Bot" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
          <div className="projectCard">
            <img src="https://doc-0o-bg-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/r5j48oqjr0hkp35k6qafundgb7niocsl/1576548000000/07294837811039641421/*/1wmlDv3voZdoexaP4G2KfN-13nj44Dn9S"></img>
            <h1>Personal Portfolio Site</h1>
            <br />
            <p>
              A personal site I made for showcasing recent projects and
              practicing React. Originally making use of React routing, the
              functinality was eventually overhauled for a single page approach
              for the sake of simplicity and ease of navigation for the visitor.
              This site is a personal experiment with the React library.
            </p>
            <br />
            <br />
            <div className="projectTools">
              Technologies Used:&nbsp;
              <button>JavaScript</button> <button>Node.JS</button>
              <button>React</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No notes here.
              </span>
            </div>
            <div className="projectLinks">
              <a className="here">
                You're Already Here <EyeIcon></EyeIcon>
              </a>
              <a href="https://github.com/JackyTea/Portfolio-Site" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
