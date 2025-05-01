
function EducationDataDisplay({ educationData, onEdit }) {
    return (
        <>
        {educationData.map((entry) => (
            <div className="display-data" key={entry.id}>
                <div className="display-data-content">
                    <p className="text fw-bold">{entry.schoolName}</p>
                    <p className="text">{entry.schoolLocation}</p>
                    <p className="text">{entry.degree}</p>
                    <p className="text">{entry.educationStartDate} - {entry.educationEndDate}</p>
                </div>

                <div className="display-data-action">
                    <button 
                        className="btn btn-secondary" 
                        type="button" 
                        onClick={() => onEdit(entry.id)}
                    >Edit</button>
                </div>
            </div>
        ))}
       </>
    );
}

export default EducationDataDisplay;
