import React, { Component } from "react";
import { ReactComponent as CPPIcon } from "../../images/icons/cppIcon.svg";
import { ReactComponent as PythonIcon } from "../../images/icons/pythonIcon.svg";
import { ReactComponent as JSIcon } from "../../images/icons/jsIcon.svg";
import { ReactComponent as RubyIcon } from "../../images/icons/rubyIcon.svg";
import { ReactComponent as JavaIcon } from "../../images/icons/javaIcon.svg";
import { ReactComponent as DartIcon } from "../../images/icons/dartIcon.svg";
import { ReactComponent as HTMLIcon } from "../../images/icons/htmlIcon.svg";
import { ReactComponent as CSSIcon } from "../../images/icons/cssIcon.svg";
import { ReactComponent as SassIcon } from "../../images/icons/sassIcon.svg";
import { ReactComponent as NodeJSIcon } from "../../images/icons/nodeJSIcon.svg";
import { ReactComponent as DjangoIcon } from "../../images/icons/djangoIcon.svg";
import { ReactComponent as RailsIcon } from "../../images/icons/railsIcon.svg";
import { ReactComponent as ReactIcon } from "../../images/icons/reactIcon.svg";
import { ReactComponent as AngularIcon } from "../../images/icons/angularIcon.svg";
import { ReactComponent as VueIcon } from "../../images/icons/vueIcon.svg";
import { ReactComponent as PostgresqlIcon } from "../../images/icons/postgresqlIcon.svg";
import { ReactComponent as MongoIcon } from "../../images/icons/mongoIcon.svg";
import { ReactComponent as FirebaseIcon } from "../../images/icons/firebaseIcon.svg";
import { ReactComponent as FlutterIcon } from "../../images/icons/flutterIcon.svg";
import { ReactComponent as AndroidIcon } from "../../images/icons/androidIcon.svg";
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
                <li><RubyIcon></RubyIcon> &nbsp;Ruby &nbsp;</li>
                <li><DartIcon></DartIcon> &nbsp;Dart &nbsp;</li>
                <li><JavaIcon></JavaIcon> &nbsp;Java &nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="SkillsCategory">
            <div className="SkillsCategoryTitle">
              <h1>Front-End Development</h1>
            </div>
            <div className="SkillsList">
              <ul>
                <li><HTMLIcon></HTMLIcon> &nbsp;HTML5 &nbsp;</li>
                <li><CSSIcon></CSSIcon> &nbsp;CSS3 &nbsp;</li>
                <li><SassIcon></SassIcon> &nbsp;SASS &nbsp;</li>
              </ul>
              <ul>
                <li><ReactIcon></ReactIcon> &nbsp;React &nbsp;</li>
                <li><AngularIcon></AngularIcon> &nbsp;Angular &nbsp;</li>
                <li><VueIcon></VueIcon> &nbsp;Vue &nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="SkillsCategory">
            <div className="SkillsCategoryTitle">
              <h1>Back-End Development</h1>
            </div>
            <div className="SkillsList">
              <ul>
                <li><NodeJSIcon></NodeJSIcon> &nbsp;Node.JS &nbsp;</li>
                <li><DjangoIcon></DjangoIcon> &nbsp;Django &nbsp;</li>
                <li><RailsIcon></RailsIcon> &nbsp;Ruby on Rails &nbsp;</li>
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
                <li><AndroidIcon></AndroidIcon> &nbsp;Android &nbsp;</li>
                <li><ReactIcon></ReactIcon> &nbsp;React Native &nbsp;</li>
              </ul>
            </div>
          </div>
          <div className="SkillsCategory">
            <div className="SkillsCategoryTitle">
              <h1>Databases</h1>
            </div>
            <div className="SkillsList">
              <ul>
                <li><PostgresqlIcon></PostgresqlIcon> &nbsp;PostgreSQL &nbsp;</li>
                <li><MongoIcon></MongoIcon> &nbsp;MongoDB &nbsp;</li>
                <li><FirebaseIcon></FirebaseIcon> &nbsp;Cloud Firestore &nbsp;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsPage;
