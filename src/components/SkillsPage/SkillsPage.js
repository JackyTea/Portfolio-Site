import React, { Component } from "react";
import { ReactComponent as CPPIcon } from "../../images/icons/cppIcon.svg";
import { ReactComponent as PythonIcon } from "../../images/icons/pythonIcon.svg";
import { ReactComponent as JSIcon } from "../../images/icons/jsIcon.svg";
import { ReactComponent as JavaIcon } from "../../images/icons/javaIcon.svg";
import { ReactComponent as DartIcon } from "../../images/icons/dartIcon.svg";
import { ReactComponent as NodeJSIcon } from "../../images/icons/nodeJSIcon.svg";
import { ReactComponent as ReactIcon } from "../../images/icons/reactIcon.svg";
import { ReactComponent as AngularIcon } from "../../images/icons/angularIcon.svg";
import { ReactComponent as MongoIcon } from "../../images/icons/mongoIcon.svg";
import { ReactComponent as FirebaseIcon } from "../../images/icons/firebaseIcon.svg";
import { ReactComponent as MySQLIcon } from "../../images/icons/mysqlIcon.svg";
import { ReactComponent as FlutterIcon } from "../../images/icons/flutterIcon.svg";
import { ReactComponent as AndroidIcon } from "../../images/icons/androidIcon.svg";
import { ReactComponent as ArduinoIcon } from "../../images/icons/arduinoIcon.svg";
import { ReactComponent as VexIcon } from "../../images/icons/vexIcon.svg";
import { ReactComponent as IllustratorIcon } from "../../images/icons/illustratorIcon.svg";
import { ReactComponent as PhotoshopIcon } from "../../images/icons/photoshopIcon.svg";
import { ReactComponent as XDIcon } from "../../images/icons/xdIcon.svg";
import "./SkillsPage.css";

