import React from 'react';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
       <a href="/">
        <img 
        src="/images/logo.jpg" 
        alt="Logo of Sree Agastya Peetam" />
       </a> 
    </div>
);

export default logo;