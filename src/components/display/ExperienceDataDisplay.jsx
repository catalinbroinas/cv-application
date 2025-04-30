
function ExperienceDataDisplay({ experienceData, onEdit }) {
    const {jobTitle, companyName, experienceStartDate, experienceEndDate, jobDescription} = experienceData;

    const handleEditClick = () => onEdit();

    return (
        <div className="display-data">
            <div className="display-data-content">
                <p className="text fw-bold">{companyName}</p>
                <p className="text">{jobTitle}</p>
                <p className="text">{jobDescription}</p>
                <p className="text">{experienceStartDate} - {experienceEndDate}</p>
            </div>

            <div className="display-data-action">
                <button className="btn btn-secondary" type="button" onClick={handleEditClick}>Edit</button>
            </div>
        </div>
    );
}

export default ExperienceDataDisplay;
