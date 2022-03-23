import React, { Component } from "react";
import { ReactComponent as GithubIcon } from "../../images/projectsPage/githubIcon.svg";
import { ReactComponent as VisitIcon } from "../../images/projectsPage/visitIcon.svg";
import MockStocks from "../../screenshots/Mock_Stocks.svg";
import GridLock from "../../screenshots/GridLock_Square.svg";
import WebGL from "../../screenshots/WebGL_Square.svg";
import ComputerVision from "../../screenshots/ComputerVision_Square.svg";
import "./ProjectsPage.css";

class ProjectsPage extends Component {
  state = {};

  render() {
    return (
      <div className="ProjectsPage">
        <div className="ProjectsPageTitle">
          <h1>Projects</h1>
        </div>
        <div className="ProjectContainer">
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={MockStocks} alt="Mock Stocks Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Mock Stocks Trading Platform</h1>
              <ul>
              <li>Socket.IO</li>
              <li>MERN</li>
              </ul>
              <p className="p-6">MERN stack simulated stock trading platform with real time price updates.</p>
            </div>
            <div className="LinkCard">
              <a href="https://epic-swanson-085a9a.netlify.app/" target="_blank"
                rel="noopener noreferrer">
                <button aria-label="live demo">Live Demo &nbsp;<VisitIcon></VisitIcon></button></a>
              <a href="https://github.com/JackyTea/Mock-Stocks" target="_blank"
                rel="noopener noreferrer" className="gitLink">
                <button aria-label="view source">Source Code &nbsp;<GithubIcon></GithubIcon></button></a>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={GridLock} alt="GridLock Pathfinder Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Pathfinding Algorithm Visualizer</h1>
              <ul>
                <li>Node.JS</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
              <p className="p-6">Finds the shortest path between 2 points on a 2D matrix.</p>
            </div>
            <div className="LinkCard">
              <a href="https://jackytea.github.io/GH_Gridlock_Pathfinder/" target="_blank"
                rel="noopener noreferrer">
                <button aria-label="live demo">Live Demo &nbsp;<VisitIcon></VisitIcon></button></a>
              <a href="https://github.com/JackyTea/Gridlock-Pathfinder" target="_blank"
                rel="noopener noreferrer" className="gitLink">
                <button aria-label="view source">Source Code &nbsp;<GithubIcon></GithubIcon></button></a>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={WebGL} alt="WebGL Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>WebGL First Person Render</h1>
              <ul>
                <li>WebGL</li>
                <li>Three.JS</li>
              </ul>
              <p>3D First Person Render in a browser. <strong>(Keyboard needed to interact)</strong></p>
            </div>
            <div className="LinkCard">
              <a href="https://silly-shirley-309cb3.netlify.app/" target="_blank"
                rel="noopener noreferrer">
                <button aria-label="live demo">Live Demo &nbsp;<VisitIcon></VisitIcon></button></a>
              <a href="https://github.com/JackyTea/WebGL-First-Person-Render" target="_blank"
                rel="noopener noreferrer" className="gitLink">
                <button aria-label="view source">Source Code &nbsp;<GithubIcon></GithubIcon></button></a>
            </div>
          </div>
          <div className="ProjectCard">
            <div className="ProjectLogo">
              <img src={ComputerVision} alt="Discord Logger Bot Demo"></img>
            </div>
            <div className="ProjectDescription">
              <h1>Computer Vision Algorithm Evaluator</h1>
              <ul>
                <li>C++</li>
                <li>OpenCV</li>
              </ul>
              <p>Determine the accuracy of a computer vision algorithm.</p>
            </div>
            <div className="LinkCard">
              <a href="https://raw.githubusercontent.com/JackyTea/Computer-Vision-Algorithm-Evaluator/master/demos/perfEval.gif" target="_blank"
                rel="noopener noreferrer">
                <button aria-label="live demo">Demo GIF &nbsp;<VisitIcon></VisitIcon></button></a>
              <a href="https://github.com/JackyTea/Computer-Vision-Algorithm-Evaluator" target="_blank"
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
