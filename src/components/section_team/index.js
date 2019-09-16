import React, { Component } from "react";
import "./team.scss";
import AdrianEstrada from "../images/team_adrian";
import JulianaGomez from "../images/team_juliana";
import MariaVelandia from "../images/team_maria";
import Nataly from "../images/team_nataly";
import MilenaSuarez from "../images/team_milenaSuarez";
import LizParody from "../images/team_lizparody";
import LauraCiro from "../images/team_lauraciro";
import Julian from "../images/team_julian";
import Jhonatan from "../images/team_jhonatan";
import Jesee from "../images/team_jesee";
import JennyMazo from "../images/team_jennymazo";
import DavidAvellaneda from "../images/team_davidAvellaneda";
import Catherine from "../images/team_catherine";
import Buritica from "../images/team_buritica";
import MarianaMendivil from "../images/team_mariana";
import Hamilton from "../images/team-hamilton";
import Stiwar from "../images/team-stiwar";

export default class sectionTeam extends Component {
  render() {
    return (
      <section className="section-team page-section" id="team">
        <div className="container">
          <h2 className="inner-padding">TEAM</h2>

          <div className="row">
            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <figure className="section-speakers__img">
                  <Buritica />{" "}
                </figure>
                <div className="section-speakers__description">
                  <h5>Juan Pablo Buritica</h5>
                  <p> CM / Finance</p>
                  <a
                    href="https://twitter.com/buritica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
              </article>
            </div>

            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <div className="section-speakers__description">
                  <h5> Juliana Gomez</h5>
                  <p> Directors / Content</p>

                  <a
                    href="https://twitter.com/gmzjuliana"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
                <figure className="section-speakers__img">
                  <JulianaGomez />{" "}
                </figure>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <figure className="section-speakers__img">
                  <LizParody />{" "}
                </figure>
                <div className="section-speakers__description">
                  <h5>Liz Parody</h5>
                  <p>Directors / Scholarship</p>
                  <a
                    href="https://twitter.com/buritica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
              </article>
            </div>

            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <div className="section-speakers__description">
                  <h5>Julian Duque</h5>
                  <p>Directors</p>
                  <a
                    href="https://twitter.com/buritica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
                <figure className="section-speakers__img">
                  <Julian />{" "}
                </figure>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <figure className="section-speakers__img">
                  <Catherine />{" "}
                </figure>
                <div className="section-speakers__description">
                  <h5>Catherine Lopez</h5>
                  <p>Directors</p>
                  <a
                    href="https://twitter.com/LopezCatherine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
              </article>
            </div>

            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <div className="section-speakers__description">
                  <h5> Adrian Estrada</h5>
                  <p>Directors</p>
                  <a
                    href="https://twitter.com/edsadr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
                <figure className="section-speakers__img">
                  <AdrianEstrada />{" "}
                </figure>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <figure className="section-speakers__img">
                  <MariaVelandia />{" "}
                </figure>
                <div className="section-speakers__description">
                  <h5> Maria Velandia</h5>
                  <p>Logistics</p>
                  <a
                    href="https://twitter.com/manvedu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
              </article>
            </div>

            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <div className="section-speakers__description">
                  <h5>Laura Ciro</h5>
                  <p>Scholarship</p>
                  <a
                    href="https://twitter.com/ltciro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
                <figure className="section-speakers__img">
                  <LauraCiro />{" "}
                </figure>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <figure className="section-speakers__img">
                  <Nataly />{" "}
                </figure>
                <div className="section-speakers__description">
                  <h5> Nataly Villamor</h5>
                  <p>Scholarship</p>

                  <a
                    href="https://twitter.com/nathalyvillamor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
              </article>
            </div>

            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <div className="section-speakers__description">
                  <h5>Jesee Cogollo</h5>
                  <p>Directors / Scholarship</p>
                  <a
                    href="https://www.twitter.com/JesseCogollo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
                <figure className="section-speakers__img">
                  <Jesee />{" "}
                </figure>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <figure className="section-speakers__img">
                  <DavidAvellaneda />{" "}
                </figure>
                <div className="section-speakers__description">
                  <h5>David Avellaneda</h5>
                  <p>Directors</p>
                  <a
                    href="https://twitter.com/davsket"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
              </article>
            </div>

            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <div className="section-speakers__description">
                  <h5> Milena Suarez</h5>
                  <p>Comms</p>
                  <a
                    href="https://twitter.com/milena_suarezl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
                <figure className="section-speakers__img">
                  <MilenaSuarez />{" "}
                </figure>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <figure className="section-speakers__img">
                  <JennyMazo />{" "}
                </figure>
                <div className="section-speakers__description">
                  <h5>
                    Jenny <br /> Mazo
                  </h5>
                  <p>Comms</p>
                  <a
                    href="https://twitter.com/JenyMzo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
              </article>
            </div>

            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <div className="section-speakers__description">
                  <h5>Mariana Mendivil</h5>
                  <p>Logistics</p>
                  <a
                    href="https://twitter.com/mari_mendidu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
                <figure className="section-speakers__img">
                  <MarianaMendivil />{" "}
                </figure>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <figure className="section-speakers__img">
                  <Jhonatan />{" "}
                </figure>
                <div className="section-speakers__description">
                  <h5>Jonathan Avendaño</h5>
                  <p>Logistics</p>
                  <a
                    href="https://twitter.com/jdavidavendano"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
              </article>
            </div>

            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <figure className="section-speakers__img">
                  <Stiwar />{" "}
                </figure>
                <div className="section-speakers__description">
                  <h5>Stiwar Asprilla</h5>
                  <p>Web Team</p>
                  <a
                    href="https://twitter.com/AsprillaStiwar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
              </article>
            </div>
          </div>

          <div className="row ">
            <div className="col s12 m6 l6">
              <article className="section-team__content">
                <div className="section-speakers__description">
                  <h5>Hamilton Galeano</h5>
                  <p>Web Team</p>
                  <a
                    href="https://twitter.com/MiltonCode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter" />
                  </a>
                </div>
                <figure className="section-speakers__img">
                  <Hamilton />{" "}
                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
