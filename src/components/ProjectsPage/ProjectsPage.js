import React, { Component } from "react";
import { ReactComponent as GithubIcon } from "../../images/projectsPage/githubIcon.svg";
import { ReactComponent as VisitIcon } from "../../images/projectsPage/visitIcon.svg";
import { ReactComponent as AngularIcon } from "../../images/icons/angularIcon.svg";
import { ReactComponent as MongoIcon } from "../../images/icons/mongoIcon.svg";
import { ReactComponent as NodeJSIcon } from "../../images/icons/nodeJSIcon.svg";
import { ReactComponent as PusherIcon } from "../../images/icons/pusherIcon.svg";
import { ReactComponent as ArduinoIcon } from "../../images/icons/arduinoIcon.svg";
import { ReactComponent as CPPIcon } from "../../images/icons/cppIcon.svg";
import { ReactComponent as HTMLIcon } from "../../images/icons/htmlIcon.svg";
import { ReactComponent as CSSIcon } from "../../images/icons/cssIcon.svg";
import { ReactComponent as DiscordIcon } from "../../images/icons/discordIcon.svg";
import { ReactComponent as WinsockIcon } from "../../images/icons/winsockIcon.svg";
import RealTimePolling from "../../screenshots/RealTimePolling_Square.svg";
import GridLock from "../../screenshots/GridLock_Square.svg";
import StudentEnroll from "../../screenshots/StudentEnroll_Square.svg";
import MakeItRain from "../../screenshots/MakeItRain_Square.svg";
import DiscordLogger from "../../screenshots/DiscordBot_Square.svg";
import ArduinoController from "../../screenshots/Arduino_Square.svg";
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
              <img src={RealTimePolling} alt="Real Time Polling Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Real Time Polling Application</h1>
              <ul>
                <li><NodeJSIcon></NodeJSIcon> &nbsp;Node.JS</li>
                <li><MongoIcon></MongoIcon> &nbsp;MongoDB</li>
                <li><PusherIcon></PusherIcon> &nbsp;Pusher API</li>
              </ul>
              <p>An asynchronous web application that updates changes to polling results without having to refresh the page.</p>
            </div>
            <div className="LinkCard">
              <a href="https://sheltered-inlet-92987.herokuapp.com/" target="_blank"
                rel="noopener noreferrer">
                <button aria-label="live demo">Live Demo &nbsp;<VisitIcon></VisitIcon></button></a>
              <a href="https://github.com/JackyTea/Real-Time-Polling-Application" target="_blank"
                rel="noopener noreferrer" className="gitLink">
                <button aria-label="view source">Source Code &nbsp;<GithubIcon></GithubIcon></button></a>
              <p className="warning"><b>Notice: </b>Heroku site might take time to connect. Find out why <a href="https://blog.heroku.com/app_sleeping_on_heroku">here.</a></p>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={GridLock} alt="GridLock Pathfinder Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Pathfinding Algorithm Visualizer</h1>
              <ul>
                <li><NodeJSIcon></NodeJSIcon> &nbsp;Node.JS</li>
                <li><HTMLIcon></HTMLIcon> &nbsp;HTML5</li>
                <li><CSSIcon></CSSIcon> &nbsp;CSS3</li>
              </ul>
              <p>A breadth-first search visualizer that finds the shortest path between two user-determined points on a grid.</p>
            </div>
            <div className="LinkCard">
              <a href="https://serene-citadel-76223.herokuapp.com" target="_blank"
                rel="noopener noreferrer">
                <button aria-label="live demo">Live Demo &nbsp;<VisitIcon></VisitIcon></button></a>
              <a href="https://github.com/JackyTea/Gridlock-Pathfinder" target="_blank"
                rel="noopener noreferrer" className="gitLink">
                <button aria-label="view source">Source Code &nbsp;<GithubIcon></GithubIcon></button></a>
              <p className="warning"><b>Notice: </b>Heroku site might take time to connect. Find out why <a href="https://blog.heroku.com/app_sleeping_on_heroku">here.</a></p>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={StudentEnroll} alt="Student Enrollment Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Student Enrolment Application</h1>
              <ul>
                <li><AngularIcon></AngularIcon> &nbsp;Angular</li>
                <li><NodeJSIcon></NodeJSIcon> &nbsp;Node.JS</li>
                <li><MongoIcon></MongoIcon> &nbsp;MongoDB</li>
              </ul>
              <p>A full-stack web application that allows students to manage their accounts and build their timetables for school.</p>
            </div>
            <div className="LinkCard">
              <a href="https://quiet-cliffs-46230.herokuapp.com" target="_blank"
                rel="noopener noreferrer">
                <button aria-label="live demo">Live Demo &nbsp;<VisitIcon></VisitIcon></button></a>
              <a href="https://github.com/JackyTea/Student-Enrolment-App" target="_blank"
                rel="noopener noreferrer" className="gitLink">
                <button aria-label="view source">Source Code &nbsp;<GithubIcon></GithubIcon></button></a>
              <p className="warning"><b>Notice: </b>Heroku site might take time to connect. Find out why <a href="https://blog.heroku.com/app_sleeping_on_heroku">here.</a></p>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={MakeItRain} alt="Make It Rain Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>DOM Manipulation Browser Game</h1>
              <ul>
                <li><NodeJSIcon></NodeJSIcon> &nbsp;Node.JS</li>
                <li><HTMLIcon></HTMLIcon> &nbsp;HTML5</li>
                <li><CSSIcon></CSSIcon> &nbsp;CSS3</li>
              </ul>
              <p>A JavaScript browser game that takes advantage of mouse events to drop falling objects from where the user clicks.</p>
            </div>
            <div className="LinkCard">
              <a href="https://cryptic-river-57921.herokuapp.com" target="_blank"
                rel="noopener noreferrer">
                <button aria-label="live demo">Live Demo &nbsp;<VisitIcon></VisitIcon></button></a>
              <a href="https://github.com/JackyTea/Make-It-Rain" target="_blank"
                rel="noopener noreferrer" className="gitLink">
                <button aria-label="view source">Source Code &nbsp;<GithubIcon></GithubIcon></button></a>
              <p className="warning"><b>Notice: </b>Heroku site might take time to connect. Find out why <a href="https://blog.heroku.com/app_sleeping_on_heroku">here.</a></p>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={DiscordLogger} alt="Discord Logger Bot Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Discord Channel Logger Bot</h1>
              <ul>
                <li><NodeJSIcon></NodeJSIcon> &nbsp;Node.JS</li>
                <li><MongoIcon></MongoIcon> &nbsp;MongoDB</li>
                <li><DiscordIcon></DiscordIcon> &nbsp;Discord.JS</li>
              </ul>
              <p>A Discord bot that logs how many times a user has message a certain channel to a MongoDB cluster.</p>
            </div>
            <div className="LinkCard">
              <a href="https://github.com/JackyTea/Logger-Bot" target="_blank"
                rel="noopener noreferrer" className="gitLink">
                <button aria-label="view source">Source Code &nbsp;<GithubIcon></GithubIcon></button></a>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={ArduinoController} alt="Arduino Controller Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Arduino Socket Remote Controller</h1>
              <ul>
                <li><CPPIcon></CPPIcon> &nbsp;C++</li>
                <li><ArduinoIcon></ArduinoIcon> &nbsp;Arduino</li>
                <li><WinsockIcon></WinsockIcon> &nbsp;Windows Socket API</li>
              </ul>
              <p>A TCP/IP server that sends commands to an Arduino board that parses the command using the serial port.</p>
            </div>
            <div className="LinkCard">
              <a href="https://github.com/JackyTea/Arduino-Socket-Controller" target="_blank"
                rel="noopener noreferrer" className="gitLink">
                <button aria-label="view source">Source Code &nbsp;<GithubIcon></GithubIcon></button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
