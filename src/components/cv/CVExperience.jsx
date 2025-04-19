
function CVExperience({ company, job, description, startDate, endDate }) {
    return (
        <div className="cv-experience">
            <h3 className="sub-title">Professional Experience</h3>

            <div className="content">
                <div className="date-time">
                    <p className="text">{startDate}-{endDate}</p>
                </div>

                <div className="job">
                    <p className="text fw-bold">{company}</p>
                    <p className="text">{job}</p>
                    <p className="text-light">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CVExperience;
