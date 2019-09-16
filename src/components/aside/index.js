import React, { Component } from "react";

import "./aside.scss";

class Asidebar extends React.Component {

  render() {

    return (


      <aside className="aside">

        <div className="container">
          <div className="sidebar-btn-menu-mobile" id="sidebar-btn-menu-mobile">
            <i className="icon-menu"></i>
          </div>
        </div>

        <div className="sidebar" id="sidebar">

          <div className="content-btn-menu">
            <a className="icon-nav  btn-close" href="#" rel="noopener noreferrer">
              <i className="icon-close"></i>
            </a>
          </div>

          <div className="logo-menu">
            <a
              href="#"
            >
              <img src="icons/logo-jsconfco-2019.svg" alt="Logo JSConf colombia"/>
            </a>
          </div>

          <div className="menu-nav">
            <ul className="main-menu" id="main-menu">
              <li className="main-menu__item  active">
                <a className="main-menu__link" href="#top">top</a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#speaker">speakers</a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#sponsor">sponsors</a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#venue">venue</a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#team">team</a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#schedule">schedule</a>
              </li>
              <li className="main-menu__item">
                <a className="main-menu__link" href="#tuned">stay tuned</a>
              </li>
            </ul>
          </div>

          <div className="social-media-menu">
            <p className="social-media-menu__description">Follow us!</p>
            <a className="icon-nav" href="#" target="_blank" rel="noopener noreferrer">
              <i className="icon-instagram"></i>
            </a>
            <a className="icon-nav" href="#" target="_blank" rel="noopener noreferrer">
              <i className="icon-twitter"></i>
            </a>
          </div>

        </div>

      </aside>

    )
  }

}


export default Asidebar;

