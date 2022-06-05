import React, { Component } from "react";
import { ReactComponent as IBMIcon } from "../../images/icons/ibmIcon.svg";
import { ReactComponent as ShopifyIcon } from "../../images/icons/shopifyIcon.svg";
import { ReactComponent as ClutchIcon } from "../../images/icons/clutchIcon.svg";
import { ReactComponent as SnakebyteIcon } from "../../images/icons/snakebyteIcon.svg";
import "./ExperiencePage.css";


class ExperiencePage extends Component {
    state = {};

    render() {
        return (
            <div className="ExperiencePage">
                <div className="ExperiencePageTitle">
                    <h1>Experience</h1>
                </div>
                <div className="ExperienceContainer">
                    <div className="ExperienceCard">
                        <div className="CompanyLogo remove-bg">
                            <ClutchIcon></ClutchIcon>
                        </div>
                        <div className="JobDescription">
                            <h1>Software Developer at <a href="https://www.clutch.ca/about" target="_blank"
                                rel="noopener noreferrer">Clutch</a></h1>
                            <h2>May 2022 - Present (Full Time)</h2>
                        </div>
                    </div>
                    <div className="ExperienceCard">
                        <div className="CompanyLogo remove-bg">
                            <ShopifyIcon></ShopifyIcon>
                        </div>
                        <div className="JobDescription">
                            <h1>Software Developer at <a href="https://www.shopify.ca/about" target="_blank"
                                rel="noopener noreferrer">Shopify</a></h1>
                            <h2>Jan. 2022 - Apr. 2022 (Internship)</h2>
                        </div>
                    </div>
                    <div className="ExperienceCard">
                        <div className="CompanyLogo remove-bg">
                            <IBMIcon></IBMIcon>
                        </div>
                        <div className="JobDescription">
                            <h1>Software Developer at <a href="https://www.ibm.com/ca-en/about" target="_blank"
                                rel="noopener noreferrer">IBM</a></h1>
                            <h2>Sep. 2020 - Dec. 2021 (Internship)</h2>
                        </div>
                    </div>
                    <div className="ExperienceCard">
                        <div className="CompanyLogo remove-bg">
                            <SnakebyteIcon></SnakebyteIcon>
                        </div>
                        <div className="JobDescription">
                            <h1>Software Developer at <a href="https://www.snakebyte.ca" target="_blank"
                                rel="noopener noreferrer">SnakeByte</a></h1>
                            <h2>May 2020 - Aug. 2020 (Contract)</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperiencePage;
