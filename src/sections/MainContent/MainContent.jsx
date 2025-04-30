import { useState } from "react";

import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";

function MainContent() {
    const [personalData, setPersonalData] = useState({
        firstName: 'Catalin',
        lastName: 'Broinas',
        email: 'catalinbroinas@yahoo.com',
        phone: '0765 xxx xxx',
        address: 'Oradea, Romania'
    });
    const [educationData, setEducationData] = useState({
        schoolName: 'Universitatea Oradea',
        schoolLocation: 'Oradea, Romania',
        degree: 'Calculatoare și Tehnologia Informației',
        educationStartDate: '2015-10.01',
        educationEndDate: '2019-09-12'
    });
    const [experienceData, setExperienceData] = useState({
        jobTitle: 'Full stack developer',
        companyName: 'SDG Webs',
        experienceStartDate: '2018-09-30',
        experienceEndDate: '2018-11-30',
        jobDescription: 'Build website with PHP and MySQL'
    });

    return (
        <div className="container">
            <div className="main-content">
                <FormSection 
                    setPersonalData={setPersonalData}
                    personalData={personalData}
                    setEducationData={setEducationData}
                    educationData={educationData}
                    setExperienceData={setExperienceData}
                />
                <PreviewSection 
                    personalData={personalData}
                    educationData={educationData}
                    experienceData={experienceData}
                />
            </div>
        </div>
    );
}

export default MainContent;
