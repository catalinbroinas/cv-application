import { useState } from "react";

import PersonalDataForm from "../../components/forms/PersonalDataForm";
import EducationForm from "../../components/forms/EducationForm";
import ExperienceForm from "../../components/forms/ExperienceForm";
import PersonalDataDisplay from "../../components/display/PersonalDataDisplay";
import EducationDataDisplay from "../../components/display/EducationDataDisplay";

function FormSection({ setPersonalData, personalData, setEducationData, educationData, setExperienceData }) {
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingEducation, setIsEditingEducation] = useState(false);

    return (
        <section className="insert-data">
            <h2 className="sr-only">Introduce data</h2>

            <div className="form-section">
                <h3 className="sub-title">Personal Information</h3>

                {
                    isEditing ? (
                        <PersonalDataForm 
                            onSave={(data) => {
                                setPersonalData(data);
                                setIsEditing(false);
                            }}
                            initialData={personalData}
                        />
                    ) : (
                        <PersonalDataDisplay
                            personalData={personalData}
                            onEdit={() => setIsEditing(true)}
                        />
                    )
                }
            </div>

            <div className="form-section">
                <h3 className="sub-title">Education</h3>

                {
                    isEditingEducation ? (
                        <EducationForm 
                            onAdd={(data) => {
                                setEducationData(data);
                                setIsEditingEducation(false);
                            }}
                            initialData={educationData}
                        />
                    ) : (
                        <EducationDataDisplay
                            educationData={educationData}
                            onEdit={() => setIsEditingEducation(true)}
                        />
                    )
                }
            </div>

            <div className="form-section">
                <h3 className="sub-title">Work Experience</h3>
                <ExperienceForm onAdd={setExperienceData} />
            </div>
        </section>
    );
}

export default FormSection;
