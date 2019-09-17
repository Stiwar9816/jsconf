import React, { Component } from "react";
import Speaker_1 from "../images/speaker_1";
import Speaker_2 from "../images/speaker_2";
import Speaker_3 from "../images/speaker_3";
import "./schedule.scss";


export default class PageSchedule extends Component {
  render() {
    return (


      <page className="page-schedule">

        <div className="container">

          <div className="page-schedule__day-picker  inner-padding">
            <button className="pick-day">day 1</button>
            <button className="pick-day">day 2</button>
          </div>

          <h2 className="page-schedule__title  inner-padding">schedule</h2>

          <ul className="page-schedule__ul">

            <li className="page-schedule__li">
              <article className="page-card">
                <div className="page-card__time">
                    <div className="page-card__time-start">08:00am</div>
                </div>
                <div className="page-card__information  event  start-event">
                  <h3 className="page-activity">check in</h3>
                </div>
              </article>
            </li>

            <li className="page-schedule__li">
              <article className="page-card">
                <div className="page-card__time">
                  <div className="page-card__time-start">09:50am</div>
                </div>
                <div className="page-card__content-photo">
                  <figure className="page-card__information-photo">
                    <Speaker_1 />
                  </figure>
                <div className="page-card__information">
                  <div className="page-card__information-description">
                    <h3 className="page-activity">Happy Hour & Networking</h3>
                    <h4 className="page-speaker-name">Bernard Casper</h4>
                    <p className="page-information">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus reprehenderit magni dolorem aut reiciendis.</p>
                    <div className="page-speaker-social">
                      <a href="#" target="_blank" rel="noopener noreferrer">@nebrius</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>

            <li className="page-schedule__li">
              <article className="page-card">
                <div className="page-card__time">
                  <div className="page-card__time-start">09:50am</div>
                </div>
                <div className="page-card__content-photo">
                  <figure className="page-card__information-photo">
                    <Speaker_2 />

                    {/* <img src="img/Adrian_Bolonio.jpg" alt="Adrian Bolonio"> */}
                  </figure>
                  <div className="page-card__information">
                    <div className="page-card__information-description">
                      <h3 className="page-activity">Happy Hour & Networking</h3>
                      <h4 className="page-speaker-name">Bernard Casper</h4>
                      <p className="page-information">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus reprehenderit magni dolorem aut reiciendis.</p>
                      <div className="page-speaker-social">
                        <a href="#" target="_blank" rel="noopener noreferrer">@nebrius</a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>

            <li className="page-schedule__li">
              <article className="page-card">
                <div className="page-card__time">
                  <div className="page-card__time-start">09:50am</div>
                </div>
                <div className="page-card__content-photo">
                  <figure className="page-card__information-photo">
                    <Speaker_3 />
                    {/* <img src="img/Adrian_Bolonio.jpg" alt="Adrian Bolonio"> */}
                  </figure>
                  <div className="page-card__information">
                    <div className="page-card__information-description">
                      <h3 className="page-activity">Happy Hour & Networking</h3>
                      <h4 className="page-speaker-name">Bernard Casper</h4>
                      <p className="page-information">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem delectus reprehenderit magni dolorem aut reiciendis.</p>
                      <div className="page-speaker-social">
                        <a href="#" target="_blank" rel="noopener noreferrer">@nebrius</a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>

            <li className="page-schedule__li">
              <article className="page-card">
                  <div className="page-card__time">
                    <div className="page-card__time-start">07:00pm</div>
                  </div>
                  <div className="page-card__information  event  end-event">
                    <h3 className="page-activity">party</h3>
                  </div>
              </article>
            </li>

          </ul>

        </div>

    </page>
    );
  }
}
