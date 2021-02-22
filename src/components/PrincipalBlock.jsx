import React from 'react';
import '../assets/styles/components/ContentBlock.scss';
import logo from '../assets/static/pattern-2.jpg'




const PrincipalBlock = () => (
    <section className="contentBlock">
        <div className="contentBlock__bg" style={{backgroundImage: `url(${logo})` }}></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="contentBlock__greetings">
                        <p>Hello</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PrincipalBlock;