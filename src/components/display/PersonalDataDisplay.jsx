import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function PersonalDataDisplay({ personalData, onEdit }) {
    const { firstName, lastName, email, phone, address } = personalData;
    const fullName = firstName + ' ' + lastName;

    const handleEditClick = () => onEdit();

    return (
        <div className="display-data">
            <div className="display-data-content">
                <p className="text fw-bold">{fullName}</p>
                <p className="text">{email}</p>
                <p className="text">{phone}</p>
                <p className="text">{address}</p>
            </div>

            <div className="display-data-action">
                <button 
                    className="btn btn-secondary btn-rounded" 
                    type="button"
                    aria-label="Edit"
                    onClick={handleEditClick}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
            </div>
        </div>
    );
}

export default PersonalDataDisplay;
