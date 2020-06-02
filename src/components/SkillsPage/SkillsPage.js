import React, { Component } from "react";
import { ReactComponent as CPPIcon } from "../../images/icons/cppIcon.svg";
import { ReactComponent as CSIcon } from "../../images/icons/csIcon.svg";
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
import { ReactComponent as RaspberryIcon } from "../../images/icons/raspberryPiIcon.svg";
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
  
  render() {
    return (
      <div className="SkillsPage">
        <div className="SkillsPageTitle">
          <h1>Skills</h1>
        </div>
        <div className="SkillsContainer">
          <div className="SkillsCategory">
            <div className="SkillsCategoryTitle">
              <h1>Programming Languages</h1>
            </div>
            <div className="SkillsList">
              <ul>
                <li><PythonIcon></PythonIcon> &nbsp;Python &nbsp;</li>
                <li><CPPIcon></CPPIcon> &nbsp;C++ &nbsp;</li>
                <li><JSIcon></JSIcon> &nbsp;JavaScript &nbsp;</li>
              </ul>
              <ul>
              <li><CSIcon></CSIcon> &nbsp;C# &nbsp;</li>
                <li><DartIcon></DartIcon> &nbsp;Dart &nbsp;</li>
                <li><JavaIcon></JavaIcon> &nbsp;Java &nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="SkillsCategory">
            <div className="SkillsCategoryTitle">
              <h1>Web Development</h1>
            </div>
            <div className="SkillsList">
              <ul>
                <li><ReactIcon></ReactIcon> &nbsp;React &nbsp;</li>
                <li><AngularIcon></AngularIcon> &nbsp;Angular &nbsp;</li>
                <li><NodeJSIcon></NodeJSIcon> &nbsp;Node.JS &nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="SkillsCategory">
            <div className="SkillsCategoryTitle">
              <h1>Mobile Development</h1>
            </div>
            <div className="SkillsList">
              <ul>
                <li><FlutterIcon></FlutterIcon> &nbsp;Flutter &nbsp;</li>
                <li><ReactIcon></ReactIcon> &nbsp;React Native &nbsp;</li>
                <li><AndroidIcon></AndroidIcon> &nbsp;Android Studio &nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="SkillsCategory">
            <div className="SkillsCategoryTitle">
              <h1>Database Management</h1>
            </div>
            <div className="SkillsList">
              <ul>
                <li><MongoIcon></MongoIcon> &nbsp;MongoDB &nbsp;</li>
                <li><FirebaseIcon></FirebaseIcon> &nbsp;Cloud Firestore &nbsp;</li>
                <li><MySQLIcon></MySQLIcon> &nbsp;PHPMyAdmin &nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="SkillsCategory">
            <div className="SkillsCategoryTitle">
              <h1>Embedded Systems</h1>
            </div>
            <div className="SkillsList">
              <ul>
                <li><ArduinoIcon></ArduinoIcon> &nbsp;Arduino &nbsp;</li>
                <li><RaspberryIcon></RaspberryIcon> &nbsp;Raspberry Pi &nbsp;</li>
                <li><VexIcon></VexIcon> &nbsp;VEX Robotics &nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="SkillsCategory">
            <div className="SkillsCategoryTitle">
              <h1>User Interface Design</h1>
            </div>
            <div className="SkillsList">
              <ul>
                <li><XDIcon></XDIcon> &nbsp;Adobe XD &nbsp;</li>
                <li><IllustratorIcon></IllustratorIcon> &nbsp;Adobe Illustrator &nbsp;</li>
                <li><PhotoshopIcon></PhotoshopIcon> &nbsp;Adobe Photoshop &nbsp;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsPage;
