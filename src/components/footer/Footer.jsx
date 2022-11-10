import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">
                <i class="fa fa-buysellads" aria-hidden="true">
                    </i> 
                </h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/juz_call_meh_bobby/?hl=en" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/abhi.lash.7923/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://twitter.com/ba_abhi" className="footer__social-link" target="_blank">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer__copy">
                Copyright © 2022 Abhilash Goud, All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer
