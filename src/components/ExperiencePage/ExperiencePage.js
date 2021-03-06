import React, { Component } from "react";
import { ReactComponent as SnakebyteIcon } from "../../images/icons/snakebyteIcon.svg";
import { ReactComponent as IBMIcon } from "../../images/icons/ibmIcon.svg";
import "./ExperiencePage.css";


class ExperiencePage extends Component {
    state = {};

    componentDidMount() {
        document.title = "Jacky Tea | Experience";
    }

    render() {
        return (
            <div className="ExperiencePage">
                <div className="ExperiencePageTitle">
                    <h1>Experience</h1>
                </div>
                <div className="ExperienceContainer">
                <div className="ExperienceCard">
                        <div className="CompanyLogo snakebyte-studios">
                            <IBMIcon></IBMIcon>
                        </div>
                        <div className="JobDescription">
                            <h1>Software Developer</h1>
                            <h2>IBM - Markham, Ontario</h2>
                        </div>
                        <div className="DateCard">September 2020 - Present<br />
                            <a href="https://www.ibm.com/ca-en" target="_blank"
                                rel="noopener noreferrer">
                                <button>Company Site</button></a></div>
                    </div>
                    <div className="ExperienceCard">
                        <div className="CompanyLogo snakebyte-studios">
                            <SnakebyteIcon></SnakebyteIcon>
                        </div>
                        <div className="JobDescription">
                            <h1>Software Developer</h1>
                            <h2>Snakebyte Studios Inc. - Toronto, Ontario</h2>
                        </div>
                        <div className="DateCard">May 2020 - September 2020<br />
                            <a href="https://www.snakebyte.ca/" target="_blank"
                                rel="noopener noreferrer">
                                <button>Company Site</button></a></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperiencePage;
