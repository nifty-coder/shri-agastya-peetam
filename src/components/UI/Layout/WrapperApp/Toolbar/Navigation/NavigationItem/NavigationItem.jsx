
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
                <div className={classes.NavigationItem}>
                        <NavLink title={props.title} exact={props.exact.toString()} to={props.link}>{props.children}</NavLink>
                        <h4 className={classes.Separator}>{/* css styles - no actual thing to display */}</h4>
                </div>
);

NavigationItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
};

export default NavigationItem;