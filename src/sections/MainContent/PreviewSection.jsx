import CVHeader from "../../components/cv/CVHeader";
import CVEducation from "../../components/cv/CVEducation";
import CVExperience from "../../components/cv/CVExperience";

function PreviewSection({ personalData, educationData }) {
    return (
        <section className="preview">
            <h2 className="sr-only">CV generated</h2>

            <div className="cv">
                <CVHeader personalData={personalData} />

                <div className="cv-body">
                    <CVEducation educationData={educationData} />
                    <CVExperience
                        company="SDG Webs"
                        job="Full stack developer"
                        description="Build website with PHP and MySQL"
                        startDate="30.09.2018"
                        endDate="30.11.2018"
                    />
                </div>
            </div>
        </section>
    );
}

export default PreviewSection;
