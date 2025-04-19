
function CVEducation({ schoolName, schoolLocation, degree, startDate, endDate }) {
    return (
        <div className="cv-education">
            <h3 className="sub-title">Education</h3>

            <div className="date-time">
                <span className="text">{startDate}-{endDate}</span>
                <span className="text">{schoolLocation}</span>
            </div>

            <div className="degree">
                <span className="text fw-bold">{schoolName}</span>
                <span className="text">{degree}</span>
            </div>
        </div>
    );
}

export default CVEducation;
