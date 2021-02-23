import React from 'react';
import '../assets/styles/components/ContentBlock.scss';
import logo from '../assets/static/pattern-2.jpg'




const PrincipalBlock = () => (
    <section className="contentBlock">
        <div className="contentBlock__bg" style={{backgroundImage: `url(${logo})` }}></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
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
                </div>

                {/* <div className="col-12">
                    <ul className="socialmediaBlock">
                        <li className="socialmediaBlock">
                            <a href="#" target="_blank">
                                
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    </section>
);

export default PrincipalBlock;