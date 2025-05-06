import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";

function CVHeader({ personalData }) {
    const { firstName, lastName, email, phone, address } = personalData;
    const fullName = firstName + ' ' + lastName;
    
    return (
        <div className="cv-header">
            <h3 id="" className="title">{fullName}</h3>

            <div className="cv-contact">
                <p className="text">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />{email}
                </p>
                <p className="text">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />{phone}
                </p>
                <p className="text">
                    <FontAwesomeIcon icon={faLocationPin} className="me-2" />{address}
                </p>
            </div>
        </div>
    );
}

export default CVHeader;
