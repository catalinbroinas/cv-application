import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGraduationCap, faBriefcase, faPlus, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

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

    const [isPersonalDataOpen, setIsPersonalDataOpen] = useState(true);
    const [isEducationOpen, setIsEducationOpen] = useState(false);
    const [isExperienceOpen, setIsExperienceOpen] = useState(false);

    return (
        <section className="insert-data">
            <h2 className="sr-only">Introduce data</h2>

            <div className="form-section accordion">
                <div
                    className="accordion-header"
                    role="button"
                    aria-expanded={isPersonalDataOpen}
                    aria-label={isPersonalDataOpen
                        ? "Collapse Personal Information section"
                        : "Expand Personal Information section"
                    }
                    onClick={() => setIsPersonalDataOpen(!isPersonalDataOpen)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        setIsPersonalDataOpen(!isPersonalDataOpen);
                    }
                    }}
                >
                    <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                    <h3 className="sub-title">Personal Information</h3>
                    {isPersonalDataOpen ? (
                        <><FontAwesomeIcon icon={faChevronUp} className="ms-auto" aria-hidden="true" /></>
                    ) : (
                        <><FontAwesomeIcon icon={faChevronDown} className="ms-auto" aria-hidden="true" /></>
                    )}
                </div>

                {isPersonalDataOpen && <div className="accordion-body">
                    {isEditing ? (
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
                    )}
                </div>}
            </div>

            <div className="form-section accordion">
                <div
                    className="accordion-header"
                    role="button"
                    aria-expanded={isEducationOpen}
                    aria-label={isEducationOpen
                        ? 'Collapse Education section'
                        : 'Expend Education section'
                    }
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            setIsEducationOpen(!isEducationOpen)
                        }
                    }}
                    onClick={() => setIsEducationOpen(!isEducationOpen)}
                >
                    <FontAwesomeIcon icon={faGraduationCap} aria-hidden="true" />
                    <h3 className="sub-title">Education</h3>
                    {isEducationOpen ? (
                        <><FontAwesomeIcon icon={faChevronUp} className="ms-auto" aria-hidden="true" /></>
                    ) : (
                        <><FontAwesomeIcon icon={faChevronDown} className="ms-auto" aria-hidden="true" /></>
                    )}
                </div>

                {isEducationOpen && <div className="accordion-body"> {
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
                                aria-label="Open Education form"
                                onClick={() => {
                                    setIsEditingEducation(true)
                                    setEducationEditingId(null)
                                }}
                            >
                                <FontAwesomeIcon icon={faPlus} className="me-2" aria-hidden="true" />Education
                            </button>
                        </>
                    )
                }</div>}
            </div>

            <div className="form-section accordion">
                <div 
                    className="accordion-header"
                    role="button"
                    aria-expanded={isExperienceOpen}
                    aria-label={isExperienceOpen 
                        ? 'Collapse Work Experience section'
                        : 'Expend Work Experience section'
                    }
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            setIsExperienceOpen(!isExperienceOpen)
                        }
                    }}
                    onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                >
                    <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" />
                    <h3 className="sub-title">Work Experience</h3>
                    {isExperienceOpen ? (
                        <><FontAwesomeIcon icon={faChevronUp} className="ms-auto" aria-hidden="true" /></>
                    ) : (
                        <><FontAwesomeIcon icon={faChevronDown} className="ms-auto" aria-hidden="true" /></>
                    )}
                </div>

                {isExperienceOpen && <div className="accordion-body">{
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
                                aria-label="Open Experience form"
                                onClick={() => {
                                    setIsEditingExperience(true)
                                    setExperienceEditingId(null)
                                }}
                            >
                                <FontAwesomeIcon icon={faPlus} className="me-2" aria-hidden="true" />Experience
                            </button>
                        </>
                    )}</div>}
            </div>
        </section>
    );
}

export default FormSection;
