
function CVExperience({ experienceData }) {
    return (
        <div className="cv-experience">
            <h3 className="sub-title">Professional Experience</h3>

            {experienceData.map((entry) => (
                <div className="content" key={entry.id}>
                    <div className="date-time">
                        <p className="text">
                            {entry.experienceStartDate} - {entry.isPresentWork ? 'present' : entry.experienceEndDate}
                        </p>
                    </div>

                    <div className="job">
                        <p className="text fw-bold">{entry.companyName}</p>
                        <p className="text">{entry.jobTitle}</p>
                        <p className="text-light">{entry.jobDescription}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CVExperience;
