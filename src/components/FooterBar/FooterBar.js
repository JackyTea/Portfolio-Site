import React, { Component } from "react";
import { ReactComponent as EmailIcon } from "../../images/icons/emailIcon.svg";
import { ReactComponent as GithubIcon } from "../../images/icons/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/icons/linkedinIcon.svg";
import "./FooterBar.css";

class FooterBar extends Component {
  state = {};
  render() {
    return (
      <div className="FooterBar">
        <div className="copyright">
          <span>&copy; Jacky Tea, 2019</span>
        </div>
        <div className="links">
          <ul className="linksList">
            <li className="listItem">
              <a href="https://github.com/JackyTea">
                <GithubIcon></GithubIcon>
              </a>
            </li>
            <li className="listItem">
              <a href="https://linkedin.com/in/jackytea">
                <LinkedinIcon fill="red"></LinkedinIcon>
              </a>
            </li>
            <li className="listItem">
              <a href="mailto:teajacks@outlook.com">
                <EmailIcon></EmailIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterBar;
