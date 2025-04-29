
function CVEducation({ educationData }) {
    const { schoolName, schoolLocation, degree, educationStartDate, educationEndDate } = educationData;

    return (
        <div className="cv-education">
            <h3 className="sub-title">Education</h3>

            <div className="content">
                <div className="date-time">
                    <p className="text">{educationStartDate} - {educationEndDate}</p>
                    <p className="text">{schoolLocation}</p>
                </div>

                <div className="degree">
                    <p className="text fw-bold">{schoolName}</p>
                    <p className="text">{degree}</p>
                </div>
            </div>
        </div>
    );
}

export default CVEducation;
