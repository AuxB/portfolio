import React, { useState, useEffect } from 'react';
import { push as Menu } from 'react-burger-menu';
import { HashLink as Link } from 'react-router-hash-link';

import './Sidebar.css';

import aboutLogo from '../img/gear.png';
import workLogo from '../img/monitor.png';
import portfolioLogo from '../img/portfolio.png';
import profil from '../img/profil.png';
import inLogo from '../img/linkedin.svg';
import googleLogo from '../img/google.svg';
import gitLogo from '../img/github.svg';

function Sidebar() {
  const [isMobile, setMobile] = useState(true);

  useEffect(() => {
    const closeButton = document.querySelector('.bm-cross-button');
    const overlay = document.querySelector('.bm-overlay');

    if (window.innerWidth > 920) {
      setMobile(true);
      closeButton.style.display = 'none';
      overlay.style.position = 'relative';
    } else {
      setMobile(false);
      closeButton.style.display = 'block';
      // overlay.style.position = 'relative !important';
    }
  }, [window.innerWidth]);

  return (
    <div>
      <Menu elastic disableOverlayClick width="250px" isOpen={isMobile} className="Navbar" disableAutoFocus>
        <img className="profil" src={profil} alt="profil" />
        <ul>
          <li>
            <Link to="#about"><a href="localhost">A propos</a></Link>
            <img src={aboutLogo} alt="about logo" />
          </li>
          <li>
            <Link to="#work"><a href="localhost">Travaux</a></Link>
            <img src={workLogo} alt="work logo" />
          </li>
          <li>
            <Link to="#exp"><a href="localhost">Experiences</a></Link>
            <img src={portfolioLogo} alt="portfolio logo" />
          </li>
        </ul>
        <div className="networkLogo">
          <a href="https://www.linkedin.com/in/auxenceblondel/" target="__blank"><img src={inLogo} alt="linkedin logo" /></a>
          <a href="/"><img src={googleLogo} alt="google logo" target="__blank" /></a>
          <a href="https://github.com/AuxB?tab=repositories" target="__blank"><img src={gitLogo} alt="github logo" /></a>
        </div>
      </Menu>
    </div>
  );
}

export default Sidebar;
