import { useState } from "react";

function ExperienceForm({ onAdd, onBack, initialData = {} }) {
    const id = crypto.randomUUID() || initialData.id;
    const [jobTitle, setJobTitle] = useState(initialData.jobTitle || '');
    const [jobDescription, setJobDescription] = useState(initialData.jobDescription || '');
    const [companyName, setCompanyName] = useState(initialData.companyName || '');
    const [experienceStartDate, setExperienceStartDate] = useState(initialData.experienceStartDate || '');
    const [experienceEndDate, setExperienceEndDate] = useState(initialData.experienceEndDate || '');
    
    const handleAddClick = () => {
        onAdd({ id, jobTitle, companyName, experienceStartDate, experienceEndDate, jobDescription});
    };

    const handleBackClick = () => onBack();

    const handleClearClick = () => {
        setJobTitle('');
        setJobDescription('');
        setCompanyName('');
        setExperienceStartDate('');
        setExperienceEndDate('');
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

            <div className="button-group">
                <button
                    className="btn btn-tertiary"
                    type="button"
                    onClick={handleBackClick}
                >Back</button>

                <button 
                    className="btn btn-secondary" 
                    type="reset" 
                    onClick={handleClearClick}
                >Clear</button>

                <button 
                    className="btn btn-primary" 
                    type="submit" 
                    onClick={handleAddClick}
                >Add</button>
            </div>
        </form>
    );
}

export default ExperienceForm;
