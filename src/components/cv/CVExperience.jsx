
function CVExperience({ company, job, description, startDate, endDate }) {
    return (
        <div className="cv-experience">
            <h3 className="sub-title">Professional Experience</h3>

            <div className="date-time">
                <span className="text">{startDate}-{endDate}</span>
            </div>

            <div className="job">
                <span className="text fw-bold">{company}</span>
                <span className="text fw-bolder">{job}</span>
                <span className="text">{description}</span>
            </div>
        </div>
    );
}

export default CVExperience;
