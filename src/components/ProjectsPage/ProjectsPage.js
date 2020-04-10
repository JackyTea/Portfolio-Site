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
            <div className="projectTools">
              <button aria-label="JavaScript">JavaScript</button> <button>Node.JS</button>
              <button aria-label="MongoDB">MongoDB</button>
              <button aria-label="Pusher API">Pusher API</button>
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
            <img src={GridLock} alt="Gridlock App PNG"></img>
            <h1>Gridlock Pathfinder</h1>
            <div className="projectTools">
              <button aria-label="JavaScript">JavaScript</button> <button>HTML5</button><button>CSS3</button><button>Node.JS</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> Heroku site may take time to connect.
              </span>
            </div>
            <div className="projectLinks">
              <a href="https://serene-citadel-76223.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Visit Site <VisitIcon></VisitIcon>
              </a>
              <a href="https://github.com/JackyTea/Gridlock-Pathfinder" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <div className="projectCard">
            <img src={StudentEnrolmentDemo} alt="Student Enrolment App PNG"></img>
            <h1>Student Enrolment Application</h1>
            <div className="projectTools">
              <button aria-label="JavaScript">JavaScript</button> <button>Angular</button>
              <button aria-label="Node.JS">Node.JS</button>
              <button aria-label="MongoDB">MongoDB</button>
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
            <img src={MakeItRainDemo} alt="Make It Rain App PNG"></img>
            <h1>Make It Rain (Browser Game)</h1>
            <div className="projectTools">
              <button aria-label="JavaScript">JavaScript</button> <button>HTML5</button><button>CSS3</button><button>Node.JS</button>
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
            <img src={DiscordLogger} alt="Discord logger bot PNG"></img>
            <h1>Discord Logger Bot</h1>
            <div className="projectTools">
              <button aria-label="JavaScript">JavaScript</button> <button>Node.JS</button>
              <button aria-label="Discord.JS">Discord.JS</button> <button>MongoDB</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No live demo available.
              </span>
            </div>
            <div className="projectLinks">
              <button aria-label="No Live Demo" className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </button>
              <a href="https://github.com/JackyTea/Logger-Bot" target="_blank" rel="noopener noreferrer">
                View Source Code <GithubIcon></GithubIcon>
              </a>
            </div>
          </div>
          <div className="projectCard">
            <img src={ArduinoSocket} alt="Arduino Socket PNG"></img>
            <h1>Arduino Socket Remote Controller</h1>
            <div className="projectTools">
              <button aria-label="CPP">C++</button> <button>WinSock</button>{" "}
              <button aria-label="Arduino">Arduino</button>
              <br />
              <span style={{ color: "orangered" }}>
                <b>Note:</b> No live demo available.
              </span>
            </div>
            <div className="projectLinks">
              <button aria-label="No Live Demo" className="unavailable">
                No Live Demo Available <XIcon></XIcon>
              </button>
              <a href="https://github.com/JackyTea/Arduino-Socket-Controller" target="_blank" rel="noopener noreferrer">
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
