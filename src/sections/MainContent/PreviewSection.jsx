import CVHeader from "../../components/cv/CVHeader";
import CVEducation from "../../components/cv/CVEducation";
import CVExperience from "../../components/cv/CVExperience";

function PreviewSection({ personalData, educationData, experienceData }) {
    return (
        <section className="preview">
            <h2 className="sr-only">CV generated</h2>

            <div className="cv">
                <CVHeader personalData={personalData} />

                <div className="cv-body">
                    <CVEducation educationData={educationData} />
                    <CVExperience experienceData={experienceData} />
                </div>
            </div>
        </section>
    );
}

export default PreviewSection;
