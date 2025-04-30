
function EducationDataDisplay({ educationData, onEdit }) {
    const {schoolName, schoolLocation, degree, educationStartDate, educationEndDate} = educationData;

    const handleEditClick = () => onEdit();

    return (
        <div className="display-data">
            <div className="display-data-content">
                <p className="text fw-bold">{schoolName}</p>
                <p className="text">{schoolLocation}</p>
                <p className="text">{degree}</p>
                <p className="text">{educationStartDate} - {educationEndDate}</p>
            </div>

            <div className="display-data-action">
                <button className="btn btn-secondary" type="button" onClick={handleEditClick}>Edit</button>
            </div>
        </div>
    );
}

export default EducationDataDisplay;
