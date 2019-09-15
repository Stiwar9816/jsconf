import React from 'react'

import './header.scss'
import Logo2019 from '../images/Logo2019'

const Header = () => (

  <header className="header">

    <div className="header-banner">
      <img src="../../assets/images/banner_jsconfco_2018.jpg" alt="Logo JSConf colombia"/>
    </div>

    <div className="container">

      <div className="row  content-information">

        <div className="col  content-logo">
          {/* <img src="../../assets/images/LogoJSConco2019.png" alt="Logo JSConf colombia"/> */}
          <figure>
            <Logo2019/>
          </figure>
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
