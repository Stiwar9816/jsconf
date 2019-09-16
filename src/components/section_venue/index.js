import React, { Component } from "react";
import "./index.scss";
import Hotel from "../images/diez_hotel";
import RutaN from "../images/rutaN";
import RutaN_Venue from "../images/rutan_venue";

export default class Venue extends Component {
  render() {
    return (
      <div className="Venue-component page-section" id="venue">
        <div className="Venue-left">
          <h2 className="Venue-title">VENUE</h2>
          <p>Hotels we</p>
          <p>recommend</p>
          <div className="Venue-hotels10">
            <a href="https://www.diezhotel.com/" target="__blank">
              <Hotel />
            </a>
          </div>
          <a
            href="https://reservations.travelclick.com/103293?groupID=2323678"
            className="Venue-btn"
            target="__blank"
          >
            Reservation...
          </a>
        </div>
        <div className="Venue-img">
          <RutaN_Venue />
        </div>
        <div className="Venue-text">
          <div className="Venue-rutan">
            <a href="https://www.rutanmedellin.org/es/" target="__blank">
              <div className="logo">
                <RutaN alt="Logo-rutan" />
              </div>
            </a>
            <p>Complejo Ruta N</p>
            <p> Calle 67 N° 52-20</p>
            <p>Medellin - Colombia. </p>
            <p className="span-venue">
              Strategic location, whit easy access to all of{" "}
            </p>
            <p className="span-venue">the city's points of interest.</p>
          </div>
        </div>
      
      <div class="btn-next-section">
        <a href="#team">
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
    );
  }
}
