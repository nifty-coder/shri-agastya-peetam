import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import navItems from '../../../../../../../helpers/menuHelper';

const navigationItems = () => (
    <nav className={classes.NavigationItems}>
    {
      navItems.map( (navItem, i) => {
          return <NavigationItem key={i} link={navItem.link} exact={i === 1 ? true : false}>{navItem.name}</NavigationItem>
      })
    }

    <div className={classes.NavigationItem}>
      <a href="/">
      <button type="button" style={{ border: "none", background: "none" }} onClick={() => alert("Coming soon...")}>Donate</button>
      </a>
    </div>
   </nav>
);

export default navigationItems;