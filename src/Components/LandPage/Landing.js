import React from 'react';
import './Landing.css';
import img1 from '../../Assets/img1.png';
import Card from './WRights';

const Landing = props => {
    return(
        <div className="body1">
            <img src = {img1} className="bkimage" />
            <Card />
        </div>
    )
};

export default Landing;