import React from 'react';
import './about.scss';
import { aboutDivTexthead , aboutDivTextDis } from "../../../constants";
import BgWall from '../../../images/vdo-bg-wall.svg';
import BgBall from '../../../images/vdo-bg-ball.svg';

const About = () => {
    return (
        <div className='abt'>
            <center className="abt-header">
                 About Gyanodaya
            </center>
            <div className='container'>
            <div className='row abt-dt'>
                <div className='abt-dt-vdo col-md-6 col-lg-6 col-sm-12 col-xs-12'>
                    <div className='abt-dt-vdo-vd'>
                        <iframe  src="https://www.youtube.com/embed/w2Ov5jzm3j8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='abt-dt-vdo-bg-wall'>
                        <img src={BgWall} />
                    </div>
                    <div className='abt-dt-vdo-bg-ball'>
                        <img src={BgBall} />
                    </div>
                </div>
                <div className='abt-dt-txt col-md-6 col-lg-6 col-sm-12 col-xs-12'>
                    <div>
                    <span className='abt-dt-txt-head'>
                        {aboutDivTexthead}
                    </span>
                    <br />
                    <br />
                    <span className='abt-dt-txt-dis'>
                        {aboutDivTextDis}
                    </span>
                    </div>
                    <div className="read-more">
                    <a href="#" className="read-more-btn">
                        Read more
                    <div className="transition"></div>
                    </a>
                    </div>
                </div>
            </div>
        
            </div>
            </div>
    );
}

export default About;