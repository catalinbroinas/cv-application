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

    return (
        <div className="container">
            <div className="main-content">
                <FormSection 
                    setPersonalData={setPersonalData}
                    setEducationData={setEducationData}
                />
                <PreviewSection 
                    personalData={personalData}
                    educationData={educationData}
                />
            </div>
        </div>
    );
}

export default MainContent;
