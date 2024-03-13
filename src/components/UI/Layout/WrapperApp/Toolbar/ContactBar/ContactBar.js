import React from 'react';
import classes from './ContactBar.module.css';
import ContactUs from '../../../ContactUs/ContactUs';

const ContactBar = () => {
    return (
        <div className={classes.DesktopContactBar}>
            <p></p>
            <p className={classes.AlignVertical}>:|| Jai Gurudev ||:</p>
            <p className={[classes.Peetam, classes.AlignVertical].join(' ')}>Shri Agastya Peetam</p>                      
            <ContactUs addressShown={false} className={[classes.DesktopSubGrid, classes.AlignVertical].join(' ')} emailTelClassName={classes.EmailTel} />
        </div>
    );
};

export default ContactBar;