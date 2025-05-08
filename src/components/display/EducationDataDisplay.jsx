import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash  } from "@fortawesome/free-solid-svg-icons";

function EducationDataDisplay({ educationData, onEdit, onDelete }) {
    return (
        <>
        {educationData.map((entry) => (
            <div className="display-data" key={entry.id}>
                <div className="display-data-content">
                    <p className="text fw-bold">{entry.schoolName}</p>
                    <p className="text">{entry.degree}</p>
                    <p className="text">
                        {entry.educationStartDate} - {entry.isPresentStudy ? 'present' : entry.educationEndDate}
                    </p>
                    <p className="text">{entry.schoolLocation}</p>
                </div>

                <div className="display-data-action">
                    <button
                        className="btn btn-secondary btn-rounded btn-delete"
                        type="button"
                        aria-label="Delete"
                        onClick={() => onDelete(entry.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>

                    <button 
                        className="btn btn-secondary btn-rounded" 
                        type="button"
                        aria-label="Edit"
                        onClick={() => onEdit(entry.id)}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </div>
            </div>
        ))}
       </>
    );
}

export default EducationDataDisplay;
