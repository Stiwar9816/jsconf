import React, { Component } from "react";
import "./footer.scss";
export default class SectionFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="col s12">
            <p className="footer-copyright">JSConfco colombia 2019</p>
          </div>
        </div>
      </footer>
    );
  }
}
