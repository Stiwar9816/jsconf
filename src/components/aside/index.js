import React from "react";
import { navigate, Link } from 'gatsby';

import "./aside.scss";

class Asidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // width: 1000,
      mobileMenuActive: false
    };
  }

  scroll = (e, anchorId, offset = 125) => {
    e.preventDefault();

    const menuItems = document.getElementsByClassName('main-menu__item');
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('active');
    }

    if (document.getElementById(anchorId)) {
      const target = document.getElementById(anchorId).offsetTop - offset;
      window.scroll({
        top: offset === 0 ? offset : target,
        behavior: 'smooth'
      });
    } else {
      navigate(`/#${anchorId}`);
    }
  }

  scrollMobile = (e, section, offset) => {
    this.scroll(e, section, offset)
    this.handleToggleMenu();
  }

  handleToggleMenu = () => {
    this.setState({ mobileMenuActive: !this.state.mobileMenuActive });
  }

  activeClass = () => {
    return this.state.mobileMenuActive ? 'active' : '';
  }


  render() {
    return (

      <aside className="aside">
        <div className="container">
          <div className="content-btn-schedule">
            <Link className="btn-schedule" to="/schedule/#schedule">
              <i className="icon-calendar-1"></i>
            </Link>
          </div>
        </div>


          <div className="sidebar" id="sidebar">
            <div className="menu-nav">
              <ul className="main-menu" id="main-menu">
                <li className="main-menu__item">
                  <a
                    className="main-menu__link"
                    tittle="Top"
                    href="#top"
                    onClick={e => this.scrollMobile(e, 'top')}>
                    top
                  </a>
                </li>
                <li className="main-menu__item">
                  {/* <a className="main-menu__link" href="#speaker">
                    speakers
                  </a> */}
                  <a
                    className="main-menu__link"
                    tittle="Speakers"
                    href="#speakers"
                    onClick={e => this.scrollMobile(e, 'speakers')}>
                    speakers
                  </a>
                </li>
                <li className="main-menu__item">
                  {/* <a className="main-menu__link" href="#sponsor">
                    sponsors
                  </a> */}
                  <a
                    className="main-menu__link"
                    tittle="Sponsors"
                    href="#sponsors"
                    onClick={e => this.scrollMobile(e, 'sponsors')}>
                    sponsors
                  </a>
                </li>
                <li className="main-menu__item">
                  {/* <a className="main-menu__link" href="#venue">
                    venue
                  </a> */}
                  <a
                    className="main-menu__link"
                    tittle="Venue"
                    href="#venue"
                    onClick={e => this.scrollMobile(e, 'venue')}>
                    venue
                  </a>
                </li>
                <li className="main-menu__item">
                  {/* <a className="main-menu__link" href="#team">
                    team
                  </a> */}
                  <a
                    className="main-menu__link"
                    tittle="Team"
                    href="#team"
                    onClick={e => this.scrollMobile(e, 'team')}>
                    team
                  </a>
                </li>

                <li className="main-menu__item">
                  {/* <a className="main-menu__link" href="#tuned">
                    stay tuned
                  </a> */}
                  <a
                    className="main-menu__link"
                    tittle="Tuned"
                    href="#tuned"
                    onClick={e => this.scrollMobile(e, 'tuned')}>
                    stay tuned
                  </a>
                </li>
                <li className="main-menu__item">
                  <Link className="main-menu__link" to="/schedule/#schedule">
                    schedule
                  </Link>
                </li>
              </ul>
            </div>
          </div>


        </aside>


    );
  }
}

export default Asidebar;
