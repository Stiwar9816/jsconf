import React, { Component } from "react";
import "./venue.scss";
import Hotel from "../images/diez_hotel";
import RutaN from "../images/rutaN";
import RutaNVenue from "../images/rutan_venue";

export default class Venue extends Component {
  render() {
    return (


    <section className="section-venue"  id="venue">

      <div className="container">

      <div className="row">
        <div className="col  center">
          <h2 className="section-venue__title  inner-padding">venue</h2>

          <p className="section-venue__description">
            Strategic location, with easy access to all of the city's points of interest.
          </p>
        </div>
      </div>

      <div className="row inner-desktop-view">

        <div className="col  s12  l4  xl4">
          <h3 className="section-venue__subtitle">We recommend</h3>
          <div className="section-venue__content-hotel">
            <a href="https://www.diezhotel.com/" target="__blank">
              <figure className="section-venue__images">
                <Hotel />
              </figure>
            </a>
          </div>

          <div className="row">
            <div className="col s12 center">
              <div className="section-venue__content-direction">
                <p className="section-venue__direction">Complejo Ruta N</p>
                <p className="section-venue__direction">Calle 67 N° 52-20</p>
                <p className="section-venue__direction">Medellín - Colombia.</p>
              </div>
            </div>
          </div>


          <div className="section-venue__content-rutan">
            <a href="https://www.rutanmedellin.org/es/" target="__blank">
              <figure className="section-venue__logoN">
                <RutaN alt="Logo-rutan" />
              </figure>
            </a>
          </div>
        </div>


        <div className="col s12  l8  xl8">
          <div className="section-venue__content-phote-rutan">
            <figure>
                <RutaNVenue />
            </figure>
          </div>
        </div>

      </div>

      </div>

    </section>


    );
  }
}
