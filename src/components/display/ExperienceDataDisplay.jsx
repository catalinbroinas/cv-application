
function ExperienceDataDisplay({ experienceData, onEdit }) {
    const handleEditClick = () => onEdit();

    return (
        <>
            {experienceData.map((entry) => (
                <div className="display-data">
                    <div className="display-data-content">
                        <p className="text fw-bold">{entry.companyName}</p>
                        <p className="text">{entry.jobTitle}</p>
                        <p className="text">{entry.jobDescription}</p>
                        <p className="text">{entry.experienceStartDate} - {entry.experienceEndDate}</p>
                    </div>

                    <div className="display-data-action">
                        <button className="btn btn-secondary" type="button" onClick={handleEditClick}>Edit</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ExperienceDataDisplay;
