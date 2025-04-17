
function ExperienceForm() {
    return (
        <form id="experience-form" className="form-section">
            <h3 className="sub-title">Work Experience</h3>

            <div className="form-group">
                <div className="form-outline">
                    <input type="text" id="job-title" className="form-control" placeholder="Job title" />
                    <label htmlFor="job-title" className="form-label">Job title</label>
                </div>

                <div className="form-outline">
                    <input type="text" id="company-name" className="form-control" placeholder="Company name" />
                    <label htmlFor="company-name" className="form-label">Company name</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input type="date" id="experience-start-date" className="form-control" placeholder="Start date" />
                    <label htmlFor="experience-start-date" className="form-label">Start date</label>
                </div>

                <div className="form-outline">
                    <input type="date" id="experience-end-date" className="form-control" placeholder="End date" />
                    <label htmlFor="experience-end-date" className="form-label">End date</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <textarea id="job-description" className="form-control" placeholder="Job description"></textarea>
                    <label htmlFor="job-description" className="form-label">Job description</label>
                </div>
            </div>
        </form>
    );
}

export default ExperienceForm;
