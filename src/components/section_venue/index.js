import React, { Component } from "react";
import "./index.scss";
import Hotel from "../images/diez_hotel";
import RutaN from "../images/rutaN";
import RutaN_Venue from "../images/rutan_venue";
export default class SectionVenue extends Component {
  render() {
    return (
      <div className="section-venue__background">
        <h2 className="inner-padding">VENUE</h2>
        <p>
          Strategic location, with easy access to all of <br />the city's
          points of interest.
        </p>
        <div className="section-venue__hotels">
          <h3>
            Hotels we
            <br />
            recommend
          </h3>
          <figure className="section-venue__hotel">
            <Hotel />
          </figure>
          <p>
            Complejo Ruta N <br /> calle 67 N° 52-20 <br />
            Medellin - Colombia.
          </p>
          <div className="section-venue__rutan">
            <figure>
              <RutaN />
            </figure>
          </div>
        </div>
        <div className="section-venue__rutaN">
          <figure>
            <RutaN_Venue />
          </figure>
        </div>
      </div>
    );
  }
}
