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
                    A versatile, general-purpose programming language that I
                    have used for many school assignments and personal projects
                    alike. Proficient in the memory management and object
                    oriented aspects of this language. Familiar with the STL and
                    WinSock libraries for various applications.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <PythonIcon></PythonIcon>
                <div className="desc">
                  <h1>Python</h1>
                  <p>
                    My go-to language for practicing coding interview questions
                    due to its simplistic syntax and overall utility. Familiar
                    with the fundamentals of Python 3 and its use for scripting
                    and cybersecurity. Have also dabbled in some libraries such
                    as MatPlotLib and PySerial.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <JSIcon></JSIcon>
                <div className="desc">
                  <h1>JavaScript</h1>
                  <p>
                    The main language for front-end web development and one of
                    the first programming languages I learned. Familiar with
                    concepts such as closure and using JavaScript to manipulate
                    the Document Object Model (DOM) on a webpage.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <JavaIcon></JavaIcon>
                <div className="desc">
                  <h1>Java</h1>
                  <p>
                    A powerful language that helped me strengthen my grasp on
                    object oriented programming and learn more about application
                    development for mobile and desktop environments. Familiar
                    with the use of sockets in Java, object serialization and
                    using the JavaFX platform.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <DartIcon></DartIcon>
                <div className="desc">
                  <h1>Dart</h1>
                  <p>
                    The language I use for Flutter mobile development. It is client-optimized,
                    object oriented and has also helped me strengthen my OOP fundamentals alongside
                    using C++ and Python. Familiar with the Dart class system and how state is handled
                    in this language.
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
                    Used in back-end development for persistent data storage,
                    retrieval, modification and removal. Familiar with the
                    schema system, the Mongo shell and utlizing Node.JS's HTTP
                    module to perform operations on a connected MongoDB
                    database.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <FirebaseIcon></FirebaseIcon>
                <div className="desc">
                  <h1>Firebase</h1>
                  <p>
                    Google's document-based No-SQL database. Utilized in my
                    capstone project for real time updates of user information
                    and account authorization.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <MySQLIcon></MySQLIcon>
                <div className="desc">
                  <h1>MySQL</h1>
                  <p>
                    Familiar with the phpMyAdmin dashboard and creating relational
                    databases to link to back-end php scripts for handling persistent data.
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
                    Familiar with the the virtual DOM, JSX, props, component
                    state and modular design principles of this front-end
                    library. This website happens to be built using the React
                    library.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <AngularIcon></AngularIcon>
                <div className="desc">
                  <h1>Angular</h1>
                  <p>
                    Used this framework for a dynamic web application that
                    communicated via a web service. Proficient with two-way
                    binding, interpolation, Angular services and the basic
                    fundamentals of TypeScript.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <NodeJSIcon></NodeJSIcon>
                <div className="desc">
                  <h1>Node.JS</h1>
                  <p>
                    A JavaScript run-time environment I use for building RESTful
                    APIs to perform CRUD operations on web applications.
                    Familiar with modularized design, exports and the HTTP
                    module.
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
                    Familiar with the layout system, using Java to implement
                    application logic and manipulating the user interface via
                    XML.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <FlutterIcon></FlutterIcon>
                <div className="desc">
                  <h1>Flutter</h1>
                  <p>
                    Cross platform mobile development framework I used for
                    my Capstone project. Allows for one codebase to provide for
                    web, Android and iOS ecosystems. Familiar with the fundamentals of Flutter.
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
                    Familiar with the Arduino IDE and circuit design utilized to build hardware projects.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <VexIcon></VexIcon>
                <div className="desc">
                  <h1>VEX Robotics</h1>
                  <p>
                    Designed and built VEX robots for various competitions.
                    Proficiency in Robot C and programming autonomous
                    functionality on VEX cores.
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
                    icon design. Still learning more about more advanced
                    features in Adobe Illustrator.
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
