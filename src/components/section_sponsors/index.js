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
        </div>
      </section>
    );
  }
}
