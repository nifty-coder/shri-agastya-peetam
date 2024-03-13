import React, { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';

const WrapperApp = () => {
    let [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };
    
   const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };
    
    return (
        <div>
            <Toolbar toggleSideDrawer={sideDrawerToggleHandler} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} showCloseIcon={false} />
         </div>
    );
};

export default WrapperApp;