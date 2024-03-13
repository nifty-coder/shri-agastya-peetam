import React from 'react';
import classes from './BottomBar.module.css';
import ContactUs from '../ContactUs/ContactUs';
import commonClasses from '../../../../helpers/commonClasses.module.css';

const BottomBar = () => (
        <div className={classes.BottomBar}>

          <ContactUs addressShown={true} className={classes.BottomBarSubGrid1} />
          
          <div className={classes.BottomBarSubGrid2}>
            <div className={classes.AboutDeveloper}>
              <span className={commonClasses.Headings}>Website Developer</span>
              <br />
              Name : Surya Kasibhatla
              <br />
              Age at the time of Publishing : 12 years
              <br />
              Profile : <a 
                  href="https://surya-kasibhatla-portfolio.web.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                    Click here
                  </a>
            </div>
          </div>

          <div className={classes.CopyRight}>
            Copyright © {new Date().getFullYear()}, &nbsp;Shri Agastya Peetam Trust of Narasimharao Palem,&nbsp;&nbsp;All Rights Reserved.
          </div>
          
        </div>
    );

export default BottomBar;