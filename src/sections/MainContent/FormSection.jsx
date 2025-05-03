import { useState } from "react";

import PersonalDataForm from "../../components/forms/PersonalDataForm";
import EducationForm from "../../components/forms/EducationForm";
import ExperienceForm from "../../components/forms/ExperienceForm";
import PersonalDataDisplay from "../../components/display/PersonalDataDisplay";
import EducationDataDisplay from "../../components/display/EducationDataDisplay";
import ExperienceDataDisplay from "../../components/display/ExperienceDataDisplay";

function FormSection({ setPersonalData, personalData, setEducationData, educationData, setExperienceData, experienceData }) {
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingEducation, setIsEditingEducation] = useState(false);
    const [isEditingExperience, setIsEditingExperience] = useState(false);

    const [educationEditingId, setEducationEditingId] = useState(null);
    const [experienceEditingId, setExperienceEditingId] = useState(null);

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

                            onBack={() => {
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
                            initialData={
                                educationEditingId 
                                    ? educationData.find(item => item.id === educationEditingId) 
                                    : {}
                            }

                            isEditing={educationEditingId}
                            
                            onAdd={(entry) => {
                                if (educationEditingId) {
                                  // Edit
                                  setEducationData(prev =>
                                    prev.map((item) => item.id === educationEditingId ? entry : item)
                                  );
                                } else {
                                  // Add
                                  setEducationData(prev => [...prev, entry]);
                                }
                              
                                setEducationEditingId(null);
                                setIsEditingEducation(false);
                            }}

                            onBack={() => {
                                setEducationEditingId(null);
                                setIsEditingEducation(false);
                            }}
                        />
                    ) : (
                        <>
                            <EducationDataDisplay
                                educationData={educationData}

                                onEdit={(id) => {
                                    setEducationEditingId(id);
                                    setIsEditingEducation(true);
                                }}

                                onDelete={(id) => {
                                    setEducationData(prev => prev.filter(item => item.id !== id ))
                                }}
                            />
                            <button 
                                className="btn btn-primary" 
                                type="button"
                                onClick={() => {
                                    setIsEditingEducation(true)
                                    setEducationEditingId(null)
                                }}
                            >Add Education</button>
                        </>
                    )
                }
            </div>

            <div className="form-section">
                <h3 className="sub-title">Work Experience</h3>

                {
                    isEditingExperience ? (
                        <ExperienceForm 
                            initialData={
                                experienceEditingId
                                    ? experienceData.find(item => item.id === experienceEditingId)
                                    : {}
                            }

                            isEditing={experienceEditingId}

                            onAdd={(entry) => {
                                if (experienceEditingId) {
                                    // Edit
                                    setExperienceData((prev) => (
                                        prev.map(item => item.id === experienceEditingId ? entry : item)
                                    ))
                                } else {
                                    setExperienceData(prev => [...prev, entry])
                                }

                                setExperienceEditingId(null)
                                setIsEditingExperience(false)
                            }}

                            onBack={() => {
                                setExperienceEditingId(null)
                                setIsEditingExperience(false)
                            }}
                        />
                    ) : (
                        <>
                            <ExperienceDataDisplay
                                experienceData={experienceData}

                                onEdit={(id) => {
                                    setExperienceEditingId(id)
                                    setIsEditingExperience(true)
                                }}

                                onDelete={(id) => {
                                    setExperienceData(prev => prev.filter(item => item.id !== id))
                                }}
                            />

                            <button 
                                className="btn btn-primary" 
                                type="button"
                                onClick={() => {
                                    setIsEditingExperience(true)
                                    setExperienceEditingId(null)
                                }}
                            >Add Experience</button>
                        </>
                    )
                }
            </div>
        </section>
    );
}

export default FormSection;
