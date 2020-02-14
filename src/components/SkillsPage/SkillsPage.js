import React, { Component } from "react";
import { ReactComponent as CPPIcon } from "../../images/icons/cppIcon.svg";
import { ReactComponent as PythonIcon } from "../../images/icons/pythonIcon.svg";
import { ReactComponent as JSIcon } from "../../images/icons/jsIcon.svg";
import { ReactComponent as JavaIcon } from "../../images/icons/javaIcon.svg";
import { ReactComponent as DartIcon } from "../../images/icons/dartIcon.svg";
import { ReactComponent as DataStructIcon } from "../../images/icons/dataStructIcon.svg";
import { ReactComponent as DatabaseIcon } from "../../images/icons/databaseIcon.svg";
import { ReactComponent as LinuxIcon } from "../../images/icons/linuxIcon.svg";
import { ReactComponent as AgileIcon } from "../../images/icons/agileIcon.svg";
import { ReactComponent as OOPIcon } from "../../images/icons/oopIcon.svg";
import { ReactComponent as NodeJSIcon } from "../../images/icons/nodeJSIcon.svg";
import { ReactComponent as ReactIcon } from "../../images/icons/reactIcon.svg";
import { ReactComponent as AngularIcon } from "../../images/icons/angularIcon.svg";
import { ReactComponent as MongoIcon } from "../../images/icons/mongoIcon.svg";
import { ReactComponent as FlutterIcon } from "../../images/icons/flutterIcon.svg";
import { ReactComponent as AndroidIcon } from "../../images/icons/androidIcon.svg";
import { ReactComponent as MicrochipIcon } from "../../images/icons/chipIcon.svg";
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
        {/*
        <div className="landingSection">
          <div className="mainTitle">
            <h1>Skills</h1>
            <p>
              Some stuff I happen to know. <br /> Always trying to improve.
            </p>
          </div>
        </div>
        */}
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
              onClick={() => this.toggleContent("b2", "fundamentals", "s2")}
            >
              Fundamentals<span id="s2">▼</span>
            </button>
            <div className="content" id="fundamentals">
              <div className="skillItem">
                <DataStructIcon></DataStructIcon>
                <div className="desc">
                  <h1>Data Structures and Algorithms</h1>
                  <p>
                    Always working on strengthening my knowledge in this area.
                    Familiar with common data structures such as arrays, linked
                    lists, binary search trees, AVL trees, hash tables, graphs,
                    stacks, queues, sorting algorithms, etc...
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <OOPIcon></OOPIcon>
                <div className="desc">
                  <h1>Object Oriented Programming and Design Patterns</h1>
                  <p>
                    Highly proficient in the fundamentals of object-oriented principles,
                    UML diagrams and modular design. Familiar with commonly used creational,
                    structural and behavioural design patterns. Strong in object-oriented
                    programming languages such as C++, JavaScript, Python, Dart and Java.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <DatabaseIcon></DatabaseIcon>
                <div className="desc">
                  <h1>Database Design and SQL</h1>
                  <p>
                    Worked with programs such as Oracle Database and Microsoft
                    SQL Server to design and develop databases for various
                    projects. Familiar with SQL queries, cursors, keys and
                    PL/SQL.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <LinuxIcon></LinuxIcon>
                <div className="desc">
                  <h1>Linux</h1>
                  <p>
                    Experienced with Linux distros such as Ubuntu, Mint and
                    Kali. Familiar with the Linux command line and file system.
                    Basic experience in BASH scripting.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <AgileIcon></AgileIcon>
                <div className="desc">
                  <h1>Agile Development Methodology</h1>
                  <p>
                    Familiar with iterative development and the process of
                    SCRUM. Experienced through school capstone project where
                    weekly development goals were to be met and constant testing
                    was done on a large code base.
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
                    A new platform I have started learning to implement
                    cross-platform mobile applications. Still learning more
                    about Dart and the Flutter system.
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
                <MicrochipIcon></MicrochipIcon>
                <div className="desc">
                  <h1>Circuit Design</h1>
                  <p>
                    Familiar with prototyping simple series and parallel
                    circuits with the use of Arduino components on a breadboard.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <ArduinoIcon></ArduinoIcon>
                <div className="desc">
                  <h1>Arduino</h1>
                  <p>
                    Familiar with the Arduino IDE and working with common
                    Arduino components to build simple projects.
                  </p>
                </div>
              </div>
              <div className="skillItem">
                <VexIcon></VexIcon>
                <div className="desc">
                  <h1>VEX</h1>
                  <p>
                    Designed and built VEX robots for various competitions.
                    Limited proficiency in Robot C and programming autonomous
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
        {/*<FooterBar></FooterBar>*/}
      </div>
    );
  }
}

export default SkillsPage;
