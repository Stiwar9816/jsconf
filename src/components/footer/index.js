import React, { Component } from "react";
import "./footer.scss";
export default class SectionFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
          <div className="col s12">
            <p className="footer-copyright">
              JSConfco colombia 2019 - Created by:{" "}
              <a
              className="underline--footer"
                href="https://twitter.com/asprillastiwar"
                target="_blank"
                rel="noopener noreferrer"
              >
               @AsprillaStiwar
              </a>{" "}
              -{" "}
              <a
              className="underline--footer"
                href="https://twitter.com/miltoncode"
                target="_blank"
                rel="noopener noreferrer"
              >
                @MiltonCode
              </a>
            </p>
          </div>
          </div>
        </div>
      </footer>
    );
  }
}
