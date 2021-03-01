import React from 'react';
import '../assets/styles/components/ContentBlock.scss';
import bg from '../assets/static/pattern-2.jpg';
import linkedinIcon from '../assets/static/linkedin.svg';
import twitterIcon from '../assets/static/twitter.svg';
import githubIcon from '../assets/static/github.svg';



const PrincipalBlock = () => (
    <section className="contentBlock">
        <div className="contentBlock__bg" style={{backgroundImage: `url(${bg})` }}></div>
        <div className="container">
            <div className="row">
                <div className="col-12 firstCol">
                    <h4 className="contentBlock__animateGreetings">
                        <div>
                            <ul className="flip4">
                                <li>Hola!</li>
                                <li>Mba’éichapa!</li>
                                <li>Hi!</li>
                                <li>Olá!</li>
                            </ul>
                        </div>
                    </h4>

                    <div className="text">
                        <p>
                            I’m Alejandra Barreto, a <span>Front-end developer.</span> <br/> Born in Paraguay, living in Colombia.
                        </p>
                    </div>


                    <ul className="socialmediaBlock">
                        <li className="socialmediaBlock__item">
                            <a href="https://www.linkedin.com/in/mar%C3%ADa-alejandra-barreto-pereira/" target="_blank" aria-label="Go to linkedIn">
                                <img src={linkedinIcon} />
                            </a>
                        </li>

                        <li className="socialmediaBlock__item">
                            <a href="https://twitter.com/aleebarreto_" target="_blank" aria-label="Go to twitter">
                                <img src={twitterIcon} />
                            </a>
                        </li>

                        <li className="socialmediaBlock__item">
                            <a href="https://github.com/Barreto-Alejandra" target="_blank" aria-label="Go to Github">
                                <img src={githubIcon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default PrincipalBlock;