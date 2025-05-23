import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

function ExperienceForm({ onAdd, onBack, isEditing, initialData = {} }) {
    const id = crypto.randomUUID() || initialData.id;
    const [jobTitle, setJobTitle] = useState(initialData.jobTitle || '');
    const [jobDescription, setJobDescription] = useState(initialData.jobDescription || '');
    const [companyName, setCompanyName] = useState(initialData.companyName || '');
    const [experienceStartDate, setExperienceStartDate] = useState(initialData.experienceStartDate || '');
    const [experienceEndDate, setExperienceEndDate] = useState(initialData.experienceEndDate || '');
    const [isPresentWork, setIsPresentWork] = useState(initialData.isPresentWork || false);
    
    const handleAddClick = () => {
        onAdd({ 
            id, 
            jobTitle, 
            companyName, 
            experienceStartDate, 
            experienceEndDate: isPresentWork ? '' : experienceEndDate, 
            jobDescription,
            isPresentWork
        });
    };

    const handleBackClick = () => onBack();

    const handleClearClick = () => {
        setJobTitle('');
        setJobDescription('');
        setCompanyName('');
        setExperienceStartDate('');
        setExperienceEndDate('');
    };

    const isButtonDisabled = !(
        jobTitle &&
        jobDescription &&
        companyName &&
        experienceStartDate &&
        (experienceEndDate || isPresentWork)
    );

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
                        className={isPresentWork ? 'form-control form-disabled' : 'form-control'} 
                        placeholder="End date"
                        value={isPresentWork ? '' : experienceEndDate}
                        onChange={(e) => setExperienceEndDate(e.target.value)}
                        disabled={isPresentWork}
                    />
                    <label htmlFor="experience-end-date" className="form-label">End date</label>
                </div>

                <div className="form-outline checkbox-wrapper">
                    <input
                        type="checkbox"
                        id="experience-present-date"
                        className="checkbox-input"
                        checked={isPresentWork}
                        onChange={(e) => setIsPresentWork(e.target.checked)}
                    />
                    <label htmlFor="experience-present-date" className="checkbox-label">Present</label>
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
                ><FontAwesomeIcon icon={faArrowLeft} className="me-2" />Back</button>

                <button 
                    className="btn btn-secondary" 
                    type="reset" 
                    onClick={handleClearClick}
                ><FontAwesomeIcon icon={faTrash} className="me-2" />Clear</button>

                <button 
                    className={isButtonDisabled ? 'btn btn-primary btn-disabled' : 'btn btn-primary'}
                    type="submit" 
                    onClick={handleAddClick}
                    disabled={isButtonDisabled}
                >
                    {isEditing ?(
                        <><FontAwesomeIcon icon={faCheck} className="me-2" />Save</>
                    ) : (
                        <><FontAwesomeIcon icon={faPlus} className="me-2" />Add</>
                    )}
                </button>
            </div>
        </form>
    );
}

export default ExperienceForm;
