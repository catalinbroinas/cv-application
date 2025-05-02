
function CVEducation({ educationData }) {
    return (
        <div className="cv-education">
            <h3 className="sub-title">Education</h3>

            {educationData.map((entry) => (
                <div className="content" key={entry.id}>
                    <div className="date-time">
                        <p className="text">
                            {entry.educationStartDate} - {entry.isPresentStudy ? 'present' : entry.educationEndDate}
                        </p>
                        <p className="text">{entry.schoolLocation}</p>
                    </div>

                    <div className="degree">
                        <p className="text fw-bold">{entry.schoolName}</p>
                        <p className="text">{entry.degree}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CVEducation;
