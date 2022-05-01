import React, { Component } from "react";
import { ReactComponent as IBMIcon } from "../../images/icons/ibmIcon.svg";
import { ReactComponent as ShopifyIcon } from "../../images/icons/shopifyIcon.svg";
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
                            <ShopifyIcon></ShopifyIcon>
                        </div>
                        <div className="JobDescription">
                            <h1>Software Developer at <a href="https://www.shopify.ca/about" target="_blank"
                                rel="noopener noreferrer">Shopify</a></h1>
                            <h2>January 2022 - April 2022 (Internship)</h2>
                        </div>
                    </div>
                    <div className="ExperienceCard">
                        <div className="CompanyLogo remove-bg">
                            <IBMIcon></IBMIcon>
                        </div>
                        <div className="JobDescription">
                            <h1>Software Developer at <a href="https://www.ibm.com/ca-en/about" target="_blank"
                                rel="noopener noreferrer">IBM</a></h1>
                            <h2>September 2020 - December 2021 (Internship)</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperiencePage;
