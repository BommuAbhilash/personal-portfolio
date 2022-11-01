import React from 'react'
import { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualifcation</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ?
                            "qualification__button qualification__active button--flex" :
                            "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    B.TECH
                                </h3>
                                <span className="qualificaton__subtitle">CMR COLLEGE</span>
                                <div className="qualification__calender">

                                    <i class="fa-solid fa-percent"></i> <span>Percent- <b>8.19/10</b></span>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    DIPLOMA
                                </h3>
                                <span className="qualificaton__subtitle">TKR COLLEGE</span>
                                <div className="qualification__calender">
                                    <i class="fa-solid fa-percent"></i> <span>Percent- <b>71/100</b></span>
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    SSC
                                </h3>
                                <span className="qualificaton__subtitle">S.S. BHOOPATHY H.S</span>
                                <div className="qualification__calender">
                                    <i class="fa-solid fa-percent"></i> <span>Percent- <b>8.7/10</b></span>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">
                                    B.TECH
                                </h3>
                                <span className="qualificaton__subtitle">CMR COLLEGE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>medchal,hyderabad
                                </div>
                            </div>

                        </div> */}
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }>
                            <div className='experience__qualification'>
                                <h4 className="qualification__title">Newton School</h4>
                                <h5>Full Stack Web Developer</h5>
                            </div>
                            
                        <div className="qualification__data">
                            <div id='experience'>
                                <p className="qualification__subtitle">
                                Solved 100+ problems of Data Structures and Algorithms.
                                </p>
                                

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <p className="qualification__subtitle">
                                Implemented projects using HTML,CSS,Sass,JS and ReactJS for Frontend Development and deployed applications on Netlify.
                                </p>
                                {/* <span className="qualificaton__subtitle">CMR COLLEGE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>medchal,hyderabad
                                </div> */}
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <p className="qualification__subtitle">
                                Participated in weekly coding competitions held by Newton School.
                                </p>
                                {/* <span className="qualificaton__subtitle">CMR COLLEGE</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>medchal,hyderabad
                                </div> */}
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <p className="qualification__title">
                                
                                </p>
                                
                            </div>

                        </div> */}
                    </div>
                    {/* <div className="qualification__calender">
                                <li className="qualification__calender-experience">Solved 100+ problems of Data Structures and Algorithms.</li>
                                <li className="qualification__calender-experience">Technical Stack Learnt: HTML, CSS, JavaScript, React, Java ,Node, Data structure.</li>
                                <li className="qualification__calender-experience">Implemented projects using HTML,CSS,Sass, Bootstrap, JS, and ReactJS for Frontend Development and deployed applications on Netlify.</li>
                                <li className="qualification__calender-experience">Participated in weekly coding competitions held by Newton School.</li>
                            </div> */}
                </div>
            </div>
        </section>
    )
}

export default Qualification

