import React from "react";
import GitHub from "../images/sponsor_github";
import GetOnBoard from "../images/sponsor_getonboard";
import Elastic from "../images/sponsor_elastic";
import Prodigious from "../images/sponsor_prodigious";
import UruiT from "../images/sponsor_uruit";
import Cloudinary from "../images/sponsor_cloudinary";
import RutaN from "../images/sponsor_rutan";
import S4n from "../images/sponsor_s4n";
import Livevox from "../images/sponsor_livevox";
import Skillshare from "../images/skillshare";
import Mongodb from "../images/sponsor_mongodb";
import MoveIt from "../images/sponsor_moveIt";
import Monoku from "../images/sponsor_monoku";
import Bloomberg from "../images/sponsor_bloomberg";
import "./sponsors.scss";

const SectionSponsors = () => (
  <section className="section-sponsors-view" id="sponsors">
    <div className="container">
      <h2 className="section-sponsors-view__title">SPONSORS</h2>

      <article className="section-sponsors-view__content">
        <div className="section-sponsors-view__medal  platinum">Platinum</div>
        <div className="section-sponsors-view__data  big">
          <a
            className="section-sponsors-view__card"
            href="https://github.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
          <a
            className="section-sponsors-view__card"
            href="https://www.rutanmedellin.org/es/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <RutaN />
          </a>
          <a
            className="section-sponsors-view__card"
            href="https://s4n.co/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <S4n />
          </a>
          <a
            className="section-sponsors-view__card"
            href="https://livevox.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Livevox />
          </a>
        </div>
      </article>
      <article className="section-sponsors-view__content medium">
        <h3 className="section-sponsors-view__medal  gold">Gold</h3>
        <div className="section-sponsors-view__data big">
          <a
            className="section-sponsors-view__card"
            href="https://www.elastic.co/es/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Elastic />
          </a>
          <a
            className="section-sponsors-view__card"
            href="https://cloudinary.com"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Cloudinary />
          </a>
          <a
            className="section-sponsors-view__card"
            href="https://www.skillshare.com"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Skillshare />
          </a>
        </div>
      </article>

      <article className="section-sponsors-view__content medium">
        <h3 className="section-sponsors-view__tag  silver">Silver</h3>
        <div className="section-sponsors-view__data  big">
          <a
            className="section-sponsors-view__card prodigious"
            href="https://www.prodigious.com"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Prodigious />
          </a>
        </div>
      </article>

      <div className="inner-wrap-desktop">
        <article className="section-sponsors-view__content bottom">
          <h3 className="section-sponsors-view__tag  supporters">Supporters</h3>
          <div className="section-sponsors-view__data  small">
            <a
              className="section-sponsors-view__card "
              href="https://move-it.com"
              target="__blank"
              rel="noopener noreferrer"
            >
              <MoveIt />
            </a>
            <a
              className="section-sponsors-view__card getonboard"
              href="https://monoku.com/"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Monoku />
            </a>
            <a
              className="section-sponsors-view__card "
              href="https://www.techatbloomberg.com/"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Bloomberg />
            </a>
          </div>
        </article>
        <article className="section-sponsors-view__content bottom">
          <div className="section-sponsors-view__data  small">
            <a
              className="section-sponsors-view__card "
              href="https://uruit.com"
              target="__blank"
              rel="noopener noreferrer"
            >
              <UruiT />
            </a>
            <a
              className="section-sponsors-view__card getonboard"
              href="https://www.getonbrd.com"
              target="__blank"
              rel="noopener noreferrer"
            >
              <GetOnBoard />
            </a>
            <a
              className="section-sponsors-view__card "
              href="https://www.mongodb.com"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Mongodb />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default SectionSponsors;
