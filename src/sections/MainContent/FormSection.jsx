import PersonalDataForm from "../../components/forms/PersonalDataForm";
import EducationForm from "../../components/forms/EducationForm";
import ExperienceForm from "../../components/forms/ExperienceForm";

function FormSection({ setPersonalData, setEducationData, setExperienceData }) {
    return (
        <section className="insert-data">
            <h2 className="sr-only">Introduce data</h2>

            <PersonalDataForm onSave={setPersonalData} />
            <EducationForm onAdd={setEducationData} />
            <ExperienceForm onAdd={setExperienceData} />
        </section>
    );
}

export default FormSection;
