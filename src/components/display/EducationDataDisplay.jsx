import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash  } from "@fortawesome/free-solid-svg-icons";

function EducationDataDisplay({ educationData, onEdit, onDelete }) {
    return (
        <>
        {educationData.map((entry) => (
            <div className="display-data" key={entry.id}>
                <div className="display-data-content">
                    <p className="text fw-bold">{entry.schoolName}</p>
                    <p className="text">{entry.schoolLocation}</p>
                    <p className="text">{entry.degree}</p>
                    <p className="text">
                        {entry.educationStartDate} - {entry.isPresentStudy ? 'present' : entry.educationEndDate}
                    </p>
                </div>

                <div className="display-data-action">
                    <button
                        className="btn btn-secondary btn-delete"
                        type="button"
                        onClick={() => onDelete(entry.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} className="me-2" />Delete
                    </button>

                    <button 
                        className="btn btn-secondary" 
                        type="button" 
                        onClick={() => onEdit(entry.id)}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} className="me-2" />Edit
                    </button>
                </div>
            </div>
        ))}
       </>
    );
}

export default EducationDataDisplay;
