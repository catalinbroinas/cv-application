import PersonalDataForm from "../../components/forms/PersonalDataForm";
import EducationForm from "../../components/forms/EducationForm";
import ExperienceForm from "../../components/forms/ExperienceForm";

function FormSection() {
    return (
        <section className="insert-data">
            <h2 className="title">Introduce data</h2>

            <PersonalDataForm />
            <EducationForm />
            <ExperienceForm />
        </section>
    );
}

export default FormSection;
