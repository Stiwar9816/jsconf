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
                JSConf colombia 2019 -{" "}
                <a
                  className="underline--footer"
                  href="https://jsconf.com/codeofconduct.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code of conduct
                </a>
                - This website was built with love from Quibdó, Colombia by:{" "}
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
