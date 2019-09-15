import React from 'react'

import './header.scss'

const Header = () => (

  <header className="header">

    <div className="header-banner">
      <img src="icons/banner-jsconfco-2018.jpg" alt="Logo JSConf colombia"/>
    </div>

    <div className="container">

      <div className="row  content-information">

        <div className="col  content-logo">
          <img src="./icons/Logo-JSConco-2019.svg" alt="Logo JSConf colombia"/>
        </div>

        <p className="col  header-information">Bringing the Colombian JavaScript community under the roof.</p>

      </div>

      <div className="row  header-data">
        <p className="col  header-data__description">October <span className="underline">18th</span> & <span className="underline">19th</span> <span className="underline">Medellín</span>, Colombia
        </p>
      </div>

    </div>

  </header>
)

export default Header
