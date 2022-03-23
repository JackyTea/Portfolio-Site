import React from "react";
import { ReactComponent as GithubIcon } from "../../images/icons/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/icons/linkedinIcon.svg";
import "./FooterBar.css";

const FooterBar = () => {
  return (
    <div className="FooterBar">
      <div className="copyright">
        <span>&copy; Jacky Tea, {new Date().getFullYear()}</span>
      </div>
      <div className="links">
        <ul className="linksList">
          <li className="listItem">
            <a
              href="https://github.com/JackyTea"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon></GithubIcon>
            </a>
          </li>
          <li className="listItem">
            <a
              href="https://linkedin.com/in/jackytea"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon fill="red"></LinkedinIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterBar;
