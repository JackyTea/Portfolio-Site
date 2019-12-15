import React, { Component } from "react";
import "./NotFoundPage.css";

class NotFoundPage extends Component {
  state = {};

  componentDidMount() {
    document.title = "Jacky Tea | Page Not Found";
  }

  render() {
    return (
      <div className="NotFoundPage">
        <div className="landingSection">
          <div className="mainTitle">
            <h1>Woops!</h1>
            <h3>
              {window.location.href} doesn't seem to exist! <br/>
              <span className="x">✖ </span>Error Code: 404{" "}
              <span className="x"> ✖</span>
            </h3>
            <button onClick={() => {window.history.back()}}> &lt; Go Back </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
