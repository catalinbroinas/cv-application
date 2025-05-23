
function CVExperience({ experienceData }) {
    return (
        <div className="cv-experience">
            <h3 className="sub-title">Professional Experience</h3>

            {experienceData.map((entry) => (
                <div className="content" key={entry.id}>
                    <div className="job">
                    <p className="text fw-bolder">{entry.jobTitle}</p>
                        <p className="text fw-bold text-primary">{entry.companyName}</p>
                        <p className="text text-secondary">{entry.jobDescription}</p>
                    </div>

                    <div className="date-time">
                        <p className="text">
                            {entry.experienceStartDate} - {entry.isPresentWork ? 'present' : entry.experienceEndDate}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CVExperience;
