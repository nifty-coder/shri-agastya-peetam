import AppLogo from '../../../../../../assets/images/logo.jpg';
import classes from './Logo.module.css';

const Logo = () => (
    <div className={classes.Logo}>
       <a href="/">
        <img 
        src={AppLogo}
        alt="Logo of Shri Agastya Peetam" />
       </a> 
    </div>
);

export default Logo;