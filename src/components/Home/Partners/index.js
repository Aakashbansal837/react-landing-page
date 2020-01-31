import React from 'react';
import './partners.scss';
import { ReactComponent as Card1 } from '../../../images/card1.svg';
import { ReactComponent as Card2 } from '../../../images/card2.svg';
import Card3 from '../../../images/card3.svg';
// import { ReactComponent as Card3 } from '../../../images/card3.svg';
import { ReactComponent as Card4 } from '../../../images/card4.svg';


const Partners = () => {
    return (<div className='partner-div'>
        <center className="partner-div-header">
            Gyanodaya Partners
        </center>
        <div className='partner-div-stack'>
            <div className='partner-div-stack-card'>
                <Card1 className='partner-div-stack-card-1' />
            </div>
            <div className='partner-div-stack-card'>
                <Card2 className='partner-div-stack-card-2' />
            </div>
            <div className='partner-div-stack-card'>
            {/* <Card3 className='partner-div-stack-card-3' /> */}
                <img src={Card3} className='partner-div-stack-card-3' alt='partner image' />
            </div>
            <div className='partner-div-stack-card'>
                <Card4 className='partner-div-stack-card-4' />
            </div>
            
        </div>
        
    </div>);
}

export default Partners;