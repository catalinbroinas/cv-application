
function EducationForm() {
    return (
        <form id="education-form" className="form-section">
            <h3>Education</h3>

            <div className="form-group">
                <div className="form-outline">
                    <input type="text" id="school-name" className="form-control" placeholder="School name" />
                    <label htmlFor="school-name" className="form-label">School name</label>
                </div>

                <div className="form-outline">
                    <input type="text" id="school-location" className="form-control" placeholder="Location" />
                    <label htmlFor="school-location" className="form-label">Location</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input type="text" id="degree" className="form-control" placeholder="Degree" />
                    <label htmlFor="degree" className="form-label">Degree</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input type="date" id="start-date" className="form-control" placeholder="Start date" />
                    <label htmlFor="start-date" className="form-label">Start date</label>
                </div>

                <div className="form-outline">
                    <input type="date" id="end-date" className="form-control" placeholder="End date" />
                    <label htmlFor="end-date" className="form-label">End date</label>
                </div>
            </div>
        </form>
    );
}

export default EducationForm;
