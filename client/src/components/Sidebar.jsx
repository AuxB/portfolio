import React, { useState, useEffect } from 'react';
import { push as Menu } from 'react-burger-menu';

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
      overlay.style.background = 'rgba(0, 0, 0, 0)';
    } else {
      setMobile(false);
      closeButton.style.display = 'block';
      overlay.style.background = 'rgba(0, 0, 0, 0.3)';
    }
  });

  return (
    <div>
      <Menu elastic disableOverlayClick width="250px" isOpen={isMobile} className="Navbar" disableAutoFocus>
        <img className="profil" src={profil} alt="profil" />
        <ul>
          <li>
            <a href="localhost">A propos</a>
            <img src={aboutLogo} alt="about logo" />
          </li>
          <li>
            <a href="localhost">Travaux</a>
            <img src={workLogo} alt="work logo" />
          </li>
          <li>
            <a href="localhost">Expériences</a>
            <img src={portfolioLogo} alt="portfolio logo" />
          </li>
        </ul>
        <div className="networkLogo">
          <a href="localhost"><img src={inLogo} alt="linkedin logo" /></a>
          <a href="localhost"><img src={googleLogo} alt="google logo" /></a>
          <a href="localhost"><img src={gitLogo} alt="github logo" /></a>
        </div>
      </Menu>
    </div>
  );
};

export default Sidebar;
