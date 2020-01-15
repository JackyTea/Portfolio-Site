import React, { Component } from "react";
import { ReactComponent as GithubIcon } from "../../images/projectsPage/githubIcon.svg";
import { ReactComponent as VisitIcon } from "../../images/projectsPage/visitIcon.svg";
import { ReactComponent as XIcon } from "../../images/projectsPage/xIcon.svg";
import { ReactComponent as EyeIcon } from "../../images/projectsPage/eyeIcon.svg";
import RealTimePollingDemo from "../../screenshots/realTimePolling.png";
import MakeItRainDemo from "../../screenshots/makeItRain.png";
import PortfolioSiteDemo from "../../screenshots/portfolioSite.png";
import StudentEnrolmentDemo from "../../screenshots/studentEnrolment.png";
import DaemonKeylog from "../../screenshots/daemonKeylog.png";
import ArduinoSocket from "../../screenshots/arduinoSocket.png";
import AssemblyLine from "../../screenshots/assemblyLine.png";
import DiscordLogger from "../../screenshots/discordLogger.png"
import QuestionMarks from "../../screenshots/questionMarks.png";
import SudokuSolver from "../../screenshots/sudokuSolver.png";
import "./ProjectsPage.css";

class ProjectsPage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Jacky Tea | Projects";
  }

  falsifyLink() {
    return false;
  }

  render() {
    return (
      <div className="ProjectsPage">
        <h1 className="title">Projects</h1>
        <div className="projectContainer">
          <div className="projectCard">
            <img src={RealTimePollingDemo} alt="Real Time Polling Demo PNG"></img>
            <h1>Real Time Polling Application</h1>
            <br />
            <br />
            <br/>
            <div className="projectTools">
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
            <img src={MakeItRainDemo} alt="Make It Rain App PNG"></img>
            <h1>Make It Rain (Browser Game)</h1>
            <br />
            <br />
            <br />
            <div className="projectTools">
              <button>JavaScript</button> <button>HTML5</button><button>CSS3</button><button>Node.JS</button>
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
            <img src={StudentEnrolmentDemo} alt="Student Enrolment App PNG"></img>
            <h1>Student Enrolment Application</h1>
            <br />
            <br />
            <br/>
            <div className="projectTools">
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
              <a href="https://github.com/JackyTea/Student-Enrolment-App" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
          <div className="projectCard">
            <img src={ArduinoSocket} alt="Arduino Socket PNG"></img>
            <h1>Arduino Socket Remote Controller</h1>
            <br />
            <br />
            <br />
            <div className="projectTools">
              <button>C++</button> <button>WinSock</button>{" "}
              <button>Arduino</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No live demo available.
              </span>
            </div>
            <div className="projectLinks">
              <button className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </button>
              <a href="https://github.com/JackyTea/Arduino-Socket-Controller" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectCard">
            <img src={DaemonKeylog} alt="Key log PNG"></img>
            <h1>Daemonized Keyboard Logger</h1>
            <br />
            <br />
            <br/>
            <div className="projectTools">
              <button>Python 3</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No live demo available.
              </span>
            </div>
            <div className="projectLinks">
              <button className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </button>
              <button className="unavailable">
                Source Code Unavailable <XIcon></XIcon>
              </button>
            </div>
          </div>
          <div className="projectCard">
            <img src={AssemblyLine} alt="Assembly line png"></img>
            <h1>Data Processing Assembly Line</h1>
            <br />
            <br />
            <br />
            <div className="projectTools">
              <button>Java</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No live demo available.
              </span>
            </div>
            <div className="projectLinks">
              <button className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </button>
              <a href="https://github.com/JackyTea/Car-Assembly-Line" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectCard">
            <img src={QuestionMarks} alt="Question PNG"></img>
            <h1>Mobile Development Capstone Project</h1>
            <br />
            <br />
            <br />
            <div className="projectTools">
              <button>Flutter</button> <button>Cloud Firestore</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No live demo available.
              </span>
            </div>
            <div className="projectLinks">
              <button className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </button>
              <button className="unavailable">
                Source Code Unavailable <XIcon></XIcon>
              </button>
            </div>
          </div>
          <div className="projectCard">
            <img src={SudokuSolver} alt="Question png"></img>
            <h1>Recursive Sudoku Solver</h1>
            <br />
            <br />
            <br />
            <div className="projectTools">
            <button>Python 3</button> 
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No live demo available.
              </span>
            </div>
            <div className="projectLinks">
            <button className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </button>
              <a href="https://github.com/JackyTea/Recursive-Sudoku-Server" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectCard">
            <img src={DiscordLogger} alt="Discord logger bot PNG"></img>
            <h1>Discord Logger Bot</h1>
            <br />
            <br />
            <br />
            <div className="projectTools">
              <button>JavaScript</button> <button>Node.JS</button>
              <button>Discord.JS</button> <button>MongoDB</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No live demo available.
              </span>
            </div>
            <div className="projectLinks">
              <button className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </button>
              <a href="https://github.com/JackyTea/Logger-Bot" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
          <div className="projectCard">
            <img src={PortfolioSiteDemo} alt="Portfolio site png"></img>
            <h1>Personal Portfolio Site</h1>
            <br />
            <br />
            <br />
            <div className="projectTools">
              <button>JavaScript</button> <button>Node.JS</button>
              <button>React</button>
              <br />
              <span style={{ color: "green" }}>
                <b>Note:</b> Live demo here.
              </span>
            </div>
            <div className="projectLinks">
              <button className="here">
                You're Already Here <EyeIcon></EyeIcon>
              </button>
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
