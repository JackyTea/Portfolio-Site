import React, { Component } from "react";
import { ReactComponent as GithubIcon } from "../../images/projectsPage/githubIcon.svg";
import { ReactComponent as VisitIcon } from "../../images/projectsPage/visitIcon.svg";
import { ReactComponent as XIcon } from "../../images/projectsPage/xIcon.svg";
import RealTimePollingDemo from "../../screenshots/Real_Time_Polling.svg";
import MakeItRainDemo from "../../screenshots/Make_It_Rain.svg";
import StudentEnrolmentDemo from "../../screenshots/Student_Enrolment.svg";
import ArduinoSocket from "../../screenshots/Arduino_Socket.svg";
import DiscordLogger from "../../screenshots/Discord_Logger.svg"
import GridLock from "../../screenshots/Gridlock_Pathfinder.svg";
import PlaceHolder from "../../screenshots/placeholder.svg";
import "./ProjectsPage.css";

class ProjectsPage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Jacky Tea | Projects";
  }

  render() {
    return (
      <div className="ProjectsPage">
        <div className="ProjectsPageTitle">
          <h1>Projects</h1>
        </div>
        <div className="ProjectContainer">
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={PlaceHolder} alt="Real Time Polling Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Real Time Polling Application</h1>
              <ul>
                <li>Node.JS</li>
                <li>MongoDB</li>
                <li>Pusher API</li>
              </ul>
              <p>An asynchronous web application that updates changes to polling results without having to refresh the page.</p>
            </div>
            <div className="LinkCard">
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Live Demo</button></a>
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Source Code</button></a>
              <p className="warning">Heroku site might take time to connect. Find out why <a href="https://blog.heroku.com/app_sleeping_on_heroku">here.</a></p>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={PlaceHolder} alt="Real Time Polling Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Pathfinding Algorithm Visualizer</h1>
              <ul>
                <li>Node.JS</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
              <p>A breadth-first search visualizer that finds the shortest path between two user-determined points on a grid.</p>
            </div>
            <div className="LinkCard">
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Live Demo</button></a>
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Source Code</button></a>
              <p className="warning">Heroku site might take time to connect. Find out why <a href="https://blog.heroku.com/app_sleeping_on_heroku">here.</a></p>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={PlaceHolder} alt="Real Time Polling Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Student Enrolment Application</h1>
              <ul>
                <li>Angular</li>
                <li>Node.JS</li>
                <li>MongoDB</li>
              </ul>
              <p>A full-stack web application that allows students to manage their accounts and build their timetables for school.</p>
            </div>
            <div className="LinkCard">
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Live Demo</button></a>
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Source Code</button></a>
              <p className="warning">Heroku site might take time to connect. Find out why <a href="https://blog.heroku.com/app_sleeping_on_heroku">here.</a></p>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={PlaceHolder} alt="Real Time Polling Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>DOM Manipulation Browser Game</h1>
              <ul>
                <li>Node.JS</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
              <p>A JavaScript browser game that takes advantage of mouse events to drop falling objects from where the user clicks.</p>
            </div>
            <div className="LinkCard">
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Live Demo</button></a>
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Source Code</button></a>
              <p className="warning">Heroku site might take time to connect. Find out why <a href="https://blog.heroku.com/app_sleeping_on_heroku">here.</a></p>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={PlaceHolder} alt="Real Time Polling Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Discord Channel Logger Bot</h1>
              <ul>
                <li>Node.JS</li>
                <li>MongoDB</li>
                <li>Discord.JS</li>
              </ul>
              <p>A Discord bot that logs how many times a user has message a certain channel to a MongoDB cluster.</p>
            </div>
            <div className="LinkCard">
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Source Code</button></a>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={PlaceHolder} alt="Real Time Polling Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Arduino Socket Remote Controller</h1>
              <ul>
                <li>C++</li>
                <li>Arduino</li>
                <li>Winsock API</li>
              </ul>
              <p>A TCP/IP server that sends commands to an Arduino board that parses the command using the serial port.</p>
            </div>
            <div className="LinkCard">
              <a href="jackytea.com" target="_blank"
                rel="noopener noreferrer">
                <button>Source Code</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
