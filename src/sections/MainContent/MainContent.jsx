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

    return (
        <div className="container">
            <div className="main-content">
                <FormSection setPersonalData={setPersonalData} />
                <PreviewSection personalData={personalData} />
            </div>
        </div>
    );
}

export default MainContent;
