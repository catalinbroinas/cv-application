import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash  } from "@fortawesome/free-solid-svg-icons";

function ExperienceDataDisplay({ experienceData, onEdit, onDelete }) {
    return (
        <>
            {experienceData.map((entry) => (
                <div className="display-data" key={entry.id}>
                    <div className="display-data-content">
                        <p className="text fw-bold">{entry.companyName}</p>
                        <p className="text">{entry.jobTitle}</p>
                        <p className="text">{entry.jobDescription}</p>
                        <p className="text">
                            {entry.experienceStartDate} - {entry.isPresentWork ? 'present' : entry.experienceEndDate}
                        </p>
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

export default ExperienceDataDisplay;
