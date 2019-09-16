import React, { Component } from "react";
import "./sponsor.scss";
export default class SectionSponsors extends Component {
  render() {
    return (
      <section className="section-sponsors page-section" id="sponsor">
        <div className="container">
          <h2 className="section-sponsors__title">
            WANT TO BE A <br />
            SPONSOR?
          </h2>
          <br />
          <br />
          <div className="row">
            <div className="col s12 ">
              <article className="section-sponsors__content">
                <p>
                  Find new talent and connect with our dev communities! We use
                  several media channels after and before the event to reach
                  more than 10000 people worldwide. Our audience is captive and
                  they want to hear what we have to say.
                </p>
                <br />
                <p>
                  {" "}
                  To sign up for a sponsorship slot or if you have any questions
                  regarding sponsorship, contact us at
                </p>
                <a href="http://jsconf.co/" className="email">hola@jsconf.co</a>
                <br />
                <br />
                <br />
                <a
                  className="section-sponsors__btn"
                  href="http://jsconf.co/public/assets/pdf/prospectusJSConfCO2019.pdf"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  DOWNLOAD OUR BRIEF
                </a>
              </article>
            </div>
          </div>

      <div class="btn-next-section">
        <a href="#venue">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 30">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect class="cls-1" width="5" height="5"/>
                <rect class="cls-1" x="50" width="5" height="5"/>
                <rect class="cls-1" x="5" y="5" width="5" height="5"/>
                <rect class="cls-1" x="45" y="5" width="5" height="5"/>
                <rect class="cls-1" x="10" y="10" width="5" height="5"/>
                <rect class="cls-1" x="40" y="10" width="5" height="5"/>
                <rect class="cls-1" x="15" y="15" width="5" height="5"/>
                <rect class="cls-1" x="35" y="15" width="5" height="5"/>
                <rect class="cls-1" x="20" y="20" width="5" height="5"/>
                <rect class="cls-1" x="30" y="20" width="5" height="5"/>
                <rect class="cls-1" x="25" y="25" width="5" height="5"/>
              </g>
            </g>
          </svg>
        </a>
      </div>

        </div>
      </section>
    );
  }
}
