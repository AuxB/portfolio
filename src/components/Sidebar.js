import React, { useState, useEffect } from 'react'
import { push as Menu } from 'react-burger-menu'

import './Sidebar.css'

import aboutLogo from '../img/gear.png'
import workLogo from '../img/monitor.png'
import portfolioLogo from '../img/portfolio.png'
import profil from '../img/profil.png'
import inLogo from '../img/linkedin.svg'
import googleLogo from '../img/google.svg'
import gitLogo from '../img/github.svg'

export default function Sidebar() {

    const [isMobile, setMobile] = useState(true)

    useEffect(() => {

        const closeButton = document.querySelector('.bm-cross-button')
        const overlay = document.querySelector('.bm-overlay')

        if (window.innerWidth > 920) {
            setMobile(true)
            closeButton.style.display = 'none'
            overlay.style.background = 'rgba(0, 0, 0, 0)'
        } else {
            setMobile(false)
            closeButton.style.display = 'block'
            overlay.style.background = 'rgba(0, 0, 0, 0.3)'
        }

    })

    return (
        <div>
            <Menu elastic disableOverlayClick={isMobile} width={'250px'} isOpen={isMobile} className="Navbar" disableAutoFocus>
                <img className="profil" src={profil} />
                <ul>
                    <li>
                        <a>A propos</a>
                        <img src={aboutLogo} />
                    </li>
                    <li>
                        <a>Travaux</a>
                        <img src={workLogo} />
                    </li>
                    <li>
                        <a>Expériences</a>
                        <img src={portfolioLogo} />
                    </li>
                </ul>
                <div className="networkLogo">
                    <a href=""><img src={inLogo} /></a>
                    <a href=""><img src={googleLogo} /></a>
                    <a href=""><img src={gitLogo} /></a>
                </div>
            </Menu>
        </div>
    );
}
