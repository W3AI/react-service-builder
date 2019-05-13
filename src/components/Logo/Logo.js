import React from 'react';

import productLogo from '../../assets/images/M8-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={productLogo} alt="M8 sMart Engine" />
    </div>
);

export default logo;

