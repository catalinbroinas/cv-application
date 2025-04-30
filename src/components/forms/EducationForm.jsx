import { useState } from "react";

function EducationForm({ onAdd }) {
    const [schoolName, setSchoolName] = useState('');
    const [schoolLocation, setSchoolLocation] = useState('');
    const [degree, setDegree] = useState('');
    const [educationStartDate, setEducationStartDate] = useState('');
    const [educationEndDate, setEducationEndDate] = useState('');

    const handleAddClick = () => {
        onAdd({ schoolName, schoolLocation, degree, educationStartDate, educationEndDate });
    };

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
                        className="form-control" 
                        placeholder="End date"
                        value={educationEndDate}
                        onChange={(e) => setEducationEndDate(e.target.value)}
                    />
                    <label htmlFor="education-end-date" className="form-label">End date</label>
                </div>
            </div>

            <button className="btn btn-primary" onClick={handleAddClick}>Add</button>
        </form>
    );
}

export default EducationForm;
