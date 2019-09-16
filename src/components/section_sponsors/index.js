import React from 'react';
import GitHub from '../images/sponsor_github'
import GetOnBoard from '../images/sponsor_getonboard'
import Elastic from '../images/sponsor_elastic'
import Prodigious from '../images/sponsor_prodigious'
import UruiT from '../images/sponsor_uruit'
import Cloudinary from '../images/sponsor_cloudinary'
import './sponsors.scss';

const SectionSponsors = () => (
  <section className="section-sponsors-view" id="sponsor">

  <div className="container">

    <h2 className="section-sponsors-view__title">SPONSORS</h2>

    <article className="section-sponsors-view__content">
      <div className="section-sponsors-view__medal  platinum">Platinum</div>
      <div className="section-sponsors-view__data  big">
        <a
          className="section-sponsors-view__card"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </div>
    </article>

    <div className="inner-wrap-desktop">
      <article className="section-sponsors-view__content bottom">
        <h3 className="section-sponsors-view__tag  supporters">Supporters</h3>
        <div className="section-sponsors-view__data  small">
          <a
            className="section-sponsors-view__card getonboard"
            href="https://www.getonbrd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GetOnBoard />
          </a>
        </div>
        <div className="section-sponsors-view__data  small">
          <a
            className="section-sponsors-view__card "
            href="https://uruit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UruiT />
          </a>

        </div>
      </article>

      <article className="section-sponsors-view__content bottom">
        <h3 className="section-sponsors-view__tag  silver">Silver</h3>
        <div className="section-sponsors-view__data  small">
          <a
            className="section-sponsors-view__card prodigious"
            href="https://www.prodigious.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Prodigious />
          </a>
        </div>
      </article>

      <article className="section-sponsors-view__content bottom">
        <h3 className="section-sponsors-view__tag  gold">Gold</h3>
        <div className="section-sponsors-view__data  small">
          <a
            className="section-sponsors-view__card"
            href="https://www.elastic.co/es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Elastic />
          </a>
          <a
            className="section-sponsors-view__card"
            href="https://cloudinary.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cloudinary />
          </a>
        </div>
      </article>
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

export default SectionSponsors;
