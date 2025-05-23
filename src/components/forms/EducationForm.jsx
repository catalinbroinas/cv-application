import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

function EducationForm({ onAdd, onBack, isEditing, initialData = {} }) {
    const id = initialData.id || crypto.randomUUID();
    const [schoolName, setSchoolName] = useState(initialData.schoolName || '');
    const [schoolLocation, setSchoolLocation] = useState(initialData.schoolLocation || '');
    const [degree, setDegree] = useState(initialData.degree || '');
    const [educationStartDate, setEducationStartDate] = useState(initialData.educationStartDate || '');
    const [educationEndDate, setEducationEndDate] = useState(initialData.educationEndDate || '');
    const [isPresentStudy, setIsPresentStudy] = useState(initialData.isPresentStudy || false);

    const handleAddClick = () => { 
        onAdd({
            id, 
            schoolName, 
            schoolLocation, 
            degree, 
            educationStartDate, 
            educationEndDate: isPresentStudy ? '' : educationEndDate,
            isPresentStudy
        });
    };

    const handleBackClick = () => onBack();

    const handleClearClick = () => {
        setSchoolName('');
        setSchoolLocation('');
        setDegree('');
        setEducationStartDate('');
        setEducationEndDate('');
    };

    const isButtonDisabled = !(
        schoolName && 
        schoolLocation && 
        degree && 
        educationStartDate &&
        (isPresentStudy || educationEndDate)
    );

    return (
        <form 
            id="education-form" 
            className="form-wrapper"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="form-group">
                <div className="form-outline">
                    <input 
                        type="text" 
                        id="school-name" 
                        className="form-control" 
                        placeholder="School name" 
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                    />
                    <label htmlFor="school-name" className="form-label">School name</label>
                </div>

                <div className="form-outline">
                    <input 
                        type="text" 
                        id="school-location" 
                        className="form-control" 
                        placeholder="Location"
                        value={schoolLocation}
                        onChange={(e) => setSchoolLocation(e.target.value)}
                    />
                    <label htmlFor="school-location" className="form-label">Location</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input 
                        type="text" 
                        id="degree" 
                        className="form-control" 
                        placeholder="Degree"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                    />
                    <label htmlFor="degree" className="form-label">Degree</label>
                </div>
            </div>

            <div className="form-group">
                <div className="form-outline">
                    <input 
                        type="date" 
                        id="education-start-date" 
                        className="form-control" 
                        placeholder="Start date"
                        value={educationStartDate}
                        onChange={(e) => setEducationStartDate(e.target.value)}
                    />
                    <label htmlFor="education-start-date" className="form-label">Start date</label>
                </div>

                <div className="form-outline">
                    <input 
                        type="date" 
                        id="education-end-date" 
                        className={isPresentStudy ? 'form-control form-disabled' : 'form-control'}
                        placeholder="End date"
                        value={isPresentStudy ? '' : educationEndDate}
                        onChange={(e) => setEducationEndDate(e.target.value)}
                        disabled={isPresentStudy}
                    />
                    <label htmlFor="education-end-date" className="form-label">End date</label>
                </div>

                <div className="form-outline checkbox-wrapper">
                    <input
                        type="checkbox"
                        id="education-present-date"
                        className="checkbox-input"
                        checked={isPresentStudy}
                        onChange={(e) => setIsPresentStudy(e.target.checked)}
                    />
                    <label htmlFor="education-present-date" className="checkbox-label">Present</label>
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
                    {isEditing ? (
                        <><FontAwesomeIcon icon={faCheck} className="me-2" />Save</>
                    ) : (
                        <><FontAwesomeIcon icon={faPlus} className="me-2" />Add</>
                    )}
                </button>
            </div>
        </form>
    );
}

export default EducationForm;
