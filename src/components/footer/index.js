import React, { Component } from "react";
import "./footer.scss";
export default class SectionFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="col s12">
            <p className="footer-copyright">
              JSConfco colombia 2019 - Created by:{" "}
              <a
              className="underline"
                href="https://twitter.com/asprillastiwar"
                target="_blank"
                rel="noopener noreferrer"
              >
               Stiwar Asprilla
              </a>{" "}
              -{" "}
              <a
              className="underline"
                href="https://twitter.com/miltoncode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hamilton Galeano
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
