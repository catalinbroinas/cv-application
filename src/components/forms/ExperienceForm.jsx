import { useState } from "react";

function ExperienceForm({ onAdd }) {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [experienceStartDate, setExperienceStartDate] = useState('');
    const [experienceEndDate, setExperienceEndDate] = useState('');
    
    const handleAddClick = () => {
        onAdd({jobTitle, companyName, experienceStartDate, experienceEndDate, jobDescription});
    };

    return (
        <form 
            id="experience-form" 
            className="form-wrapper"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="form-group">
                <div className="form-outline">
                    <input 
                        type="text" 
                        id="job-title" 
                        className="form-control" 
                        placeholder="Job title"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                    <label htmlFor="job-title" className="form-label">Job title</label>
                </div>

                <div className="form-outline">
                    <input 
                        type="text" 
                        id="company-name" 
                        className="form-control" 
                        placeholder="Company name" 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <label htmlFor="company-name" className="form-label">Company name</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input 
                        type="date" 
                        id="experience-start-date" 
                        className="form-control" 
                        placeholder="Start date"
                        value={experienceStartDate}
                        onChange={(e) => setExperienceStartDate(e.target.value)}
                    />
                    <label htmlFor="experience-start-date" className="form-label">Start date</label>
                </div>

                <div className="form-outline">
                    <input 
                        type="date" 
                        id="experience-end-date" 
                        className="form-control" 
                        placeholder="End date"
                        value={experienceEndDate}
                        onChange={(e) => setExperienceEndDate(e.target.value)}
                    />
                    <label htmlFor="experience-end-date" className="form-label">End date</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <textarea 
                        id="job-description" 
                        className="form-control" 
                        placeholder="Job description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    ></textarea>
                    <label htmlFor="job-description" className="form-label">Job description</label>
                </div>
            </div>

            <button className="btn btn-primary" onClick={handleAddClick}>Add</button>
        </form>
    );
}

export default ExperienceForm;
