import React from 'react'
import Logo2019 from '../images/Logo2019'
import { Link } from "gatsby";

import './header.scss'

const Header = () => (

  <header className="header page-section"  id="top">

    <div className="header-banner">
    </div>

    <div className="container">

    <div className="row header-data-logo">
      <div className="col content-logo">
        <Link to="/">
          <Logo2019/>
        </Link>
      </div>

      <div className="content-information">
        <p className="header-information">Bringing the Colombian JavaScript community under one roof.</p>
      </div>
    </div>

    <div className="row  header-data">
        <p className="col  header-data__description">October <span className="underline">18</span> & <span className="underline">19</span> <span className="underline">Medellín</span>, Colombia
        </p>
      </div>

    <div className="btn-next-section">
      <a href="#speaker">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 30">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <rect className="cls-1" width="5" height="5"/>
              <rect className="cls-1" x="50" width="5" height="5"/>
              <rect className="cls-1" x="5" y="5" width="5" height="5"/>
              <rect className="cls-1" x="45" y="5" width="5" height="5"/>
              <rect className="cls-1" x="10" y="10" width="5" height="5"/>
              <rect className="cls-1" x="40" y="10" width="5" height="5"/>
              <rect className="cls-1" x="15" y="15" width="5" height="5"/>
              <rect className="cls-1" x="35" y="15" width="5" height="5"/>
              <rect className="cls-1" x="20" y="20" width="5" height="5"/>
              <rect className="cls-1" x="30" y="20" width="5" height="5"/>
              <rect className="cls-1" x="25" y="25" width="5" height="5"/>
            </g>
          </g>
        </svg>
      </a>
    </div>

  </div>




  </header>
)

export default Header
