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
  </section>
);

export default SectionSponsors;
