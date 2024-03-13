import React, { Component } from 'react';
import classes from './Layout.module.css';
import WrapperApp from './WrapperApp/WrapperApp';
import BottomBar from './BottomBar/BottomBar';

class Layout extends Component {
 render() {
  return (
    <div className={classes.Layout}>
        <WrapperApp />

        <div className={classes.MainContent}>
        {this.props.children}
        </div>

        <BottomBar />
    </div>
     );
   }
};

export default Layout;