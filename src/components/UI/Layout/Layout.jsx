import classes from './Layout.module.css';
import WrapperApp from './WrapperApp/WrapperApp';
import BottomBar from './BottomBar/BottomBar';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <WrapperApp />

      <div className={classes.MainContent}>
        {children}
      </div>

      <BottomBar />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;