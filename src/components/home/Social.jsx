import React from 'react'
import './home.css'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/juz_call_meh_bobby/?hl=en" className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://github.com/BommuAbhilash?tab=repositories" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/abhilash-goud99/" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>
        </div>
    )
}

export default Social
