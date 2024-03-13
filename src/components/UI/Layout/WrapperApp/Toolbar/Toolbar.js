import React from 'react';
import classes from './Toolbar.module.css';
import Logo from './Logo/Logo';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import ContactBar from './ContactBar/ContactBar';

const toolbar = (props) => (
<div className={classes.Toolbar}>
    <DrawerToggle clicked={props.toggleSideDrawer} />

    <Logo />
    
    <div className={classes.MobileOnly}>
      <div>:|| Jai Gurudev ||:</div>
      <div className={classes.Peetam}>Shri Agastya Peetam</div>
    </div>

    <nav className={classes.DesktopOnly}>
      <ContactBar  />
      <NavigationItems  />
    </nav>
</div>
);

export default toolbar;