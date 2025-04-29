
function CVExperience({ experienceData }) {
    const { jobTitle, companyName, experienceStartDate, experienceEndDate, jobDescription } = experienceData;

    return (
        <div className="cv-experience">
            <h3 className="sub-title">Professional Experience</h3>

            <div className="content">
                <div className="date-time">
                    <p className="text">{experienceStartDate} - {experienceEndDate}</p>
                </div>

                <div className="job">
                    <p className="text fw-bold">{companyName}</p>
                    <p className="text">{jobTitle}</p>
                    <p className="text-light">{jobDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default CVExperience;