class SkillsPage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Jacky Tea | Skills";
  }

  toggleContent(buttonID, contentId, spanId) {
    let buttonDiv = document.getElementById(buttonID);
    let contentDiv = document.getElementById(contentId);
    let spanSymbol = document.getElementById(spanId);
    let closeSymbol = document.createTextNode("✖");
    let dropSymbol = document.createTextNode("▼");
    if (
      contentDiv.style.display === "none" ||
      contentDiv.style.display === ""
    ) {
      buttonDiv.style.boxShadow =
        "0 -0.5vh 1.5vh rgba(0, 0, 0, 0.12), 0 -0.5vh 1vh rgba(0, 0, 0, 0.24)";
      buttonDiv.style.border = "none";
      buttonDiv.style.borderTop = "1px solid rgba(0, 0, 0, 0.158)";
      buttonDiv.style.borderLeft = "1px solid rgba(0, 0, 0, 0.158)";
      buttonDiv.style.borderRight = "1px solid rgba(0, 0, 0, 0.158)";
      contentDiv.style.display = "block";
      spanSymbol.innerHTML = "";
      spanSymbol.appendChild(closeSymbol);
    } else {
      buttonDiv.style.boxShadow =
        "0 1.5vh 1.5vh rgba(0, 0, 0, 0.12), 0 1vh 1vh rgba(0, 0, 0, 0.24)";
      buttonDiv.style.border = "1px solid rgba(0, 0, 0, 0.158)";
      contentDiv.style.display = "none";
      spanSymbol.innerHTML = "";
      spanSymbol.appendChild(dropSymbol);
    }
  }

  render() {
    return (
      <div className="SkillsPage">
        <h1 className="title">Skills</h1>
        <div className="skillsSection">
          <div className="skillContainer">
            <button
              id="b1"
              className="collapse"
              onClick={() => this.toggleContent("b1", "languages", "s1")}
            >
              Programming Languages<span id="s1">▼</span>
            </button>
            <div className="content" id="languages">
              <div className="skillItem">
                <CPPIcon></CPPIcon>
                <div className="desc">
                  <h1>C++</h1>
                  <p>
                    Proficient in C++ fundamentals, the STL library and the Winsock Socket API.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <PythonIcon></PythonIcon>
                <div className="desc">
                  <h1>Python</h1>
                  <p>
                    Proficient in Python fundamentals, familiar with NumPy and Matplotlib.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <JSIcon></JSIcon>
                <div className="desc">
                  <h1>JavaScript</h1>
                  <p>
                    Proficient in JavaScript fundamentals, DOM manipulation and ES6.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <JavaIcon></JavaIcon>
                <div className="desc">
                  <h1>Java</h1>
                  <p>
                    Proficient in Java fundamentals and JavaFX.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <DartIcon></DartIcon>
                <div className="desc">
                  <h1>Dart</h1>
                  <p>
                    Proficient in Dart fundamentals and the Material Design API.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skillContainer">
            <button
              id="b2"
              className="collapse"
              onClick={() => this.toggleContent("b2", "databases", "s2")}
            >
              Database Design<span id="s2">▼</span>
            </button>
            <div className="content" id="databases">
              <div className="skillItem">
                <MongoIcon></MongoIcon>
                <div className="desc">
                  <h1>MongoDB</h1>
                  <p>
                    Proficient in building RESTful API managers with Mongoose.JS, designing schemas and
                    using the Mongo shell.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <FirebaseIcon></FirebaseIcon>
                <div className="desc">
                  <h1>Firebase</h1>
                  <p>
                    Proficient in designing document-oriented databases with Firebase and setting up
                    authentication with Firebase Authentication.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <MySQLIcon></MySQLIcon>
                <div className="desc">
                  <h1>MySQL</h1>
                  <p>
                    Familiar with the phpMyAdmin dashboard and creating relational
                    databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skillContainer">
            <button
              id="b3"
              className="collapse"
              onClick={() => this.toggleContent("b3", "webdev", "s3")}
            >
              Web Development<span id="s3">▼</span>
            </button>
            <div className="content" id="webdev">
              <div className="skillItem">
                <ReactIcon></ReactIcon>
                <div className="desc">
                  <h1>React</h1>
                  <p>
                    Proficient in React fundamentals, JSX and the Context API.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <AngularIcon></AngularIcon>
                <div className="desc">
                  <h1>Angular</h1>
                  <p>
                    Proficient in Angular fundamentals and Angular services.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <NodeJSIcon></NodeJSIcon>
                <div className="desc">
                  <h1>Node.JS</h1>
                  <p>
                    Proficient in the Express library and HTTP module.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skillContainer">
            <button
              id="b4"
              className="collapse"
              onClick={() => this.toggleContent("b4", "mobiledev", "s4")}
            >
              Mobile Development<span id="s4">▼</span>
            </button>
            <div className="content" id="mobiledev">
              <div className="skillItem">
                <AndroidIcon></AndroidIcon>
                <div className="desc">
                  <h1>Android Studio</h1>
                  <p>
                    Familiar with XML layouts and manipulation via Java classes.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <FlutterIcon></FlutterIcon>
                <div className="desc">
                  <h1>Flutter</h1>
                  <p>
                    Proficient in Flutter fundamentals and the layout system.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <ReactIcon></ReactIcon>
                <div className="desc">
                  <h1>React Native</h1>
                  <p>
                    A new platform I have started learning to implement
                    cross-platform mobile applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skillContainer">
            <button
              id="b5"
              className="collapse"
              onClick={() => this.toggleContent("b5", "robotics", "s5")}
            >
              Embedded Systems<span id="s5">▼</span>
            </button>
            <div className="content" id="robotics">
              <div className="skillItem">
                <ArduinoIcon></ArduinoIcon>
                <div className="desc">
                  <h1>Arduino</h1>
                  <p>
                    Proficient in circuit design and programming in tandem with C++/Python.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <VexIcon></VexIcon>
                <div className="desc">
                  <h1>VEX Robotics</h1>
                  <p>
                    Proficient in building and mechanical design of VEX robots.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skillContainer">
            <button
              id="b6"
              className="collapse"
              onClick={() => this.toggleContent("b6", "uidesign", "s6")}
            >
              User Interface Design<span id="s6">▼</span>
            </button>
            <div className="content" id="uidesign">
              <div className="skillItem">
                <XDIcon></XDIcon>
                <div className="desc">
                  <h1>Adobe XD</h1>
                  <p>
                    Proficient in designing and prototyping applications in
                    Adobe XD, focusing on aesthetics and responsive design.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <IllustratorIcon></IllustratorIcon>
                <div className="desc">
                  <h1>Adobe Illustrator</h1>
                  <p>
                    Familiar working with SVG images for web development and
                    icon design. 
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <PhotoshopIcon></PhotoshopIcon>
                <div className="desc">
                  <h1>Adobe Photoshop</h1>
                  <p>
                    Proficient in using Photoshop to edit images and create
                    graphics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsPage;
