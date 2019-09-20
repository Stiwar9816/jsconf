import React, { Component } from "react";
import { Link } from "react";
import "./aside.scss";

class Asidebar extends React.Component {
  render() {
    return (
      <aside className="aside">


      <div className="container">
        <div class="content-btn-schedule">
          <Link className="btn-schedule" to="/schedule">
            <i class="icon-schedule"></i>
          </Link>
        </div>
      </div>


        <div className="sidebar" id="sidebar">
          <div className="menu-nav">
            <ul className="main-menu" id="main-menu">
              <li className="main-menu__item  active">
                <a className="main-menu__link" href="#top">
                  top
                </a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#speaker">
                  speakers
                </a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#sponsor">
                  sponsors
                </a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#venue">
                  venue
                </a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#team">
                  team
                </a>
              </li>
              <li className="main-menu__item">
                <Link className="main-menu__link" to="/schedule">
                  schedule
                </Link>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#tuned">
                  stay tuned
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default Asidebar;
