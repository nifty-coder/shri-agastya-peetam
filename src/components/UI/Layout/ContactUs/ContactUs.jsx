
import classes from './ContactUs.module.css';
import contactDetails from '../../../../helpers/ContactUsDetails';
import commonClasses from '../../../../helpers/commonClasses.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = (props) => {
    let addressClass = classes.AddressBlock;
    let addressMaps = "https://www.google.com/maps/place/Shri+Agastya+Peetham+Ashramam/@16.8198969,80.3958638,17z/data=!3m1!4b1!4m5!3m4!1s0x3a35b9f8de12ddc3:0xca5d52a272276b50!8m2!3d16.8198969!4d80.3980578?hl=en-US";

    if(!props.addressShown) {
        addressClass = classes.AddressNone;
    }

    return (
        <div className={props.className}>
            <div className={addressClass}>
                <span className={commonClasses.Headings}>Contact Us</span>
                <br />
          
                <a href={addressMaps} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {
                        contactDetails.addressLines.map(
                            (addressLine, index) => {
                                return <span key={index}>{addressLine} <br /> </span>;
                            }
                        )
                    }
                </a>
            </div>

            <div className={props.emailTelClassName}>
                <span className={[commonClasses.Headings, addressClass].join(' ')}>Email/Call</span>
                <span>
                    <FontAwesomeIcon icon={faEnvelope} /> <a 
                    href={"mailto:" + contactDetails.email}
                    className={classes.Email} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    {contactDetails.email}
                    </a>
                </span>
                
                <p className={classes.CommunicationIcons}>
                    <FontAwesomeIcon icon={faPhone} /> India: {contactDetails.telephone.india.map((phone, index) => {
                        return (
                        <span key={index}>
                            <a href={"tel:" + phone} className={classes.EmailTel}>{phone}</a>
                            {index === 0 ? " | " : (<br />)}
                        </span>
                        );
                    })}

                    <FontAwesomeIcon icon={faPhone} /> USA: {contactDetails.telephone.usa.map((phone, index) => {
                        return (
                        <span key={index}>
                            <a href={"tel:" + phone} className={classes.EmailTel}>{phone}</a>
                        </span>
                        );
                    })}
                </p>
            </div>

            <p className={classes.SocialMediaIcons}>
                <span className={[commonClasses.Headings, addressClass].join(' ')}>Social Media</span>
             
                <a 
                href="https://www.facebook.com/Shri-Agastya-Peetam-109264204197416/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={classes.SocialMedia}>
                    <FontAwesomeIcon icon={faFacebook} size='lg' />
                </a>

                <span>&nbsp; &nbsp;</span>
                <a 
                href="https://www.youtube.com/channel/UCzV3yybbv_iP43Ln6CsRbdw/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={classes.SocialMedia}>
                    <FontAwesomeIcon icon={faYoutube} size='lg' />
                </a>                              
            </p>
        </div>
    );
};

export default ContactUs;

ContactUs.propTypes = {
    addressShown: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    emailTelClassName: PropTypes.string
};