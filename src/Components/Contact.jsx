import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot,faPhone,faCalendarWeek,faClock} from '@fortawesome/free-solid-svg-icons'
function Contact(){
    return (
        <div className="container-contact">
            <div className="content">
                <div className="title">
                <h2>CONTACT US</h2>
                <figure><img src={require('../Images/divider.png')} width="500" /></figure>
                <h1>Our Address y Contact Details</h1> 
                </div>
                <div className="icons">
                    <div className="icon">
                        <FontAwesomeIcon icon={faMapLocationDot } size="4x" className="color4" />
                        <h3 className="color4">Postal Address</h3>
                        <h4>Name Kinder</h4>
                        <h4>123 Street</h4>
                        <h4>City, Country</h4>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhone } size="4x" className="color2"/>
                        <h3 className="color1">Phone &#38; Email</h3>
                        <h4>Phone 1: 987654321</h4>
                        <h4>Phone 2: 987654321</h4>
                        <h4>contact@mail.com</h4>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faCalendarWeek } size="4x" className="color3"/>
                        <h3 className="color2">Business Hours</h3>
                        <h4>Monday - Friday</h4>
                        <h4>08:30 - 17:30</h4>
                        <h4>Weekend Closed</h4>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faClock } size="4x" className="color1"/>
                        <h3 className="color3">Sessions</h3>
                        <h4>Mornings, 08:30 - 12:30</h4>
                        <h4>Afternoons, 13:30 - 17:30</h4>
                        <h4>Full Day, 08:30 - 17:30</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;