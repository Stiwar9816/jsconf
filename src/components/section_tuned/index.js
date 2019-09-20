import React, { Component } from "react";
import "./tuned.scss";
import Jsconfco01 from "../images/jsconfco_gallery01";
import Jsconfco02 from "../images/jsconfco_gallery02";
import Jsconfco03 from "../images/jsconfco_gallery03";
import Jsconfco04 from "../images/jsconfco_gallery04";
import Jsconfco05 from "../images/jsconfco_gallery05";
export default class sectionStayTuned extends Component {
  render() {
    return (
      <section className="section-tuned  page-section"  id="tuned">
        <div className="container">

          <div className="col inner-padding">

            <div className="section-tuned__2018">
              <h3 className="section-tuned__2018-subtitle">Take a look at </h3>
              <a href="https://lightroom.adobe.com/shares/778a6226c7094f3f9f9a266de2ea09ed/albums/f2616242ceb84063ae0227aaf0325251/assets/ee3ea3371bee427d96a22aa8327f098c" target="__blank">
                <span className="underline">
                  JSConf.co 2018
                </span>
              </a>
            </div>

            <div className="section-tuned__content-gallery">
                <figure className="section-tuned__img">
                  <Jsconfco01 />
                </figure>
                <figure className="section-tuned__img">
                  <Jsconfco02 />
                </figure>
                <figure className="section-tuned__img">
                  <Jsconfco03 />
                </figure>
                <figure className="section-tuned__img">
                  <Jsconfco04 />
                </figure>
                <figure className="section-tuned__img">
                  <Jsconfco05 />
                </figure>
              </div>

          </div>

            <div className="section-tuned-Signup">

              <div className="col s12">
                <h2 className="section-tuned-Signup__title">STAY TUNED</h2>
                <p>Subscribe to our newsletter to stay informed.</p>
              </div>

              <form>
                <div className="col s12 input-field">
                  <input
                    type="email"
                    className="section-tuned__input-signup"
                    placeholder="Your Email..."
                  />
                  <div className="btn-sumit">
                    <a
                    href=""
                      className="btn waves-effect waves-light section-tuned__btn-signup"
                      type="submit"
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
              </form>

              <div className="section-tuned__Follow col s12  inner-padding">
                  <h3>Follow us!</h3>
                  <div className="networks">
                    <a
                      href="https://twitter.com/jsconfco"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-twitter" />
                    </a>
                    <a
                      href="https://www.instagram.com/jsconfco"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icon-instagram" />
                    </a>
                  </div>
                </div>
              </div>

          </div>
      </section>
    );
  }
}
